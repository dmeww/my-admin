<template>
  <el-container class="container">

    <div class="box">
      <div class="logo">
        <img src="@/assets/logo.svg" width="80" alt="logo">
        <div class="title">线上会议管理系统</div>
      </div>

      <el-button style="width: 300px" type="primary" size="large" @click="handleClick(1)">Login As Admin</el-button>
      <el-button style="width: 300px;margin-left: 0;margin-top: 10px;" type="primary" size="large" @click="handleClick(0)">Login As User</el-button>

      <div class="content">

        <!--      登录表单-->
        <div class="login-form" v-show="!show_reg">
          <el-form :model="ruleForm" :rules="formRules" ref="login_form">
            <el-form-item prop="username">
              <el-input type="text" v-model="ruleForm.username" placeholder="邮箱" size="large" class="form-item"/>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="ruleForm.password" placeholder="密码" size="large" class="form-item"/>
            </el-form-item>

            <el-button size="large" @click="submitLogin()" style="width: 100%;margin-bottom: 10px;">登录</el-button>
          </el-form>

        </div>
        <!--      注册表单-->
        <div class="reg=form" v-show="show_reg">
          <el-form :model="ruleForm" :rules="formRules" ref="reg_form">
            <el-form-item prop="username">
              <el-input type="text" v-model="ruleForm.username" placeholder="邮箱" size="large" class="form-item"/>
            </el-form-item>
            <div class="email-auth">
              <el-row>
                <el-col :span="18">
                  <el-form-item prop="email_code">
                    <el-input type="text" v-model="ruleForm.email_code" placeholder="邮箱验证码" size="large"
                              class="form-item"/>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-button size="large" @click="sendEmailAuthKey" style="width: 100%;">
                    发送
                  </el-button>
                </el-col>
              </el-row>
            </div>
            <el-form-item prop="password">
              <el-input type="password" v-model="ruleForm.password" placeholder="密码" size="large" class="form-item"/>
            </el-form-item>
            <el-button size="large" @click="submitRegister()" style="width: 100%;margin-bottom: 10px;">注册</el-button>
          </el-form>
        </div>

        <div class="reg" v-show="!show_reg">
          没有账号？
          <el-text class="mx-1" type="primary" @click="switchShow">注册</el-text>
        </div>

        <div class="reg" v-show="show_reg">
          已经有账号？
          <el-text class="mx-1" type="primary" @click="switchShow">登录</el-text>
        </div>

      </div>

    </div>

  </el-container>

</template>

<script setup>

import {useUserStore} from "@/store/modules/user.js";
import router from "@/router/index.js";
import {ref} from "vue";

const userStore = useUserStore()

const show_reg = ref(false)
const ruleForm = ref({})
const formRules = ref([])

function switchShow() {
  show_reg.value = !show_reg.value
  // 清空输入框
  ruleForm.value.username = ''
  ruleForm.value.password = ''
  ruleForm.value.email_code = ''
}

function handleClick(role) {
  userStore.info.role = role
  userStore.token = '123456'
  // loadRoleRoutes(router, role)
  router.push('/')
}


</script>

<style lang="less" scoped>
.container {
  height: 100%;
  justify-content: center;
  align-items: center;
}


.box {
  display: flex;
  flex-direction: column;
  width: 300px;

}

.logo{

  display: flex;
  align-items: center;
  flex-direction: column;

  .title {
    text-align: center;
    font-size: 25px;
    margin-bottom: 20px;
    color: rgb(51, 51, 51);
  }
}



.content {
  .form-item {
    margin-bottom: 10px;
  }

  .reg {
    text-align: right;
  }

  .reg .el-text {
    cursor: pointer;
  }

  .email-auth {
    width: 100%;
  }

}


</style>
