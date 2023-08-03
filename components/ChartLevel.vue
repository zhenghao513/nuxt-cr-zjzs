<template>
  <div id="chart-level"></div>
</template>

<script setup lang="ts">
import type { ECOption } from 'utils/echarts';
import { querySpecialtyInfo } from '~/api/plan';
import type { SpecialtyInfoRes } from '~/api/plan';

const getTotal = async (ccdmList: string[]) => {
  const res = await querySpecialtyInfo({
    ccdmList,
    keywords: '',
    pageIndex: 1,
    pageSize: 10001,
    xxxsdmList: [],
    hasBbjhs: -1,
  });

  return (res.data.value as SpecialtyInfoRes).obj.totalCount;
};

const draw = async () => {
  const myChart = echarts.init(document.getElementById('chart-level') as HTMLElement);
  const option: ECOption = {
    title: {
      text: '报考层次',
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
        name: '报考层次',
        type: 'pie',
        radius: '50%',
        data: [
          { value: await getTotal(['1']), name: '专升本' },
          { value: await getTotal(['2']), name: '高起本' },
          { value: await getTotal(['3']), name: '专科层次' },
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
#chart-level {
  width: 100%;
  height: 400px;
}
</style>
