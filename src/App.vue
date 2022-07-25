<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderComp from "@/components/Header/HeaderComp.vue";
</script>

<template>
  <n-config-provider :theme-overrides="{ common: { fontWeightStrong: '600' } }">
    <n-message-provider>
      <HeaderComp />
      <RouterView />
    </n-message-provider>
  </n-config-provider>
</template>

<style lang="scss">
@import "vfonts/Lato.css";
@import "@/assets/styles/base.scss";
</style>
