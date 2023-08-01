<template>
  <NuxtLayout name="table">
    <template #title>招生计划查询</template>
    <template #checkbox>
      <PlanCheckbox
        @hierarchical-code-checked-list-change="onHierarchicalChange"
        @learning-formal-code-checked-list-change="onLearningFormalChange"
        @is-remedy-change="onisRemedyChange"
      />
    </template>
    <template #search>
      <PlanSearchInput
        :loading="loading"
        @search-click="handleSearchClick"
      />
    </template>
    <template #table>
      <PlanTable
        :data-source="tableDataSource"
        :pagination="pagination"
      />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { DataSourceType } from '~/components/PlanTable.vue';
import type { SpecialtyInfoParam, SpecialtyInfoResult } from '~/api/plan';
import type { TablePaginationConfig } from 'ant-design-vue';
import { querySpecialtyInfo } from '~/api/plan';

onMounted(async () => {
  await listSpecialtyInfo();
});

const { loading, setLoading } = useLoading();
const tableDataSource = ref<DataSourceType[]>([]);

const args: SpecialtyInfoParam = {
  ccdmList: ['1', '2', '3'],
  keywords: '',
  pageIndex: 1,
  pageSize: 10,
  xxxsdmList: ['1', '2', '4'],
  hasBbjhs: -1,
};

const pagination = ref<TablePaginationConfig>({
  current: args.pageIndex,
  pageSize: args.pageSize,
  showLessItems: true,
  showQuickJumper: true,
  showTotal(total) {
    return `共 ${total} 条`;
  },
  total: 0,
  async onChange(page, pageSize) {
    this.current = page;
    this.pageSize = pageSize;
    args.pageIndex = page;
    args.pageSize = pageSize;
    await listSpecialtyInfo();
  },
});

const listSpecialtyInfo = async () => {
  const { data } = await querySpecialtyInfo(args);
  tableDataSource.value = (data.value as SpecialtyInfoResult).obj.list;
  pagination.value.total = (data.value as SpecialtyInfoResult).obj.totalCount;
};

const onHierarchicalChange = (checkedList: string[]) => {
  args.ccdmList = checkedList;
};
const onLearningFormalChange = (checkedList: string[]) => {
  args.xxxsdmList = checkedList;
};
const onisRemedyChange = (isRemedy: number) => {
  args.hasBbjhs = isRemedy;
};
const handleSearchClick = async (searchValue: string) => {
  args.keywords = searchValue;
  args.pageIndex = 1;
  args.pageSize = 10;
  pagination.value.current = 1;
  pagination.value.pageSize = 10;
  setLoading(true);
  await listSpecialtyInfo();
  setLoading(false);
};
</script>

<style scoped></style>
