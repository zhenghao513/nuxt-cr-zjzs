<template>
  <div class="container">
    <a-row>
      <a-col :span="24">
        <div class="page-container">
          <div class="page-title">
            <slot name="title" />
          </div>
          <div class="page-content">
            <slot name="content" />
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  width: 80vw;
  margin: 20px auto 0;
}

.ant-col {
  padding: 0 10px;
}

.page-container {
  background-color: white;
}

.page-title {
  font-size: 20px;
  text-align: center;
  min-height: 60px;
  line-height: 60px;
  padding: 0 25px;
  border-bottom: 1px solid #dcdfe6;
  font-weight: bold;
}

.page-content {
  line-height: 1.5;
  padding: 25px;
}
</style>
