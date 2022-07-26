<script setup lang="ts">
import { toRefs } from "vue";
import type { PropType } from "vue";
import type { MarketItem } from "@/api";
const props = defineProps({
  row: Object as PropType<MarketItem>,
});

const { row } = toRefs(props);
</script>

<template>
  <n-thing>
    <template #avatar>
      <n-avatar size="small" round :src="row?.coinUrl"> </n-avatar>
    </template>
    <template #header> {{ row?.coin }} </template>
    <template #description> {{ row?.coinName }} </template>
  </n-thing>
</template>

<style lang="scss" scoped></style>
