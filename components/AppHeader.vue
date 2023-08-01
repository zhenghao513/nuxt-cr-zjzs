<template>
  <div class="nav-header">
    <div class="nav-header-container">
      <div class="nav-header-logo">
        <img
          src="/logo.png"
          alt="logo"
          style="height: 60px"
        />
        <div class="divider"></div>
        <img
          src="~/assets/img/qr_code.jpg"
          alt="QR code"
          style="height: 60px"
        />
        <div class="nav-header-info">
          <span>关注公众号</span>
          <br />
          <span>查询招生信息</span>
          <br />
          <span>接收报名进度消息</span>
        </div>
      </div>
      <div class="nav-header-button">
        <a-button ghost>登陆报名</a-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.nav-header {
  height: 116px;
  background-color: #37f;
}

.nav-header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  margin: 0 auto;
  padding: 23px 10px;
}

.nav-header-logo {
  /* flex: 1; */
  display: flex;
}

.divider {
  margin: 0 30px;
  height: 60px;
  width: 1px;
  background: hsla(0, 0%, 100%, 0.5);
}

.nav-header-info {
  color: #fff;
  font-size: 14px;
  margin-left: 12px;
  line-height: 20px;
}

.nav-header-button {
  margin-left: auto;
}

@media screen and (max-width: 600px) {
  .divider,
  .divider + img,
  .nav-header-info,
  .nav-header-button {
    display: none;
  }
}
</style>
