// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@ant-design-vue/nuxt'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-CN',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, minimum-scale=1.0, viewport-fit=cover',
      title: '浙江省成人高考报名',
    },
  },
  css: ['~/assets/css/main.css'],
  ssr: false,
});
