<template>
  <NuxtLayout>
    <template #title>{{ title }}</template>
    <template #content>
      <div v-html="content"></div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { title, content } = useAnnounce(2);
</script>

<style scoped></style>
