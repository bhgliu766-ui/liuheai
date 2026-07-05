<template>
  <div class="page">
    <h1>登录</h1>

    <input v-model="username" placeholder="账号" />
    <input v-model="password" placeholder="密码" type="password" />

    <button @click="login">登录</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const password = ref('')

function login() {
  console.log('login:', username.value, password.value)
}
</script>