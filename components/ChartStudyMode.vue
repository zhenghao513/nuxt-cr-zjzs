<template>
  <div id="chart-mode"></div>
</template>

<script setup lang="ts">
import type { ECOption } from 'utils/echarts';

const getTotalCount = async (stydyModeCode: string[]) => {
  const { data } = await querySpecialtyInfo({
    ccdmList: [],
    keywords: '',
    pageIndex: 1,
    pageSize: 10001,
    xxxsdmList: stydyModeCode,
    hasBbjhs: -1,
  });
  if (data.value?.msg.businessCode === 0) {
    return data.value.obj.totalCount;
  } else {
    return 0;
  }
};

const drawChart = async () => {
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
          { value: await getTotalCount(['1']), name: '脱产' },
          { value: await getTotalCount(['2']), name: '业余' },
          { value: await getTotalCount(['4']), name: '函授' },
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
  await drawChart();
});
</script>

<style scoped>
#chart-mode {
  width: 100%;
  height: 400px;
}
</style>
