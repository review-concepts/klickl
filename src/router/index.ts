import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Quotation",
      name: "Quotation",
      component: () => import("../views/Quotation/QuotationView.vue"),
    },
    {
      path: "/LegalCurrency",
      name: "LegalCurrency",
      component: () => import("../views/LegalCurrency/LegalCurrencyView.vue"),
    },
    {
      path: "/CurrencyTrade",
      name: "CurrencyTrade",
      component: () => import("../views/CurrencyTrade/CurrencyTradeView.vue"),
    },
    {
      path: "/ContractTrade",
      name: "ContractTrade",
      component: () => import("../views/ContractTrade/ContractTradeView.vue"),
    },
    {
      path: "/Alliance",
      name: "Alliance",
      component: () => import("../views/Alliance/AllianceView.vue"),
    },
    {
      path: "/BridgeMarket",
      name: "BridgeMarket",
      component: () => import("../views/BridgeMarket/BridgeMarketView.vue"),
    },
  ],
});

export default router;
