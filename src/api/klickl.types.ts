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

export interface TradingVolumeItem {
  id: string;
  typeName: string;
  label: string;
  count: number;
  precision: number;
}

export interface MarketItem {
  id: string;
  coinUrl: string;
  coin: string;
  coinName: string;
  price: number;
  percent: number;
  total: number;
  chartData: number[];
}

export interface GetKlineDataParams {
  TradingConfigId: string;
  LineType: number;
  ClientType?: 0 | 1 | 2 | 1; // Web = 0 Android = 1 iOS = 2 H5 = 4
  LanguageCode?: string;
  PageIndex: number;
  PageSize: number;
}

export interface KlineHistoryItem {
  amount: number;
  close: number;
  count: number;
  high: number;
  id: number;
  low: number;
  open: number;
  vol: number;
}

export interface KlineDataItem {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}
