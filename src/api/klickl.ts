import http from "@/plugins/axios";
import type {
  BannerList,
  CurrencyItem,
  DownloadQrcode,
  HotMarketItem,
  KlineDataItem,
  KlineHistoryItem,
  LanguageItem,
  MarketItem,
  NoticeItem,
  TradingVolumeItem,
} from "./klickl.types";
import type { PageListBody } from "@/api";

/** 取得kline歷史紀錄 */
export const getKlineHistory = async (
  params: Record<string, any>
): Promise<KlineDataItem[]> => {
  try {
    const { data }: { data: KlineHistoryItem[] } = await http({
      url: "/api/GetLineData",
      method: "get",
      params,
    });

    const list = data
      .map((item) => {
        return {
          time: item.id * 1,
          open: item.open,
          high: item.high,
          low: item.low,
          close: item.close,
          volume: item.vol,
        };
      })
      .sort((a, b) => (a.time > b.time ? 1 : -1));
    return list as KlineDataItem[];
  } catch (err) {
    return Promise.reject(err);
  }
};

/** getMarkets */
export const getMarkets = async (body: PageListBody): Promise<MarketItem[]> => {
  try {
    const { data } = await http({
      url: "/api/getMarkets",
      method: "post",
      data: body,
    });
    return data.data as MarketItem[];
  } catch (err) {
    return Promise.reject(err);
  }
};

/** getTradingVolume  */
export const getTradingVolume = async (): Promise<TradingVolumeItem[]> => {
  try {
    const { data } = await http({
      url: "/api/getTradingVolume",
      method: "get",
    });
    return data.data as TradingVolumeItem[];
  } catch (err) {
    return Promise.reject(err);
  }
};

/** getHotMarkets  */
export const getHotMarkets = async (): Promise<HotMarketItem[]> => {
  try {
    const { data } = await http({
      url: "/api/getHotMarkets",
      method: "get",
    });
    return data.data as HotMarketItem[];
  } catch (err) {
    return Promise.reject(err);
  }
};

/** 获取轮播图 */
export const getBanners = async (): Promise<BannerList> => {
  try {
    const { data } = await http({
      url: "/api/getBanners",
      method: "get",
    });
    return data.data as BannerList;
  } catch (err) {
    return Promise.reject(err);
  }
};

/** 获取语言 */
export const getLanguages = async (): Promise<LanguageItem[]> => {
  try {
    const { data } = await http({
      url: "/api/getLanguages",
      method: "get",
    });
    return data.data as LanguageItem[];
  } catch (err) {
    return Promise.reject(err);
  }
};

/** 获取折算货币 */
export const getCurrencies = async (): Promise<CurrencyItem[]> => {
  try {
    const { data } = await http({
      url: "/api/getCurrencies",
      method: "get",
    });
    return data.data as CurrencyItem[];
  } catch (err) {
    return Promise.reject(err);
  }
};

/** 获取下载二维码 */
export const getDownloadQrcode = async (): Promise<DownloadQrcode[]> => {
  try {
    const { data } = await http({
      url: "/api/getDownloadQrcode",
      method: "get",
    });
    return data.data as DownloadQrcode[];
  } catch (err) {
    return Promise.reject(err);
  }
};

/** 获取通知列表 */
export const getNoticeList = async (
  body: PageListBody
): Promise<NoticeItem[]> => {
  try {
    const { data } = await http({
      url: "/api/getNoticeList",
      method: "post",
      data: body,
    });
    return data.data as NoticeItem[];
  } catch (err) {
    return Promise.reject(err);
  }
};
