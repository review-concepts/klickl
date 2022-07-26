<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderComp from "@/components/Header/HeaderComp.vue";
import WOW from "wow.js";
import { onMounted } from "vue";

onMounted(() => {
  window.onload = () => {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
      // callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
      // },
      scrollContainer: null, // optional scroll container selector, otherwise use window,
      resetAnimation: true, // reset animation on end (default is true)
    });
    wow.init();
  };
});
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
