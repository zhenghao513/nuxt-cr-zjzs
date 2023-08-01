<template>
  <div class="nav-menu">
    <ClientOnly>
      <a-menu
        v-model:selectedKeys="current"
        mode="horizontal"
        :items="items"
        @select="handleSelect"
      />
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
import { MenuProps } from 'ant-design-vue';
import { useRouter } from 'vue-router';

const store = useLocalStorage('active', {
  active: 'index',
});
const current = ref<string[]>([store.value.active]);

const route = useRoute();
onMounted(() => {
  // 通过 URL 切换所选菜单项
  current.value = route.path === '/' ? ['index'] : [route.path.slice(1)];
});

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
const router = useRouter();
const handleSelect: MenuProps['onSelect'] = ({ key }) => {
  store.value.active = key as string;
  router.push(key === 'index' ? '/' : `/${key}`);
};
</script>

<style scoped>
.nav-menu {
  background-color: white;
}

.ant-menu {
  line-height: 61px;
  width: 80vw;
  margin: 0 auto;
  padding: 0 10px;
  border: none;
}
</style>
