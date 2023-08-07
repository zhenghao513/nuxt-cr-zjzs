<template>
  <div id="chart-city-counter"></div>
</template>

<script setup lang="ts">
import type { ECOption } from '~/utils/echarts';

const listSpecialtyInfos = async () => {
  const { data } = await querySpecialtyInfo({
    ccdmList: [],
    keywords: '',
    pageIndex: 1,
    pageSize: 10001,
    xxxsdmList: [],
    hasBbjhs: 0,
  });
  if (data.value?.msg.businessCode === 0) {
    return data.value.obj.list;
  } else {
    return [];
  }
};

const draw = async () => {
  const myChart = echarts.init(document.getElementById('chart-city-counter') as HTMLElement);
  const list = await listSpecialtyInfos();
  const counter = useCityCounter(list);

  const option: ECOption = {
    title: {
      text: '各市招生名额',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    xAxis: {
      type: 'category',
      data: [
        '杭州市',
        '宁波市',
        '温州市',
        '嘉兴市',
        '湖州市',
        '绍兴市',
        '金华市',
        '衢州市',
        '舟山市',
        '台州市',
        '丽水市',
      ],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [
          counter['杭州市'],
          counter['宁波市'],
          counter['温州市'],
          counter['嘉兴市'],
          counter['湖州市'],
          counter['绍兴市'],
          counter['金华市'],
          counter['衢州市'],
          counter['舟山市'],
          counter['台州市'],
          counter['丽水市'],
        ],
        type: 'bar',
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener('resize', () => {
    myChart.resize();
  });
};

onMounted(async () => {
  // TODO: 要在饼图数据获取完成后加载
  setTimeout(() => {
    draw();
  }, 200);
});
</script>

<style scoped>
#chart-city-counter {
  width: 100%;
  height: 400px;
}
</style>
