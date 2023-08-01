<template>
  <NuxtLayout name="table">
    <template #title>招生计划查询</template>
    <template #checkbox>
      <PlanCheckbox />
    </template>
    <template #search>
      <PlanSearchInput
        :loading="loading"
        @search-click="handleSearchClick"
      />
    </template>
    <template #table></template>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { loading, setLoading, toggle } = useLoading();
const search = ref('');

const handleSearchClick = (searchValue: string) => {
  search.value = searchValue;
  console.log(search.value);
};
</script>

<style scoped></style>
