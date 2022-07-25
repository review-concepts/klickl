<script setup lang="ts">
import { echarts } from "@/plugins/echarts";
import { ref, onMounted } from "vue";
import getKLineOption from "./getKLineOption";
const kline = ref<HTMLElement | null>(null);
let chart: echarts.ECharts | null = null;
const klineOption = getKLineOption();

console.log(klineOption);

onMounted(() => {
  if (kline.value) {
    chart = echarts.init(kline.value);
    chart.setOption(klineOption);
  }
});
</script>

<template>
  <div class="hotMarkets">
    <div class="page-inner">
      <n-grid x-gap="12" :cols="4">
        <n-gi>
          <n-card size="small">
            <n-thing content-indented>
              <template #header> BTC/USDT </template>
              <template #header-extra>
                <n-tag type="success" size="large">
                  <n-number-animation :from="0.0" :to="24.0" :precision="2" />%
                </n-tag>
              </template>
              <n-space justify="space-between">
                <n-number-animation :from="0.0" :to="22725.0" :precision="2" />
                <div class="kline" ref="kline"></div>
              </n-space>
            </n-thing>
          </n-card>
        </n-gi>
        <n-gi>
          <n-card size="small">test</n-card>
        </n-gi>
        <n-gi>
          <n-card size="small">test</n-card>
        </n-gi>
        <n-gi>
          <n-card size="small">test</n-card>
        </n-gi>
      </n-grid>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hotMarkets {
  height: 150px;
  padding-top: 40px;
  background-color: #f9f7fb;

  .kline {
    width: 150px;
    height: 85px;
  }
}
</style>
