<script setup lang="ts">
import type { HotMarketItem } from "@/api";
import { getHotMarkets } from "@/api";
import { ref, onMounted, onBeforeUnmount } from "vue";
import KlineChartComp from "./KlineChart/KlineChartComp.vue";

const hotMarkets = ref<HotMarketItem[]>([]);

const getMarkets = async () => {
  getHotMarkets().then((list) => {
    hotMarkets.value = list;
  });
};

let timer: NodeJS.Timer;
onMounted(async () => {
  await getMarkets();
  // timer = setInterval(() => {
  //   getMarkets();
  // }, 5000);
});

onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<template>
  <div class="hotMarkets">
    <div class="page-inner">
      <n-grid x-gap="12" :cols="4">
        <n-gi v-for="(item, index) of hotMarkets" :key="item.symbol">
          <n-card
            size="small"
            class="wow fadeInUp market-card"
            :data-wow-delay="index * 100 + 'ms'"
          >
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
                <KlineChartComp
                  width="150px"
                  height="50px"
                  :data="item.data"
                  class="market-kline"
                />
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
  padding-top: 60px;
  background-color: #f9f7fb;

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

  .market-kline {
    padding-top: 20px;
  }
}
</style>
