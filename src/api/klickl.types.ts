export interface DownloadQrcode {
  url: string;
  label: string;
}

export interface NoticeItem {
  id: string;
  title: string;
  datetime: string;
}

export interface CurrencyItem {
  label: string;
  type: string;
}

export interface LanguageItem {
  label: string;
  type: string;
}

export type BannerList = string[];

export interface HotMarketItem {
  symbol: string;
  percent: number;
  number: number;
  data: number[];
}
