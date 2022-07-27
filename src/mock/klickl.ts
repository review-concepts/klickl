import type { Recordable } from "vite-plugin-mock";
import { mock } from "mockjs";
import type { PageListBody } from "@/api";

const responseProps = {
  msg: "",
  statusCode: "200",
};

const list = mock({
  "list|100": [
    {
      id: "@id",
      title: "@title", // 标题
      datetime: "@datetime", // 时间
      "coinUrl|+1": [
        // 币种图标
        "/images/klickl/btc.png",
        "/images/klickl/eth.png",
        "/images/klickl/eos.png",
        "/images/klickl/etc.png",
        "/images/klickl/ltc.png",
      ],
      "coin|+2": ["BTC", "ETH", "EOS", "ETC", "LTC"], // 币种简称
      "coinName|+1": [
        // 币种名称
        "Bitcoin",
        "Ethereum",
        "EOS",
        "Ethereum Classic",
        "Litecoin",
      ],
      price: "@float(10, 100, 3, 5)", // 价格
      percent: "@float(-20, 20, 2)", // 百分比
      total: "@float(20, 500, 2)", // 成交额 总数
      "chartData|30": ["@integer(0, 100)"], // 折线图数据
    },
  ],
})["list"];

export default {
  GetLineData(body: Recordable) {
    return mock({
      "data|2000": [
        {
          amount: "@float(0, 1, 3, 5)",
          close: "@float(0, 1, 3, 5)",
          count: "@integer(1, 100)",
          high: "@float(0, 1, 3, 5)",
          id: '@datetime("T")',
          low: "@float(0, 1, 3, 5)",
          open: "@float(0, 1, 3, 5)",
          vol: "@float(0, 1, 3, 5)",
        },
      ],
      NeedLang: true,
      Status: true,
      Msg: "",
      Url: null,
      StatusCode: "200",
      Extra: null,
    });
  },
  getMarkets(body: PageListBody) {
    const { pageIndex, pageSize } = body;
    const start = (pageIndex - 1) * pageSize;
    const end = start + pageSize;
    const data = list.slice(start, end);
    return mock({
      data,
      ...responseProps,
    });
  },
  getTradingVolume() {
    return mock({
      "data|3": [
        {
          id: "@id",
          "typeName|+1": ["24小时成交额", "注册用户", "支持币种"],
          "label|+1": ["USD", "+", "+"],
          count: "@float(2000, 5000, 2)",
          "precision|+1": [2, 0, 0],
        },
      ],
      ...responseProps,
    });
  },
  getHotMarkets() {
    return mock({
      "data|4": [
        {
          "symbol|+1": ["BTC/USDT", "EOS/USDT", "ETH/BTC", "ETH/USDT"],
          percent: "@float(-100, 100, 2, 3)",
          number: "@float(1000, 10000, 2, 3)",
          "data|30": ["@integer(1, 100)"],
        },
      ],
      ...responseProps,
    });
  },
  getBanners() {
    return mock({
      data: [
        "/images/klickl/01-carousel.png",
        "/images/klickl/02-carousel.png",
        "/images/klickl/03-carousel.png",
        "/images/klickl/04-carousel.png",
        "/images/klickl/05-carousel.png",
      ],
      ...responseProps,
    });
  },
  getCurrencies() {
    return mock({
      data: [
        {
          label: "USD",
          type: "USD",
        },
        {
          label: "IRR",
          type: "IRR",
        },
        {
          label: "INR",
          type: "INR",
        },
        {
          label: "TRY",
          type: "TRY",
        },
      ],
      ...responseProps,
    });
  },
  getLanguages() {
    return mock({
      data: [
        {
          label: "简体中文",
          type: "zh-cn",
        },
        {
          label: "繁体中文",
          type: "zh-tw",
        },
        {
          label: "English",
          type: "en",
        },
        {
          label: "日本语",
          type: "jp",
        },
      ],
      ...responseProps,
    });
  },
  getDownloadQrcode() {
    return mock({
      data: [
        {
          url: "/images/klickl/qrcode.png",
          label: "iOS",
        },
        {
          url: "/images/klickl/qrcode.png",
          label: "Android Beta",
        },
        {
          url: "/images/klickl/qrcode.png",
          label: "Google Play",
        },
      ],
      ...responseProps,
    });
  },

  getNoticeList(body: PageListBody) {
    const { pageIndex, pageSize } = body;
    const start = (pageIndex - 1) * pageSize;
    const end = start + pageSize;
    const data = list.slice(start, end);
    return mock({
      data,
      ...responseProps,
    });
  },
};
