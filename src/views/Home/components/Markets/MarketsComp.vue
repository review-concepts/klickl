<script setup lang="ts">
import type { DataTableColumns } from "naive-ui";
import { h } from "vue";
import { getMarkets } from "@/api";
import type { MarketItem } from "@/api";
import { ref } from "vue";
import IconThing from "./IconThing.vue";
import { NNumberAnimation, NButton } from "naive-ui";
import KlineChartComp from "../KlineChart/KlineChartComp.vue";
import { ArrowDown20Regular as ArrowDown } from "@vicons/fluent";
const markets = ref<MarketItem[]>([]);

getMarkets({ pageIndex: 1, pageSize: 5 }).then((list) => {
  markets.value = list;
});

const createColumns = (): DataTableColumns<MarketItem> => {
  return [
    {
      title: "币种名称",
      key: "coin",
      render: (row) => {
        return h(IconThing, { row });
      },
    },
    {
      title: "价格",
      key: "price",
      render: (row) => {
        return h("span", { class: "market-price" }, [
          "$ ",
          h(NNumberAnimation, { precision: 4, from: 0, to: row.price }),
        ]);
      },
    },
    {
      title: "24小时涨跌幅",
      key: "percent",
      render: (row) => {
        return h("span", { class: "market-percent" }, [
          h(
            NButton,
            { text: true, type: row.percent >= 0 ? "primary" : "error" },
            () => [
              h(NNumberAnimation, { precision: 2, from: 0, to: row.percent }),
              " %",
            ]
          ),
        ]);
      },
    },
    {
      title: "24小时成交额",
      key: "total",
      render: (row) => {
        return h("span", { class: "market-total" }, [
          "$ ",
          h(NNumberAnimation, { precision: 4, from: 0, to: row.total }),
          " M",
        ]);
      },
    },
    {
      title: "",
      key: "chartData",
      render: (row) => {
        return h(KlineChartComp, {
          width: "150px",
          height: "30px",
          data: row.chartData,
        });
      },
    },
  ];
};

const columns = createColumns();
</script>

<template>
  <div class="markets">
    <div class="page-inner">
      <n-h1 class="wow fadeInLeft">
        <n-gradient-text type="info" size="50"> 市场趋势 </n-gradient-text>
      </n-h1>
      <n-data-table
        class="wow fadeInRight"
        :columns="columns"
        :data="markets"
        :pagination="false"
        :bordered="false"
      >
        <template #coin>abc</template>
      </n-data-table>
      <n-space justify="center" class="wow fadeInUp market-more">
        <div class="market-more-wrap">
          <n-button text>查看更多</n-button>
          <n-icon size="24" class="market-more-icon arrowTransform">
            <ArrowDown />
          </n-icon>
        </div>
      </n-space>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.markets {
  padding: 30px 0;

  .market-more-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .market-more {
    margin-top: 40px;
  }

  .market-more-icon {
    margin-top: 15px;
  }
}
</style>
