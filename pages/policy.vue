<template>
  <NuxtLayout>
    <template #title>{{ title }}</template>
    <template #content>
      <div v-html="content"></div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { title, content } = useNotice(1);
</script>

<style scoped></style>
