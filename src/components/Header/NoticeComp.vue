<script setup lang="ts">
import { Icon } from "@vicons/utils";
import { AlertUrgent20Regular as NoticeIcon } from "@vicons/fluent";
import type { NoticeItem } from "@/api";
import { ref } from "vue";
import { getNoticeList } from "@/api";
const noticeList = ref<NoticeItem[]>([]);

getNoticeList({ pageIndex: 1, pageSize: 5 }).then((list) => {
  noticeList.value = list;
});
</script>
<template>
  <n-popover trigger="click" placement="bottom-end">
    <template #trigger>
      <n-button strong quaternary size="large">
        <template #icon>
          <Icon>
            <NoticeIcon />
          </Icon>
        </template>
      </n-button>
    </template>
    <n-list class="notice-list">
      <n-list-item v-for="item of noticeList" :key="item.id">
        <n-ellipsis> 【通知】 {{ item.title }} </n-ellipsis>
        <div font-secondary class="notice-time">{{ item.datetime }}</div>
      </n-list-item>
    </n-list>
    <n-space justify="center">
      <n-button quaternary type="primary"> 查看更多 </n-button>
    </n-space>
  </n-popover>
</template>

<style lang="scss" scoped>
.notice-list {
  width: 300px;

  :deep(.n-thing-header) {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  :deep(.n-list-item__main) {
    width: 100%;
  }

  .notice-time {
    text-indent: 1rem;
  }
}
</style>
