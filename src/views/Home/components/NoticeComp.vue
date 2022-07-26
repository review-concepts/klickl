<script setup lang="ts">
import { Alert16Filled as NoticeIcon } from "@vicons/fluent";
import { getNoticeList } from "@/api";
import type { NoticeItem } from "@/api";
import { ref } from "vue";
const noticeList = ref<NoticeItem[]>([]);

getNoticeList({ pageIndex: 1, pageSize: 10 }).then((list) => {
  noticeList.value = list;
});
</script>

<template>
  <div class="home-notice">
    <div class="page-inner">
      <div class="notice-container">
        <n-icon size="28" color="#999">
          <NoticeIcon />
        </n-icon>
        <n-carousel autoplay :show-dots="false" draggable :interval="6000">
          <n-button text v-for="item of noticeList" :key="item.id">
            <n-ellipsis> 【通知】{{ item.title }} </n-ellipsis>
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
