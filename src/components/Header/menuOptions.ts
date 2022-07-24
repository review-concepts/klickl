import { h } from "vue";
import { RouterLink } from "vue-router";
import type { MenuOption } from "naive-ui";
const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "Quotation",
          },
        },
        { default: () => "行情" }
      ),
    key: "Quotation",
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "LegalCurrency",
          },
        },
        { default: () => "法币交易" }
      ),
    key: "LegalCurrency",
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "CurrencyTrade",
          },
        },
        { default: () => "币币交易" }
      ),
    key: "CurrencyTrade",
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "ContractTrade",
          },
        },
        { default: () => "合约交易" }
      ),
    key: "ContractTrade",
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "Alliance",
          },
        },
        { default: () => "Alliance" }
      ),
    key: "Alliance",
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "BridgeMarket",
          },
        },
        { default: () => "Bridge Market" }
      ),
    key: "BridgeMarket",
  },
];
export default menuOptions;
