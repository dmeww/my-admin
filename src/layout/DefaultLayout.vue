<template>

  <div class="container">

    <div class="sider">
      <SideMenu/>
    </div>

    <div class="content">
      <Navbar/>
      <div class="page">
        <router-view/>
      </div>
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
  height: calc(100% - @nav-height);
  display: flex;
}

.sider {
  min-width: 220px;
  //width: 200px;
  border-right: solid 1px var(--el-menu-border-color);
  background-color: #001529;
}

.content {
  width: 100%;
  .page{
    background-color: @content-bg-color;
  }
}

</style>
