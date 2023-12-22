<template>

  <div class="top">
    <img src="@/assets/logo.svg" alt="logo" class="logo">
    <span class="title">
      在线会议管理系统
    </span>
  </div>
  <el-scrollbar style="height: calc(100% - 48px); background-color: #001529;">
    <el-menu
        :default-active="activeMenuItem"
        background-color="#001529"
        text-color="#A5ADB4"
        active-text-color="#FFFFFF"
        class="menu"
    >
      <div v-for="item in menu" :key="item.title">

        <el-menu-item :index="item.url" v-if="!item.children" @click="handleOpen(item.url)">
          {{ item.title }}
        </el-menu-item>

        <el-sub-menu v-else :index="`${item.url}-x`">

          <template #title>
            <el-icon>
              <location/>
            </el-icon>
            <span>{{ item.title }}</span>
          </template>

          <el-menu-item :index="sub.url" v-for="sub in item.children" :key="sub.url" @click="handleOpen(sub.url)">
            {{ sub.title }}
          </el-menu-item>

        </el-sub-menu>


      </div>

    </el-menu>


  </el-scrollbar>

</template>

<script setup>
import { Location} from "@element-plus/icons-vue";
import router from "@/router/index.js";
import {useAppStore} from "@/store/index.js";
import {computed} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()

const appStore = useAppStore()

const menu = computed(() => appStore.sideMenu.list)
const activeMenuItem = computed(() => route.path)



function handleOpen(targetUrl) {
  console.log("你点击了", targetUrl)
  router.push(targetUrl)
}


</script>

<style lang="less" scoped>
@import "@/assets/style/variable.less";

.menu {
  height: 100%;
  border-right: none;
}

.top {
  display: flex;
  align-items: center;
  justify-content: center;
  height: @nav-height;
  background-color: rgb(0, 33, 64);
  color: white;

  .logo {
    height: 32px;
  }

  .title {
    font-size: 18px;
    font-weight: normal;
    padding-left: 12px;
  }
}

</style>
