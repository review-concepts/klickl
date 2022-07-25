<script setup lang="ts">
import type { BannerList } from "@/api";
import { ref } from "vue";
import { getBanners } from "@/api";

const banners = ref<BannerList>([]);

getBanners().then((list) => {
  banners.value = list;
});
</script>

<template>
  <n-carousel autoplay draggable>
    <img
      class="carousel-img"
      v-for="(url, index) of banners"
      :key="index"
      :src="url"
    />
  </n-carousel>
</template>

<style lang="scss" scoped>
.carousel-img {
  width: 100%;
  height: 425px;
  object-fit: cover;
}
</style>
