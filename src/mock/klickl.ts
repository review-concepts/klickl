import { mock, Random } from "mockjs";
import type { PageListBody } from "@/api";

const responseProps = {
  msg: "",
  statusCode: "200",
};

const list = Array(100)
  .fill(1)
  .map(() => {
    return {
      id: "@id",
      title: "@title",
      datetime: "@datetime",
    };
  });

export default {
  getHotMarkets() {
    return mock({
      "data|4": [
        {
          "symbol|+1": ["BTC/USDT", "EOS/USDT", "ETH/BTC", "ETH/USDT"],
          percent: "@float(-30, 100, 2, 3)",
          number: "@float(1000, 10000, 2, 3)",
          "data|10": ["@integer(1, 100)"],
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
