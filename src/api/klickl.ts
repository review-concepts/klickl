import http from "@/plugins/axios";
import type {
  BannerList,
  CurrencyItem,
  DownloadQrcode,
  HotMarketItem,
  LanguageItem,
  NoticeItem,
} from "./klickl.types";
import type { PageListBody } from "@/api";

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
