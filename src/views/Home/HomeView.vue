<script setup lang="ts">
import CarouselComp from "./components/CarouselComp.vue";
import NoticeComp from "./components/NoticeComp.vue";
import HotMarketsComp from "./components/HotMarketsComp.vue";
import TradingVolume from "./components/TradingVolume.vue";
import MarketsComp from "./components/Markets/MarketsComp.vue";
import DownloadComp from "./components/DownloadComp.vue";
</script>

<template>
  <main class="page-views">
    <CarouselComp />
    <NoticeComp />
    <HotMarketsComp />
    <TradingVolume />
    <MarketsComp />
    <DownloadComp />
  </main>
</template>
