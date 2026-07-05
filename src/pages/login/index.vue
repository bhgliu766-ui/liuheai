<template>
  <div>
    <h1>登录</h1>
    <button @click="login">进入系统</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function login() {
  router.push("/app");
}
</script>