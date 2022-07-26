<script setup lang="ts">
import { ArrowBetweenDown20Regular as DownLoadIcon } from "@vicons/fluent";
import { getDownloadQrcode } from "@/api";
import type { DownloadQrcode } from "@/api";
import { ref } from "vue";

const downloadList = ref<DownloadQrcode[]>([]);

getDownloadQrcode().then((list) => {
  downloadList.value = list;
});
</script>

<template>
  <n-popover trigger="click" placement="bottom-end">
    <template #trigger>
      <n-button strong quaternary size="large">
        <template #icon>
          <n-icon>
            <DownLoadIcon />
          </n-icon>
        </template>
      </n-button>
    </template>
    <div class="download-wrap">
      <div class="download-title">扫描下载APP</div>
      <n-grid x-gap="12" :cols="3">
        <n-gi v-for="item of downloadList" :key="item.label">
          <div class="download-item">
            <n-image :src="item.url" />
            <span font-secondary class="download-label">{{ item.label }}</span>
          </div>
        </n-gi>
      </n-grid>
    </div>
  </n-popover>
</template>

<style lang="scss" scoped>
.download-wrap {
  .download-title {
    text-align: center;
    margin-bottom: 5px;
  }
  .download-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .download-label {
    margin-top: 5px;
  }
}
</style>
