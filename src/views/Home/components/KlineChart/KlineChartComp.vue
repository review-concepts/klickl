<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import type { PropType } from "vue";
import { echarts } from "@/plugins/echarts";
import getKLineOption from "./getKLineOption";

const props = defineProps({
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "50px",
  },
  data: {
    type: Array as PropType<number[]>,
    default: () => [],
  },
});

const kline = ref<HTMLElement | null>(null);
let chart: echarts.ECharts;

onMounted(() => {
  if (kline.value) {
    chart = echarts.init(kline.value);
    setOption(props.data);
  }
});

watch(
  () => props.data,
  () => {
    setOption(props.data);
  }
);

const setOption = (data: number[]) => {
  const option = getKLineOption(data);
  chart.setOption(option);
};
</script>

<template>
  <div
    class="kline"
    :style="{ width: props.width, height: props.height }"
    ref="kline"
  ></div>
</template>

<style lang="scss" scoped></style>
