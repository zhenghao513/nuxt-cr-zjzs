<template>
  <NuxtLayout>
    <template #title>{{ title }}</template>
    <template #content>
      <div v-html="content"></div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { queryAnnounce } from '~/api/announce';
import type { AnnounceResult } from '~/api/announce';

const title = ref('');
const content = ref('');
onMounted(async () => {
  const { data } = await queryAnnounce(8);
  title.value = (data.value as AnnounceResult).obj.title;
  content.value = (data.value as AnnounceResult).obj.content;
});
</script>

<style scoped></style>
