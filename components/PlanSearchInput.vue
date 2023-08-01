<template>
  <div>
    <a-row>
      <a-col
        :xs="24"
        :sm="20"
        :md="16"
        :lg="12"
        :xl="8"
      >
        <a-input-search
          v-model:value="value"
          placeholder="请输入院校代码/院校名称/专业代码/专业名称"
          :loading="props.loading"
          enter-button="查询"
          allow-clear
          @search="onSearch"
        />
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  loading: boolean;
}>();
const emits = defineEmits<{
  searchClick: [searchValue: string];
}>();

const value = ref('');

const onSearch = (searchValue: string) => {
  emits('searchClick', searchValue);
};
</script>
