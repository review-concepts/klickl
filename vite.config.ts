import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import { viteMockServe } from "vite-plugin-mock";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: [
        "vue",
        {
          "naive-ui": [
            "useDialog",
            "useMessage",
            "useNotification",
            "useLoadingBar",
          ],
        },
      ],
    }),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
    viteMockServe({
      mockPath: "src/mock",
      localEnabled: true,
      prodEnabled: true,
      injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
    }),
    viteCompression(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
