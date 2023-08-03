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
    },
    tooltip: {},
    xAxis: {
      data: ['脱产', '业余', '函授'],
    },
    yAxis: {
      type: 'value',
      name: '招生名额',
    },
    series: [
      {
        name: '招生名额',
        type: 'bar',
        data: [await getTotal(['1']), await getTotal(['2']), await getTotal(['4'])],
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
