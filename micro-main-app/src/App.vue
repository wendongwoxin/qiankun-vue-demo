<script setup lang="ts">
import { RouterLink } from 'vue-router'
import actions from './micro/action';
import { onMounted } from 'vue';
onMounted(() => {
  // 注册一个观察者函数
  actions.onGlobalStateChange((state, prevState) => {
    // state: 变更后的状态; prevState: 变更前的状态
    console.log("主应用观察者：token 改变前的值为 ", prevState.token);
    console.log("主应用观察者：登录状态发生改变，改变后的 token 的值为 ", state.token);
  });
})

const login = () => {
  const token = Math.random().toString(36).substr(2, 10)
  actions.setGlobalState({ token })
}
</script>
<template>
  <button @click="login">login</button>
  <nav>
    <RouterLink to="/#/demo-vue3">Vue3</RouterLink>
  </nav>
  <div id="app-container"></div>
</template>

<style>
#app-container {
  height: 600px;
  width: 1200px;
  /* background-color: yellowgreen; */
}
</style>
