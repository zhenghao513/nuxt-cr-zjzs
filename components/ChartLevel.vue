<template>
  <div id="chart-level"></div>
</template>

<script setup lang="ts">
import type { ECOption } from 'utils/echarts';
import { querySpecialtyInfo } from '~/api/plan';
import type { SpecialtyInfoResult } from '~/api/plan';

const getTotal = async (ccdmList: string[]) => {
  const res = await querySpecialtyInfo({
    ccdmList,
    keywords: '',
    pageIndex: 1,
    pageSize: 10001,
    xxxsdmList: [],
    hasBbjhs: -1,
  });

  return (res.data.value as SpecialtyInfoResult).obj.totalCount;
};

const draw = async () => {
  const myChart = echarts.init(document.getElementById('chart-level') as HTMLElement);
  const option: ECOption = {
    title: {
      text: '报考层次',
    },
    tooltip: {},
    xAxis: {
      data: ['专升本', '高起本', '专科层次'],
    },
    yAxis: {
      type: 'value',
      name: '招生名额',
    },
    series: [
      {
        name: '招生名额',
        type: 'bar',
        data: [await getTotal(['1']), await getTotal(['2']), await getTotal(['3'])],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener('resize', function () {
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
