import type { KlineHistoryItem } from "@/api";
import { ws } from "@/utils";

/** 訂閱websocket */
export const subscribeKLine = (
  symbol: string,
  interval: string,
  callback: (data: { tick: KlineHistoryItem }) => void
) => {
  ws.subscribe(
    `market.${symbol.toLocaleLowerCase()}.kline.${interval}`,
    {
      id: "react-tv",
      sub: `market.${symbol.toLocaleLowerCase()}.kline.${interval}`,
    },
    callback
  );
};

/** websocket取消訂閱 */
export const unsubscribeKLine = (symbol: string, interval: string) => {
  ws.unsubscribe(`market.${symbol}.kline.${interval}`);
};
