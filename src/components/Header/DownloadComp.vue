<script setup lang="ts">
import { Icon } from "@vicons/utils";
import { ArrowBetweenDown20Regular as DownLoadIcon } from "@vicons/fluent";
</script>

<template>
  <n-popover trigger="click" placement="bottom-end">
    <template #trigger>
      <n-button strong quaternary size="large">
        <template #icon>
          <Icon>
            <DownLoadIcon />
          </Icon>
        </template>
      </n-button>
    </template>
    <div class="download-wrap">
      <div class="download-title">扫描下载APP</div>
      <n-grid x-gap="12" :cols="3">
        <n-gi>
          <div class="download-item">
            <n-image src="/images/klickl/qrcode.png" />
            <span font-secondary class="download-label">iOS</span>
          </div>
        </n-gi>
        <n-gi>
          <div class="download-item">
            <n-image src="/images/klickl/qrcode.png" />
            <span font-secondary class="download-label">Android Beta</span>
          </div>
        </n-gi>
        <n-gi>
          <div class="download-item">
            <n-image src="/images/klickl/qrcode.png" />
            <span font-secondary class="download-label">Google Play</span>
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
