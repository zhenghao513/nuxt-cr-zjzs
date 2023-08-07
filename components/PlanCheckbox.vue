<template>
  <div>
    <a-row>
      <a-col :span="8">
        <a-form-item label="报考层次">
          <a-checkbox
            v-model:checked="examLevelCodeState.checkAll"
            :indeterminate="examLevelCodeState.indeterminate"
            @change="onCheckAllExamLevelCodeChange"
          >
            全选
          </a-checkbox>
          <a-checkbox-group
            v-model:value="examLevelCodeState.checkedList"
            :options="examLevelCode"
            @change="handleExamLevelCodeChange"
          />
        </a-form-item>
      </a-col>

      <a-col :span="8">
        <a-form-item label="学习形式">
          <a-checkbox
            v-model:checked="studyModeCodeState.checkAll"
            :indeterminate="studyModeCodeState.indeterminate"
            @change="onCheckAllStudyModeCodeStateChange"
          >
            全选
          </a-checkbox>
          <a-checkbox-group
            v-model:value="studyModeCodeState.checkedList"
            :options="studyModeCode"
            @change="handleStudyModeCodeChange"
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
import type { CheckboxOptionType, CheckboxGroupProps, CheckboxProps } from 'ant-design-vue';

const emits = defineEmits<{
  examLevelCodeCheckedListChange: [checkedList: string[]];
  studyModeCodeCheckedListChange: [checkedList: string[]];
  isRemedyChange: [isRemedy: number];
}>();

onMounted(async () => {
  await queryCode();
});

interface OptionType {
  optionCode: string;
  optionName: string;
}
const examLevelCode = ref<CheckboxOptionType[]>([]);
const studyModeCode = ref<CheckboxOptionType[]>([]);

// 是否有补报计划
const isRemedy = ref(false);
const queryCode = async () => {
  const { data: examLevel } = await queryExamLevelCode();
  const { data: studyMode } = await queryStudyModeCode();
  const transition: (option: OptionType) => CheckboxOptionType = (option) => {
    return {
      value: option.optionCode,
      label: option.optionName,
    };
  };

  if (examLevel.value?.msg.businessCode === 0 && studyMode.value?.msg.businessCode === 0) {
    examLevelCode.value = examLevel.value.obj.list.map(transition);
    studyModeCode.value = studyMode.value.obj.list.map(transition);
  }
};

const examLevelCodeState = reactive({
  indeterminate: false,
  checkAll: true,
  checkedList: ['1', '2', '3'],
});
const studyModeCodeState = reactive({
  indeterminate: false,
  checkAll: true,
  checkedList: ['1', '2', '4'],
});

const onCheckAllExamLevelCodeChange = (e: any) => {
  Object.assign(examLevelCodeState, {
    checkedList: e.target.checked ? examLevelCode.value.map((option) => option.value) : [],
  });
  emits('examLevelCodeCheckedListChange', examLevelCodeState.checkedList);
};
const onCheckAllStudyModeCodeStateChange = (e: any) => {
  Object.assign(studyModeCodeState, {
    checkedList: e.target.checked ? studyModeCode.value.map((option) => option.value) : [],
  });
  emits('studyModeCodeCheckedListChange', studyModeCodeState.checkedList);
};

watch(
  () => examLevelCodeState.checkedList,
  (val) => {
    examLevelCodeState.indeterminate =
      Boolean(val.length) && val.length < examLevelCode.value.length;
    examLevelCodeState.checkAll = val.length === examLevelCode.value.length;
  },
);
watch(
  () => studyModeCodeState.checkedList,
  (val) => {
    studyModeCodeState.indeterminate =
      Boolean(val.length) && val.length < studyModeCode.value.length;
    studyModeCodeState.checkAll = val.length === studyModeCode.value.length;
  },
);

const handleExamLevelCodeChange: CheckboxGroupProps['onChange'] = () => {
  emits('examLevelCodeCheckedListChange', examLevelCodeState.checkedList);
};
const handleStudyModeCodeChange: CheckboxGroupProps['onChange'] = () => {
  emits('studyModeCodeCheckedListChange', studyModeCodeState.checkedList);
};
const handleIsRemedyChange: CheckboxProps['onChange'] = () => {
  emits('isRemedyChange', isRemedy.value ? 1 : -1);
};
</script>
