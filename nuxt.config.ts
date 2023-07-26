import { VueDisableInputsBeforeMount } from "vite-vue-plugin-disable-inputs";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      shopware: {
        shopwareEndpoint: "https://demo-frontends.shopware.store",
        shopwareAccessToken: "SWSCBHFSNTVMAWNZDNFKSHLAYW",
      },
    },
  },
  modules: [
        "@vueuse/nuxt",
        "@shopware-pwa/nuxt3-module",
        "@shopware-pwa/cms-base",
        "@nuxtjs/tailwindcss",
    ],
  /**
   * Commented because of the StackBlitz error
   * Issue: https://github.com/shopware/frontends/issues/88
   */
  typescript: {
    // typeCheck: true,
    strict: true,
  },

  components: {
    dirs: ["~/components", "composables"],
    global: true,
  },

  vite: {
    plugins: [VueDisableInputsBeforeMount()],
  },
    css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
