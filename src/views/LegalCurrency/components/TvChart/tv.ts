import dayjs from "@/plugins/dayjs";
import type { KlineHistoryItem } from "@/api";
import { DataFeed, widget as TvWidget } from "./datafeed";
import type { GetBarsParams } from "./datafeed";
import type {
  IChartingLibraryWidget,
  LibrarySymbolInfo,
  ResolutionString,
  Timezone,
} from "/public/charting_library";
import { ref, watch } from "vue";
import type { Ref } from "vue";
import { getKlineHistory } from "@/api";
import { subscribeKLine, unsubscribeKLine } from "./ws";
import {
  intervalMap,
  supported_resolutions,
  getLoadingScreenColor,
  setOverrides,
  setStudiesOverrides,
} from "@/utils";

export interface KlineSymbolInfo {
  "price-precision": number;
  symbol: string;
  "value-precision": number;
}

export const useTv = (
  symbolInfo: Ref<KlineSymbolInfo>,
  container: HTMLElement
) => {
  const widget = ref<IChartingLibraryWidget | null>(null);
  const interval = ref("5min");

  const klineCallback = (data: { tick: KlineHistoryItem }) => {
    const tick = data.tick;
    datafeed.value.updateKLine({
      time: tick.id * 1000,
      open: tick.open,
      high: tick.high,
      low: tick.low,
      close: tick.close,
      volume: tick.vol,
    });
  };

  /** 取得數據 訂閱數據 */
  const getBars = async (params: GetBarsParams) => {
    const symbol = symbolInfo.value.symbol;
    try {
      console.log("params: ", params);
      const size = window.innerWidth;
      // 是否第一次請求歷史數據
      if (!params.firstDataRequest) {
        return {
          bars: [],
          meta: {
            noData: true,
          },
        };
      }
      if (params.resolution !== intervalMap[interval.value]) {
        unsubscribeKLine(symbol, interval.value);
        for (const key in intervalMap) {
          if (intervalMap[key] === params.resolution) {
            interval.value = key;
          }
        }
      }
      const symbolFlag = symbol.split(" ").join("");
      // do api get history
      const list = await getKlineHistory({
        symbol: symbolFlag.toLocaleLowerCase(),
        period: interval.value,
        size: size > 2000 ? 2000 : size,
      });

      console.log("list: ", list);
      if (
        params.resolution === intervalMap[interval.value] &&
        params.firstDataRequest &&
        list
      ) {
        subscribeKLine(symbol, interval.value, klineCallback);
      }

      if (!list) {
        return {
          bars: [],
          meta: { noData: true },
        };
      }
      return {
        bars: list,
        meta: {
          noData: !list.length,
        },
      };
    } catch (error) {
      console.log("getBars error:", error);
      throw error;
    }
  };
  /** 配置trading-view */
  const resolveSymbol = (): Promise<LibrarySymbolInfo> => {
    const symbol = symbolInfo.value.symbol;
    return new Promise((resolve) => {
      resolve({
        name: symbol,
        ticker: symbol,
        full_name: symbol,
        description: symbol,
        type: "bitcoin",
        session: "24x7",
        exchange: "HuoBi",
        listed_exchange: symbol,
        timezone: "Asia/Shanghai",
        format: "price",
        pricescale: Math.pow(10, symbolInfo.value["price-precision"]),
        minmov: 1,
        volume_precision: symbolInfo.value["value-precision"],
        has_intraday: true,
        supported_resolutions: supported_resolutions,
        // 日内数据的精度
        intraday_multipliers: ["0", "1", "5", "15", "30", "60"],
        has_seconds: false,
      });
    });
  };

  const datafeed = ref(
    new DataFeed({
      getBars: (params: GetBarsParams) => getBars(params),
      fetchResolveSymbol: () => resolveSymbol(),
      fetchConfiguration: () => {
        return new Promise((resolve) => {
          resolve({
            supported_resolutions,
          });
        });
      },
    })
  );

  /** 初始化trading-view */
  const initTradingView = () => {
    const screenColor = getLoadingScreenColor("Dark");
    const overrides = setOverrides("Dark");
    const sdudiesOverrides = setStudiesOverrides("Dark");
    const timezone = dayjs.tz.guess() as Timezone;
    widget.value = new TvWidget({
      // fullscreen: true,
      theme: "Dark",
      symbol: symbolInfo.value.symbol,
      container,
      datafeed: datafeed.value,
      interval: intervalMap[interval.value] as ResolutionString,
      custom_css_url: "/charting_library/theme.css",
      locale: "zh",
      loading_screen: {
        foregroundColor: screenColor,
        backgroundColor: screenColor,
      },
      overrides,
      studies_overrides: sdudiesOverrides,
      fullscreen: false,
      autosize: true,
      library_path: "/charting_library/",
      timezone,
      // debug: true,
      disabled_features: [
        "header_widget",
        "use_localstorage_for_settings",
        "header_resolutions",
        "header_symbol_search",
        "header_screenshot",
        "header_compare",
        "header_settings",
        "header_fullscreen_button",
        "header_undo_redo",
        "symbol_info",
        "header_chart_type",
        "header_interval_dialog_button",
        "go_to_date",
        "caption_buttons_text_if_possible",
        "volume_force_overlay", // 强制显示成交量
      ],
      enabled_features: ["two_character_bar_marks_labels"],
      time_frames: [
        {
          text: "2Year",
          resolution: "D" as ResolutionString,
          title: "2Y",
          description: "",
        },
        {
          text: "1Year",
          resolution: "D" as ResolutionString,
          title: "1Y",
          description: "",
        },
        {
          text: "6Mon",
          resolution: "60" as ResolutionString,
          title: "6MN",
          description: "",
        },
        {
          text: "3Mon",
          resolution: "60" as ResolutionString,
          title: "3MN",
          description: "",
        },
      ],
    });
  };

  const setSymbol = (newSymbol: string) => {
    unsubscribeKLine(newSymbol, interval.value);
    widget.value?.setSymbol(
      newSymbol.toLocaleUpperCase(),
      intervalMap[interval.value] as ResolutionString,
      () => {
        console.log("------setSymbol---------", newSymbol);
      }
    );
  };

  watch(symbolInfo, () => {
    setSymbol(symbolInfo.value.symbol);
  });

  initTradingView();
};
