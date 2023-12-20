<template>
  <span>login</span> <br> <br>
  <el-button type="primary" size="large" @click="handleClick(1)">Login As Admin</el-button>
  <br> <br>
  <el-button type="primary" size="large" @click="handleClick(0)">Login As User</el-button>
</template>

<script setup>

import {useUserStore} from "@/store/modules/user.js";
import router from "@/router/index.js";

const userStore = useUserStore()

function handleClick(role) {
  userStore.info.role = role
  userStore.token = '123456'
  // loadRoleRoutes(router, role)
  router.push('/')
}


</script>

<style scoped>

</style>
