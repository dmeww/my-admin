<template>
  <div class="navbar">
    <div class="left">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
            v-for="bread in breadcrumb" :key="bread.url"
            :to="{ path: bread.url }"
        >
          {{ bread.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <ul class="right">

      <li class="list-item">
        <el-dropdown trigger="click">
          <el-avatar class="avatar el-dropdown-link" :size="36" src="@/assets/logo.vue"/>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item :icon="Plus"> Action 1</el-dropdown-item>
              <el-dropdown-item :icon="CirclePlusFilled"> Action 2</el-dropdown-item>
              <el-dropdown-item :icon="CirclePlus"> Action 3</el-dropdown-item>
              <el-dropdown-item :icon="Check"> Action 4</el-dropdown-item>
              <el-dropdown-item :icon="CircleCheck" @click="handleLogout"> Logout</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </li>

    </ul>

  </div>
</template>

<script setup>
import {
  Check,
  CircleCheck,
  CirclePlus,
  CirclePlusFilled, Plus,
} from '@element-plus/icons-vue'
import {clearStores, useAppStore} from "@/store/index.js";
import {computed, ref, watch} from "vue";
import {useRoute} from "vue-router";
import router from "@/router/index.js";
import {resetRouter} from "@/utils/router.js";

const route = useRoute()
let appStore = useAppStore()
const menu = computed(() => appStore.sideMenu.list)

function handleLogout() {
  clearStores()
  // location.reload()
  resetRouter(router)
  router.push('/')

}

const breadcrumb = computed(() => {
  let pathNodes = []
  route.matched.filter((item) => {

    pathNodes.push(item.meta)
  })
  return pathNodes
})


</script>

<style lang="less" scoped>
@import "@/assets/style/variable.less";


.navbar {
  height: @nav-height;
  display: flex;
  justify-content: space-between;
  padding: 0 10px 0 26px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); /* 添加浅色阴影 */
}

.left {
  display: flex;
  align-items: center;


}

.right {

  list-style: none; // 关闭ul默认的样式
  margin: 0 0 0 12px;
  padding-left: 0;

  .list-item {
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 8px;
    padding-right: 8px;

    &:hover {
      background-color: #F6F6F6;
    }

    .avatar {
      &:hover {
        cursor: pointer;
      }
    }

  }


}

</style>
