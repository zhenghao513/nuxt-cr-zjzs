<template>
  <div class="container">
    <a-col :span="24">
      <div class="page-container">
        <div class="plan-title">
          <slot name="title" />
        </div>
        <div class="plan-content">
          <div class="plan-checkbox">
            <slot name="checkbox" />
          </div>
          <div class="plan-search">
            <slot name="search" />
          </div>
          <div class="plan-table">
            <slot name="table" />
          </div>
          <slot name="content" />
        </div>
      </div>
    </a-col>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  width: 80vw;
  margin: 20px auto 0;
}

@media screen and (max-width: 600px) {
  .container {
    width: 100vw;
  }
}

.ant-col {
  padding: 0 10px;
}

.page-container {
  background-color: white;
}

.plan-title {
  height: 60px;
  padding-left: 25px;
  line-height: 60px;
  font-size: 15px;
  background: #f0f5ff;
  font-weight: bold;
}

.plan-content {
  padding: 25px;
}

.plan-search {
  margin: 15px 0 20px;
}

.plan-table {
  margin-top: 10px;
}
</style>
