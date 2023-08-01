<template>
  <div>
    <a-row>
      <a-col :span="8">
        <a-form-item label="报考层次">
          <a-checkbox
            v-model:checked="hierarchicalCodeState.checkAll"
            :indeterminate="hierarchicalCodeState.indeterminate"
            @change="onCheckAllHierarchicalCodeChange"
          >
            全选
          </a-checkbox>
          <a-checkbox-group
            v-model:value="hierarchicalCodeState.checkedList"
            :options="hierarchicalCode"
            @change="handleHierarchicalCodeChange"
          />
        </a-form-item>
      </a-col>

      <a-col :span="8">
        <a-form-item label="学习形式">
          <a-checkbox
            v-model:checked="learningFormalCodeState.checkAll"
            :indeterminate="learningFormalCodeState.indeterminate"
            @change="onCheckAllLearningFormalCodeStateChange"
          >
            全选
          </a-checkbox>
          <a-checkbox-group
            v-model:value="learningFormalCodeState.checkedList"
            :options="learningFormalCode"
            @change="handleLearningFormalCodeChange"
          />
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item label="是否有补报计划">
          <a-checkbox
            v-model:checked="isRemedy"
            @change="handleIsRemedyChange"
          >
            是
          </a-checkbox>
        </a-form-item>
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
import { queryHierarchicalCode, queryLearningFormalCode } from '~/api/plan';
import type { CodeResult } from '~/api/plan';
import type { CheckboxOptionType, CheckboxGroupProps, CheckboxProps } from 'ant-design-vue';

const emits = defineEmits<{
  hierarchicalCodeCheckedListChange: [checkedList: string[]];
  learningFormalCodeCheckedListChange: [checkedList: string[]];
  isRemedyChange: [isRemedy: number];
}>();

onMounted(async () => {
  await queryCode();
});

interface OptionType {
  optionCode: string;
  optionName: string;
}
const hierarchicalCode = ref<CheckboxOptionType[]>([]);
const learningFormalCode = ref<CheckboxOptionType[]>([]);

// 是否有补报计划
const isRemedy = ref(false);
const queryCode = async () => {
  const { data: hCode } = await queryHierarchicalCode();
  const { data: lCode } = await queryLearningFormalCode();
  const transition: (option: OptionType) => CheckboxOptionType = function (
    option: OptionType,
  ): CheckboxOptionType {
    return {
      value: option.optionCode,
      label: option.optionName,
    };
  };
  hierarchicalCode.value = (hCode.value as CodeResult).obj.list.map(transition);
  learningFormalCode.value = (lCode.value as CodeResult).obj.list.map(transition);
};

const hierarchicalCodeState = reactive({
  indeterminate: false,
  checkAll: true,
  checkedList: ['1', '2', '3'],
});
const learningFormalCodeState = reactive({
  indeterminate: false,
  checkAll: true,
  checkedList: ['1', '2', '4'],
});

const onCheckAllHierarchicalCodeChange = (e: any) => {
  Object.assign(hierarchicalCodeState, {
    checkedList: e.target.checked ? hierarchicalCode.value.map((option) => option.value) : [],
  });
  emits('hierarchicalCodeCheckedListChange', hierarchicalCodeState.checkedList);
};
const onCheckAllLearningFormalCodeStateChange = (e: any) => {
  Object.assign(learningFormalCodeState, {
    checkedList: e.target.checked ? learningFormalCode.value.map((option) => option.value) : [],
  });
  emits('learningFormalCodeCheckedListChange', learningFormalCodeState.checkedList);
};

watch(
  () => hierarchicalCodeState.checkedList,
  (val) => {
    hierarchicalCodeState.indeterminate =
      Boolean(val.length) && val.length < hierarchicalCode.value.length;
    hierarchicalCodeState.checkAll = val.length === hierarchicalCode.value.length;
  },
);
watch(
  () => learningFormalCodeState.checkedList,
  (val) => {
    learningFormalCodeState.indeterminate =
      Boolean(val.length) && val.length < learningFormalCode.value.length;
    learningFormalCodeState.checkAll = val.length === learningFormalCode.value.length;
  },
);

const handleHierarchicalCodeChange: CheckboxGroupProps['onChange'] = (code) => {
  emits('hierarchicalCodeCheckedListChange', hierarchicalCodeState.checkedList);
};
const handleLearningFormalCodeChange: CheckboxGroupProps['onChange'] = (code) => {
  emits('learningFormalCodeCheckedListChange', learningFormalCodeState.checkedList);
};
const handleIsRemedyChange: CheckboxProps['onChange'] = () => {
  emits('isRemedyChange', isRemedy.value ? 1 : -1);
};
</script>
