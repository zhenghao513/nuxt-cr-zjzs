<template>
  <div>
    <a-config-provider :locale="zhCN">
      <AppHeader />
      <AppMenu />
      <NuxtPage />
      <AppFooter />
      <AppModal />
    </a-config-provider>
    <a-back-top />
  </div>
</template>

<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN';
</script>

<style scoped></style>