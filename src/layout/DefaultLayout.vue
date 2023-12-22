<template>

  <div class="container">

    <div class="sider">
      <SideMenu/>
    </div>

    <div class="content">
      <Navbar />
      <el-scrollbar class="page">
        <router-view/>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/layout/component/Navbar.vue";
import SideMenu from "@/layout/component/SideMenu.vue";




</script>

<style lang="less" scoped>
@import "@/assets/style/variable.less";


.container {
  height: 100%;
  display: flex;
}

.sider {
  min-width: 210px;
  border-right: solid 1px var(--el-menu-border-color);
  background-color: #001529;
}

.content {
  width: 100%;
  height: calc(100% - @nav-height);
  .page {
    background-color: @content-bg-color;
  }
}

</style>
