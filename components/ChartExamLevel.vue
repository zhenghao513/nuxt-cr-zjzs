<template>
  <div id="chart-level"></div>
</template>

<script setup lang="ts">
import type { ECOption } from 'utils/echarts';

const getTotalCount = async (examLevelCode: string[]) => {
  const { data } = await querySpecialtyInfo({
    ccdmList: examLevelCode,
    keywords: '',
    pageIndex: 1,
    pageSize: 10001,
    xxxsdmList: [],
    hasBbjhs: -1,
  });
  if (data.value?.msg.businessCode === 0) {
    return data.value.obj.totalCount;
  } else {
    return 0;
  }
};

const drawChart = async () => {
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
          { value: await getTotalCount(['1']), name: '专升本' },
          { value: await getTotalCount(['2']), name: '高起本' },
          { value: await getTotalCount(['3']), name: '专科层次' },
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
#chart-level {
  width: 100%;
  height: 400px;
}
</style>
