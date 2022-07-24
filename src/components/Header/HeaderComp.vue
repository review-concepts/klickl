<template>
  <n-page-header class="page-header">
    <template #title>
      <RouterLink class="logo-link" to="/">
        <img width="25" class="logo-img" src="@/assets/logo.svg" />
        <strong class="logo-label">Klickl</strong>
      </RouterLink>
      <n-menu class="header-menu" mode="horizontal" :options="menuOptions" />
    </template>
    <template #extra>
      <ExtraOptions />
    </template>
  </n-page-header>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
import menuOptions from "./menuOptions";
import ExtraOptions from "./ExtraOptions.vue";
</script>

<style lang="scss" scoped>
.page-header {
  .logo-link {
    display: inline-flex;
    height: 60px;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }
  padding: 0 25px;
  height: 60px;
  :deep(.n-page-header__title) {
    display: flex;
    align-items: center;
    height: 60px;
  }
  :deep(.n-page-header__extra) {
    display: flex;
    align-items: center;
    height: 60px;
  }
  border-bottom: 1px solid rgb(239, 239, 245);
  .header-menu {
    margin-left: 25px;
  }
}
</style>
