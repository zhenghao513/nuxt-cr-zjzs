<template>
  <div id="chart-mode"></div>
</template>

<script setup lang="ts">
import type { ECOption } from 'utils/echarts';
import { querySpecialtyInfo } from '~/api/plan';
import type { SpecialtyInfoResult } from '~/api/plan';

const getTotal = async (xxxsdmList: string[]) => {
  const res = await querySpecialtyInfo({
    ccdmList: [],
    keywords: '',
    pageIndex: 1,
    pageSize: 10001,
    xxxsdmList,
    hasBbjhs: -1,
  });

  return (res.data.value as SpecialtyInfoResult).obj.totalCount;
};

const draw = async () => {
  const myChart = echarts.init(document.getElementById('chart-mode') as HTMLElement);
  const option: ECOption = {
    title: {
      text: '学习形式',
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
        name: '学习形式',
        type: 'pie',
        radius: '50%',
        data: [
          { value: await getTotal(['1']), name: '脱产' },
          { value: await getTotal(['2']), name: '业余' },
          { value: await getTotal(['4']), name: '函授' },
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

onMounted(async () => {
  await draw();
});
</script>

<style scoped>
#chart-mode {
  width: 100%;
  height: 400px;
}
</style>
