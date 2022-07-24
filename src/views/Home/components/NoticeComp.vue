<script setup lang="ts">
import { Icon } from "@vicons/utils";
import { Alert16Filled as NoticeIcon } from "@vicons/fluent";
</script>

<template>
  <div class="home-notice">
    <div class="page-inner">
      <div class="notice-container">
        <Icon size="28" color="#999">
          <NoticeIcon />
        </Icon>
        <n-carousel autoplay :show-dots="false" draggable interval="6000">
          <n-button text>
            <n-ellipsis>
              【通知】Klickl将于2022年7月22日15:00（HKT）下架BPTC
            </n-ellipsis>
          </n-button>
          <n-button text>
            <n-ellipsis>
              【通知】Klickl将于2022年7月22日15:00（HKT）下架BPTC
            </n-ellipsis>
          </n-button>
          <n-button text>
            <n-ellipsis>
              【通知】Klickl将于2022年7月22日15:00（HKT）下架BPTC
            </n-ellipsis>
          </n-button>
          <n-button text>
            <n-ellipsis>
              【通知】Klickl将于2022年7月22日15:00（HKT）下架BPTC
            </n-ellipsis>
          </n-button>
        </n-carousel>
      </div>
      <n-button quaternary round type="primary">了解更多</n-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-notice {
  .page-inner {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .notice-container {
    flex: 1;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  :deep(.n-space) {
    .n-space > div:first-child {
      display: flex;
      align-items: center;
    }
  }
}
</style>
