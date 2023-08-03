<template>
  <NuxtLayout>
    <template #title>招生计划数据一览表</template>
    <template #content>
      <div class="container">
        <div class="chart-level-and-mode">
          <ChartExamLevel />
          <ChartStudyMode />
        </div>
        <div>
          <ChartCityCounter />
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
echarts;
</script>

<style scoped>
.container {
  min-height: calc(100vh - 80px);
}

.chart-level-and-mode {
  display: flex;
}

@media screen and (max-width: 600px) {
  .chart-level-and-mode {
    flex-wrap: wrap;
  }
}
</style>
