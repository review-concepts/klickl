import type { MockMethod, Recordable } from "vite-plugin-mock";
import Klickl from "./klickl";

export default [
  {
    url: "/api/getDownloadQrcode",
    method: "get",
    response: () => Klickl.getDownloadQrcode(),
  },
  {
    url: "/api/getNoticeList",
    method: "post",
    response: ({ body }: Recordable) => Klickl.getNoticeList(body),
  },
  {
    url: "/api/getLanguages",
    method: "get",
    response: () => Klickl.getLanguages(),
  },
  {
    url: "/api/getCurrencies",
    method: "get",
    response: () => Klickl.getCurrencies(),
  },
  {
    url: "/api/getBanners",
    method: "get",
    response: () => Klickl.getBanners(),
  },
  {
    url: "/api/getHotMarkets",
    method: "get",
    response: () => Klickl.getHotMarkets(),
  },
  {
    url: "/api/getTradingVolume",
    method: "get",
    response: () => Klickl.getTradingVolume(),
  },
  {
    url: "/api/getMarkets",
    method: "post",
    response: ({ body }: Recordable) => Klickl.getMarkets(body),
  },
] as MockMethod[];
