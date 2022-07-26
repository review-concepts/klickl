<template>
  <div class="page-view">
    <div class="chart" ref="tradingviewChart"></div>
  </div>
</template>

<script setup lang="ts">
import { canUseDOM } from "@/utils";
import type { AccessList } from "public/charting_library/charting_library";
import { ref, onMounted } from "vue";
const tradingviewChart = ref<HTMLElement | null>(null);

onMounted(() => {});
</script>

<style scoped></style>
