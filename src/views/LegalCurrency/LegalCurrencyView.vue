<template>
  <div class="page-view">
    <div class="chart" ref="tradingviewChart"></div>
  </div>
</template>

<script setup lang="ts">
import { DataFeed, widget as TvWidget } from "./datafeed";
import type { GetBarsParams } from "./datafeed";
import type {
  IChartingLibraryWidget,
  LibrarySymbolInfo,
  ResolutionString,
} from "/public/charting_library";
import { onMounted, ref, toRefs, watch } from "vue";

import { getKlineHistory } from "@/api";
import { intervalMap, supported_resolutions } from "@/utils/hardCode";

import { ws } from "@/utils/socket";

const tradingviewChart = ref<HTMLElement | null>(null);
const props = defineProps({
  symbol: {
    type: String,
    default: "eulusdt",
  },
  symbolInfo: {
    type: Object,
    // required: true,
    default() {
      return {
        "base-currency": "eul",
        "quote-currency": "usdt",
        "price-precision": 4,
        "amount-precision": 4,
        "symbol-partition": "main",
        symbol: "eulusdt",
        state: "online",
        "value-precision": 8,
        "min-order-amt": 0.0001,
        "max-order-amt": 72516,
        "min-order-value": 1,
        "limit-order-min-order-amt": 0.0001,
        "limit-order-max-order-amt": 72516,
        "limit-order-max-buy-amt": 72516,
        "limit-order-max-sell-amt": 72516,
        "buy-limit-must-less-than": 1.1,
        "sell-limit-must-greater-than": 0.9,
        "sell-market-min-order-amt": 0.0001,
        "sell-market-max-order-amt": 7251,
        "buy-market-max-order-value": 100000,
        "market-sell-order-rate-must-less-than": 0.1,
        "market-buy-order-rate-must-less-than": 0.1,
        "api-trading": "enabled",
        tags: "",
        pair: "EUL/USDT",
      };
    },
  },
});

const widget = ref<IChartingLibraryWidget | null>(null);
const interval = ref("5min");
const { symbol, symbolInfo } = toRefs(props);

/** 訂閱websocket */
const subscribeKLine = () => {
  ws.subscribe(
    `market.${symbol.value.toLocaleLowerCase()}.kline.${interval.value}`,
    {
      id: "react-tv",
      sub: `market.${symbol.value.toLocaleLowerCase()}.kline.${interval.value}`,
    },
    (data) => {
      const tick = data.tick;
      datafeed.value.updateKLine({
        time: tick.id * 1000,
        open: tick.open,
        high: tick.high,
        low: tick.low,
        close: tick.close,
        volume: tick.vol,
      });
    }
  );
};

/** websocket取消訂閱 */
const unsubscribeKLine = () => {
  ws.unsubscribe(`market.${symbol.value}.kline.${interval.value}`);
};
/** 取得數據 訂閱數據 */
const getBars = async (params: GetBarsParams) => {
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
      unsubscribeKLine();
      for (const key in intervalMap) {
        if (intervalMap[key] === params.resolution) {
          interval.value = key;
        }
      }
    }
    const symbolFlag = symbol.value.split(" ").join("");
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
      subscribeKLine();
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
  return new Promise((resolve) => {
    resolve({
      name: symbol.value,
      full_name: symbol.value,
      description: symbol.value,
      type: symbol.value,
      session: "24x7",
      exchange: "HuoBi",
      listed_exchange: symbol.value,
      timezone: "Asia/Shanghai",
      format: "price",
      pricescale: Math.pow(10, symbolInfo.value["price-precision"]),
      minmov: 1,
      volume_precision: symbolInfo.value["value-precision"],
      has_intraday: true,
      supported_resolutions: supported_resolutions,
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
  if (!tradingviewChart.value) return;
  widget.value = new TvWidget({
    fullscreen: true,
    symbol: symbol.value,
    interval: intervalMap[interval.value] as ResolutionString,
    container: tradingviewChart.value,
    datafeed: datafeed.value,
    library_path: "/charting_library/",
    locale: "zh",
    theme: "Dark",
    timezone: "Asia/Shanghai",
  });
};

const setSymbol = (newSymbol: string) => {
  unsubscribeKLine();
  symbol.value = newSymbol;
  widget.value?.setSymbol(
    newSymbol.toLocaleUpperCase(),
    intervalMap[interval.value] as ResolutionString,
    () => {
      console.log("------setSymbol---------", symbol.value);
    }
  );
};
watch(symbol, (newsymbol) => {
  setSymbol(newsymbol);
});

onMounted(() => {
  initTradingView();
});
</script>

<style scoped></style>
