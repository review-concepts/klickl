<script setup lang="ts">
import { Icon } from "@vicons/utils";
import { AlertUrgent20Regular as NoticeIcon } from "@vicons/fluent";
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
      <n-list-item>
        <n-ellipsis>
          【通知】Klickl将于2022年7月22日15:00（HKT）下架BPTC
        </n-ellipsis>
        <div font-secondary class="notice-time">2022-07-19 16:46:33</div>
      </n-list-item>
      <n-list-item>
        <n-ellipsis>
          【通知】Klickl将于2022年7月22日15:00（HKT）下架BPTC
        </n-ellipsis>
        <div font-secondary class="notice-time">2022-07-19 16:46:33</div>
      </n-list-item>
      <n-list-item>
        <n-ellipsis>
          【通知】Klickl将于2022年7月22日15:00（HKT）下架BPTC
        </n-ellipsis>
        <div font-secondary class="notice-time">2022-07-19 16:46:33</div>
      </n-list-item>
    </n-list>
    <n-space justify="center">
      <n-button quaternary type="primary"> 查看更多 </n-button>
    </n-space>
  </n-popover>
</template>

<style lang="scss" scoped>
.notice-list {
  width: 350px;

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
