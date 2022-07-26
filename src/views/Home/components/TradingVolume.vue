<script setup lang="ts">
import type { TradingVolumeItem } from "@/api";
import { getTradingVolume } from "@/api";
import { ref, onMounted, onBeforeUnmount } from "vue";

const tradingVolumes = ref<TradingVolumeItem[]>([]);

const getData = async () => {
  const list = await getTradingVolume();
  tradingVolumes.value = list;
};

let timer: NodeJS.Timer;
onMounted(async () => {
  await getData();
  // timer = setInterval(() => {
  //   getData();
  // }, 6000);
});

onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<template>
  <div class="trading-volume">
    <div class="page-inner">
      <n-space justify="space-around" size="large">
        <n-statistic
          :label="item.typeName"
          v-for="(item, index) of tradingVolumes"
          :key="item.id"
          class="wow fadeInUp imgAnimateUp"
          data-wow-duration="1s"
          :data-wow-delay="index * 200 + 'ms'"
        >
          <n-gradient-text type="primary" size="32">
            <n-number-animation
              :from="0.0"
              :to="item.count"
              :precision="item.precision"
            />
            {{ item.label }}
          </n-gradient-text>
        </n-statistic>
      </n-space>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.trading-volume {
  background-color: #f9f7fb;
  padding: 60px 0;

  :deep(.n-statistic__label) {
    font-size: 18px;
    color: #333;
  }
  :deep(.n-statistic-value) {
    padding-top: 10px;
  }
}
</style>
