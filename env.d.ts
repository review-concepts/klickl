/// <reference types="vite/client" />

declare module "wow.js";

declare global {
  interface Window {
    TradingView: any;
  }
}
