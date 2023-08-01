<template>
  <div>
    <a-modal
      v-model:open="open"
      title="提示"
      @ok="handleOk"
    >
      <p>为获得最佳的浏览体验，请使用电脑访问！</p>
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const open = ref<boolean>(false);

const handleOk = (e: MouseEvent) => {
  console.log(e);
  open.value = false;
};

onMounted(() => {
  const ua = navigator.userAgent;
  if (ua.indexOf('Mobile') >= 0) {
    open.value = true;
  }
});
</script>
