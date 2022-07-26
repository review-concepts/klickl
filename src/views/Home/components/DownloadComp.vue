<script setup lang="ts">
import {
  LogoApple as IphoneIcon,
  LogoGooglePlaystore as GooglePlayIcon,
  CloudDownload as BetaIcon,
} from "@vicons/ionicons5";

const handleDownload = () => {
  window.open("/logo.png");
};
</script>

<template>
  <div class="download">
    <div class="page-inner download-wrap">
      <div class="left">
        <div class="wow fadeInLeft top" data-wow-delay=".5s">
          <n-h1 class="download-title">随时随地交易加密货币</n-h1>
          <n-p class="download-description">
            <n-text type="tertiary">
              随时随地购买、出售和交易加密货币，
              轻松访问您的资产、进行交易并建立您的财务未来
            </n-text>
          </n-p>
          <n-p class="download-about">
            <n-gradient-text type="primary">
              详细了解我们的 Klickl 应用程序
            </n-gradient-text>
          </n-p>
        </div>
        <div class="bottom">
          <n-space vertical size="large">
            <n-button
              class="wow fadeInDown download-item imgAnimateRight"
              data-wow-delay="100ms"
              type="primary"
              @click="handleDownload"
            >
              <template #icon>
                <n-icon>
                  <IphoneIcon />
                </n-icon>
              </template>
              App Store</n-button
            >
            <n-button
              class="wow fadeInDown download-item imgAnimateRight"
              data-wow-delay="300ms"
              type="primary"
              @click="handleDownload"
            >
              <template #icon>
                <n-icon>
                  <GooglePlayIcon />
                </n-icon>
              </template>
              Google Play</n-button
            >
            <n-button
              class="wow fadeInDown download-item imgAnimateRight"
              data-wow-delay="500ms"
              type="primary"
              @click="handleDownload"
            >
              <template #icon>
                <n-icon>
                  <BetaIcon />
                </n-icon>
              </template>
              BETA</n-button
            >
          </n-space>
        </div>
      </div>
      <div class="right imgAnimateScale">
        <n-image
          class="wow fadeInLeft"
          src="/images/klickl/download-display.png"
        />
        <n-image
          src="/images/klickl/download-display2.png"
          class="wow fadeInRight display-right"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.download {
  padding: 30px 0;
  background-color: rgb(248, 248, 248);
  .download-wrap {
    display: flex;
  }

  .left,
  .right {
    flex: 1;
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .right {
    padding-top: 135px;
    display: flex;
    margin-left: 15px;
  }
  .display-right {
    left: -100px;
    position: relative;
    top: -137px;
  }

  .download-title {
    font-size: 50px;
  }

  .download-description {
    font-size: 18px;
  }

  .download-about {
    font-size: 16px;
  }

  .download-item {
    width: 200px;
    height: 53px;
  }
}
</style>
