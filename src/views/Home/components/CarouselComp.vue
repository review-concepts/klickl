<script setup lang="ts"></script>

<template>
  <n-carousel autoplay draggable>
    <img class="carousel-img" src="/images/klickl/01-carousel.png" />
    <img class="carousel-img" src="/images/klickl/02-carousel.png" />
    <img class="carousel-img" src="/images/klickl/03-carousel.png" />
    <img class="carousel-img" src="/images/klickl/04-carousel.png" />
    <img class="carousel-img" src="/images/klickl/05-carousel.png" />
  </n-carousel>
</template>

<style lang="scss" scoped>
.carousel-img {
  width: 100%;
  height: 425px;
  object-fit: cover;
}
</style>
