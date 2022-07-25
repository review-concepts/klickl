<script setup lang="ts">
import type { HotMarketItem } from "@/api";
import { getHotMarkets } from "@/api";
import { echarts } from "@/plugins/echarts";
import { ref, onMounted, onBeforeUnmount } from "vue";
import getKLineOption from "./getKLineOption";
const klines = ref<HTMLElement[]>([]);

const hotMarkets = ref<HotMarketItem[]>([]);

const renderCharts = (list: HotMarketItem[]) => {
  for (let kline of klines.value) {
    const symbol = kline.getAttribute("data-label");
    const res = list.find((item) => item.symbol === symbol);
    if (res) {
      const klineOption = getKLineOption(res.data);
      const chart = echarts.init(kline);
      chart.setOption(klineOption);
    }
  }
};

const getMarketsAndRender = async () => {
  getHotMarkets()
    .then((list) => {
      hotMarkets.value = list;
      return Promise.resolve(list);
    })
    .then((list) => {
      renderCharts(list);
    });
};

let timer: NodeJS.Timer;
onMounted(() => {
  getMarketsAndRender();
  timer = setInterval(() => {
    getMarketsAndRender();
  }, 5000);
});

onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<template>
  <div class="hotMarkets">
    <div class="page-inner">
      <n-grid x-gap="12" :cols="4">
        <n-gi v-for="item of hotMarkets" :key="item.symbol">
          <n-card size="small" class="market-card">
            <n-thing content-indented>
              <template #header> {{ item.symbol }} </template>
              <template #header-extra>
                <n-tag
                  :type="item.percent > 0 ? 'success' : 'error'"
                  size="large"
                >
                  <n-number-animation
                    :from="0.0"
                    :to="item.percent"
                    :precision="2"
                  />%
                </n-tag>
              </template>
              <n-space justify="space-between" class="market-content">
                <n-number-animation
                  :from="0.0"
                  :to="item.number"
                  :precision="2"
                />
                <div class="kline" :data-label="item.symbol" ref="klines"></div>
              </n-space>
            </n-thing>
            <div class="market-mask">
              <n-button type="primary" round size="large"> 去交易 </n-button>
            </div>
          </n-card>
        </n-gi>
      </n-grid>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hotMarkets {
  padding-top: 40px;
  background-color: #f9f7fb;

  .kline {
    width: 150px;
    height: 80px;
  }

  :deep(.market-content > div:first-child) {
    color: #999;
    font-size: 20px;
    line-height: 80px;
  }

  .market-card {
    position: relative;
    &:hover {
      .market-mask {
        transform: scale(1, 1);
      }
    }
  }

  .market-mask {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    transition: all 0.2s;
    transform: scale(0, 0);
  }
}
</style>
