<script setup lang="ts">
import type { DataTableColumns } from "naive-ui";
import { NThing } from "naive-ui";
import { h } from "vue";
import { getMarkets } from "@/api";
import type { MarketItem } from "@/api";
import { ref } from "vue";
const markets = ref<MarketItem[]>([]);

getMarkets({ pageIndex: 1, pageSize: 5 }).then((list) => {
  markets.value = list;
});

const createColumns = (): DataTableColumns<MarketItem> => {
  return [
    {
      title: "币种名称",
      key: "coin",
      render: (row, index) => {
        console.log(row.coin);
        return `星期 ${index + 1}`;
      },
    },
    {
      title: "Title",
      key: "price",
    },
    {
      title: "Length",
      key: "total",
    },
  ];
};

const columns = createColumns();
</script>

<template>
  <div class="markets">
    <div class="page-inner">
      <n-h1>
        <n-gradient-text type="info" size="50"> 市场趋势 </n-gradient-text>
      </n-h1>
      <n-data-table
        :columns="columns"
        :data="markets"
        :pagination="false"
        :bordered="false"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
