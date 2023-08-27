<template>
  <NuxtLayout name="table">
    <template #title>招生计划查询</template>
    <template #checkbox>
      <PlanCheckbox
        @exam-level-code-checked-list-change="onExamLevelChange"
        @study-mode-code-checked-list-change="onStudyModeChange"
        @is-remedy-change="onIsRemedyChange"
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
import type { SpecialtyInfoModel } from '~/api/plan';
import type { TablePaginationConfig } from 'ant-design-vue';

onMounted(async () => {
  await listSpecialtyInfo();
});

const { loading, setLoading } = useLoading();
const tableDataSource = ref<DataSourceType[]>([]);

const args: SpecialtyInfoModel = {
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
  useErrorhandler(() => {
    if (data.value?.msg.businessCode === 0) {
      tableDataSource.value = data.value.obj.list;
      pagination.value.total = data.value.obj.totalCount;
    }
  });
};

const onExamLevelChange = (checkedList: string[]) => {
  args.ccdmList = checkedList;
};
const onStudyModeChange = (checkedList: string[]) => {
  args.xxxsdmList = checkedList;
};
const onIsRemedyChange = (isRemedy: number) => {
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
