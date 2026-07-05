<template>
  <div class="app">

    <main class="content">
      <router-view />
    </main>

    <footer class="tabbar">
      <button @click="go('/app/index')">首页</button>
      <button @click="go('/app/order')">订单</button>
      <button @click="go('/app/message')">消息</button>
      <button @click="go('/app/mine')">我的</button>
    </footer>

  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function go(path: string) {
  router.push(path);
}
</script>

<style scoped>
.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  overflow: auto;
}

.tabbar {
  display: flex;
  height: 56px;
  border-top: 1px solid #ddd;
}

.tabbar button {
  flex: 1;
  border: none;
  background: #fff;
}
</style>