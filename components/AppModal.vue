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
const open = ref<boolean>(false);

const handleOk = () => {
  open.value = false;
};

onMounted(() => {
  const userAgent = navigator.userAgent;
  if (userAgent.includes('Mobile')) {
    open.value = true;
  }
});
</script>
