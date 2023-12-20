<template>
  <div class="navbar">
    <div class="left">
      <el-icon size="20" class="expand">
        <Expand/>
      </el-icon>
    </div>

    <ul class="right">

      <li>
        <el-dropdown trigger="click">
          <el-avatar class="avatar el-dropdown-link" :size="36" src="@/assets/logo.vue"/>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item :icon="Plus"> Action 1 </el-dropdown-item>
              <el-dropdown-item :icon="CirclePlusFilled"> Action 2 </el-dropdown-item>
              <el-dropdown-item :icon="CirclePlus"> Action 3 </el-dropdown-item>
              <el-dropdown-item :icon="Check"> Action 4 </el-dropdown-item>
              <el-dropdown-item :icon="CircleCheck" @click="handleLogout"> Logout </el-dropdown-item>
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
  CirclePlusFilled, Expand,
  Plus,
} from '@element-plus/icons-vue'
import {clearStores} from "@/store/index.js";

function handleLogout() {
  clearStores()
  location.reload()
}

</script>

<style lang="less" scoped>
@import "@/assets/style/variable.less";


.navbar {
  height: @nav-height;
  display: flex;
  justify-content: space-between;
  padding: 0 12px 0 26px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); /* 添加浅色阴影 */
}

.left {
  display: flex;
  align-items: center;

  .expand {
    &:hover {
      cursor: pointer;
    }
  }
}

.right {
  display: flex;
  align-items: center;
  padding-right: 10px;
  list-style: none; // 关闭ul默认的样式

  .avatar {
    &:hover {
      cursor: pointer;
    }
  }

}

</style>
