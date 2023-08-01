<template>
  <div>
    <a-config-provider :locale="zhCN">
      <AppHeader />
      <AppMenu />
      <NuxtPage />
    </a-config-provider>
  </div>
</template>

<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN';
</script>

<style scoped></style>