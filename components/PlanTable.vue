<template>
  <div>
    <a-table
      class="ant-table-striped"
      size="middle"
      :columns="columns"
      :data-source="dataSource"
      :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : '')"
      :pagination="pagination"
      @resizeColumn="handleResizeColumn"
    />
  </div>
</template>

<script setup lang="ts">
import type { TableProps, TablePaginationConfig } from 'ant-design-vue';

export interface DataSourceType {
  yxdm: string;
  yxmc: string;
  zydm: string;
  zymc: string;
  kl: string;
  cc: string;
  xxxs: string;
  xz: string;
  zsfw: string;
  jhs: string;
  bbjhs: string;
  bz: string;
  yxUrl: null;
}
const props = defineProps<{
  dataSource: DataSourceType[];
  pagination: TablePaginationConfig;
}>();

const columns = [
  { title: '院校代码', dataIndex: 'yxdm' },
  { title: '院校名称', dataIndex: 'yxmc' },
  { title: '专业代码', dataIndex: 'zydm' },
  { title: '专业名称', dataIndex: 'zymc' },
  { title: '科类', dataIndex: 'kl' },
  { title: '层次', dataIndex: 'cc' },
  { title: '学习形式', dataIndex: 'xxxs' },
  { title: '学制', dataIndex: 'xz' },
  { title: '招生范围', dataIndex: 'zsfw' },
  { title: '计划数', dataIndex: 'jhs' },
  { title: '征求计划数', dataIndex: 'bbjhs' },
];

const handleResizeColumn: TableProps['onResizeColumn'] = (w, col) => {
  col.width = w;
};
</script>

<style scoped>
[data-doc-theme='light'] .ant-table-striped :deep(.table-striped) td {
  background-color: #fafafa;
}

/* 深色模式 */
[data-doc-theme='dark'] .ant-table-striped :deep(.table-striped) td {
  background-color: rgb(29, 29, 29);
}

.ant-table-striped :deep(table) {
  table-layout: fixed !important;
}
</style>
