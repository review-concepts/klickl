import type { Recordable } from "vite-plugin-mock";
import { mock, Random } from "mockjs";
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

const getKlineList = (query: Recordable) => {
  // symbol=eulusdt&period=5min&size=1748
  const { symbol, period, size } = query;
  const timestamp = Date.now();
  let step = 0;
  switch (period) {
    case "1min":
      step = 1 * 60 * 1000;
      break;
    case "5min":
      step = 5 * 60 * 1000;
    case "15min":
      step = 15 * 60 * 1000;
    case "30min":
      step = 30 * 60 * 1000;
      break;
    case "60min":
      step = 60 * 60 * 1000;
      break;
    case "4hour":
      step = 4 * 60 * 60 * 1000;
      break;
    case "1day":
      step = 24 * 60 * 60 * 1000;
      break;
  }
  let high = Number(Random.float(0, 1, 5, 8).toFixed(4));
  let low = Number(high.toString().slice(0, -1));
  const list = Array(Number(size))
    .fill(1)
    .map((val, index) => {
      const randomNum = Math.random();
      const isOpen = randomNum > 0.5;
      const offset = Number(`0.000${randomNum.toString().slice(-3)}`);
      if (isOpen) {
        low += offset;
        high += offset;
      } else {
        low -= offset;
        high -= offset;
      }
      return {
        id: timestamp - index * step,
        count: Random.integer(1, 10),
        close: isOpen ? low : high,
        open: isOpen ? high : low,
        low,
        high,
        vol: Random.float(0, 10, 5, 8),
      };
    });
  return {
    data: list,
    ch: `market.${symbol}.kline.${period}`,
  };
};

export default {
  GetLineData(query: Recordable) {
    return getKlineList(query);
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
