<script setup lang="ts">
import { ref, toRefs, onMounted } from "vue";
import type { PropType } from "vue";
import { useTv } from "./tv";
import type { KlineSymbolInfo } from "./tv";

const tradingviewChart = ref<HTMLElement | null>(null);
const props = defineProps({
  symbolInfo: {
    type: Object as PropType<KlineSymbolInfo>,
    // required: true,
    default() {
      return {
        "price-precision": 4,
        symbol: "AAPL",
        "value-precision": 8,
      };
    },
  },
});

const { symbolInfo } = toRefs(props);

onMounted(() => {
  if (tradingviewChart.value) {
    useTv(symbolInfo, tradingviewChart.value);
  }
});
</script>

<template>
  <div class="chart" ref="tradingviewChart"></div>
</template>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: calc(100vh - 60px);
}
</style>
