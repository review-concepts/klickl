<script setup lang="ts">
import DownloadComp from "./DownloadComp.vue";
import NoticeComp from "./NoticeComp.vue";
import EarthComp from "./EarthComp.vue";
</script>

<template>
  <n-space inline>
    <n-button strong secondary round type="primary">登录</n-button>
    <n-button strong secondary round>注册</n-button>
    <div inline-block>
      <DownloadComp />
      <NoticeComp />
      <EarthComp />
    </div>
  </n-space>
</template>
