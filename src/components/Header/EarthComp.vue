<script setup lang="ts">
import { Icon } from "@vicons/utils";
import { Earth20Regular as EarchIcon } from "@vicons/fluent";
import { ref } from "vue";
import type { LanguageItem, CurrencyItem } from "@/api";
import { getLanguages, getCurrencies } from "@/api";

const lang = ref("zh-cn");
const currency = ref("USD");

const languages = ref<LanguageItem[]>([]);
const currencies = ref<CurrencyItem[]>([]);

getLanguages().then((list) => {
  languages.value = list;
});

getCurrencies().then((list) => {
  currencies.value = list;
});

const getLangPrimary = (type: string): string => {
  return lang.value === type ? "primary" : "default";
};
const getCurrencyPrimary = (type: string): string => {
  return currency.value === type ? "primary" : "default";
};
</script>

<template>
  <n-popover trigger="click" placement="bottom-end">
    <template #trigger>
      <n-button strong quaternary size="large">
        <template #icon>
          <Icon>
            <EarchIcon />
          </Icon>
        </template>
      </n-button>
    </template>
    <div class="earth-wrap">
      <n-space justify="space-between">
        <div class="earth-item">语言</div>
        <div class="earth-item">折算货币</div>
      </n-space>
      <n-space
        justify="space-between"
        v-for="(item, index) of languages"
        :key="item.type"
      >
        <div class="earth-item">
          <n-button
            quaternary
            @click="lang = item.type"
            :type="getLangPrimary(item.type)"
            >{{ item.label }}</n-button
          >
        </div>
        <div class="earth-item">
          <n-button
            quaternary
            @click="currency = currencies[index].type"
            :type="getCurrencyPrimary(currencies[index].type)"
            >{{ currencies[index].label }}</n-button
          >
        </div>
      </n-space>
    </div>
  </n-popover>
</template>

<style lang="scss" scoped>
.earth-wrap {
  min-width: 250px;

  .earth-item {
    min-width: 100px;
  }
}
</style>
