<template>
  <div></div>
</template>

<script setup lang="ts">
import type { ECOption } from '~/utils/echarts';

const attrs = useAttrs();
const props = defineProps<{ left?: boolean }>();

onMounted(async () => {
  await drawChart();
});

const getTotalCount = async (code: string[]) => {
  const { data } = await querySpecialtyInfo({
    ccdmList: props.left ? code : [],
    keywords: '',
    pageIndex: 1,
    pageSize: 10001,
    xxxsdmList: props.left ? [] : code,
    hasBbjhs: -1,
  });
  useErrorhandler(() => {
    if (data.value?.msg.businessCode === 0) {
      return data.value.obj.totalCount;
    }
  });
  return 0;
};

const drawChart = async () => {
  const element = document.getElementById(attrs.id as string) as HTMLElement;
  const myChart = echarts.init(element);
  const option: ECOption = {
    title: {
      text: props.left ? '报考层次' : '学习形式',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: props.left ? '报考层次' : '学习形式',
        type: 'pie',
        radius: '50%',
        data: [
          { value: await getTotalCount(['1']), name: props.left ? '专升本' : '脱产' },
          { value: await getTotalCount(['2']), name: props.left ? '高起本' : '业余' },
          {
            value: await getTotalCount(props.left ? ['3'] : ['4']),
            name: props.left ? '专科层次' : '函授',
          },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  myChart.setOption(option);
  window.addEventListener('resize', () => {
    myChart.resize();
  });
};
</script>

<style scoped>
#left,
#right {
  width: 100%;
  height: 400px;
}
</style>
