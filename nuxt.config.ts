// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@ant-design-vue/nuxt', '@vueuse/nuxt'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-CN',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, minimum-scale=1.0, viewport-fit=cover',
      title: '浙江省成人高考报名',
    },
    baseURL: '/nuxt-cr-zjzs/',
  },
  css: ['~/assets/css/main.css'],
  ssr: false,
  imports: {
    dirs: ['api'],
  },
  vite: {
    server: {
      proxy: {
        '/server': {
          target: 'https://cr.zjzs.net',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/server/, ''),
        },
      },
    },
  },
});
