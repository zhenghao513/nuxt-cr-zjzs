<template>
  <div class="nav-menu">
    <ClientOnly>
      <a-menu
        v-model:selectedKeys="current"
        mode="horizontal"
        :items="items"
      />
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
import { MenuProps } from 'ant-design-vue';

const current = ref<string[]>(['index']);
const items = ref<MenuProps['items']>([
  {
    key: 'index',
    label: '首页',
    title: '首页',
  },
  {
    key: 'announce',
    label: '考生须知',
    title: '考生须知',
  },
  {
    key: 'policy',
    label: '报考政策',
    title: '报考政策',
  },
  {
    key: 'plan',
    label: '招生计划查询',
    title: '招生计划查询',
  },
  {
    key: 'article',
    label: '分数线',
    title: '分数线',
  },
]);
</script>

<style scoped>
.ant-menu {
  line-height: 61px;
}
</style>
