<template>
  <div>
    <!-- 容器布局 -->
    <el-container>
      <el-header class="title">资讯管理系统</el-header>
      <el-main class="bg-color">
        <el-row :gutter="20">
          <el-col :span="6"
            ><div>
              <el-image class="img" :src="src"></el-image></div
          ></el-col>
          <el-col :span="6" :offset="10">
            <!-- 登录表单开始 -->
            <div class="form">
              <h3>用户名密码登录</h3>
              <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="70px"
                class="demo-ruleForm"
              >
                <el-form-item label="用户名" prop="username">
                  <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input
                    type="password"
                    v-model="ruleForm.password"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button
                    type="primary"
                    size="small"
                    @click="submitForm('ruleForm')"
                    >登录</el-button
                  >
                  <el-button size="small" @click="resetForm('ruleForm')"
                    >重置</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
            <!-- 登录表单结束 -->
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// 导入api内的方法
import { login } from "@/api/login.js";
import conf from "@/utils/config.js";
const { token } = conf;
// console.log(login);
export default {
  data() {
    return {
      src: require("../assets/img/deco.9035740d.png"),
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  computed: {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 通过验证，提交数据给后台，存token，路由跳转
          login(this.ruleForm)
            .then((res) => {
              if (res.status == 200) {
                // console.log(res);
                // res.data.token
                sessionStorage.setItem(token, res.data.token);
                this.$router.push("/home");
              } else {
                console.log(res.statusText);
                this.$notify.error({
                  // title: "错误",
                  message: res.statusText,
                });
              }
            })
            .catch((err) => {
              console.log(err);
              this.$notify.error({
                title: "错误",
                message: "服务器内部错误",
              });
            });
          // this.ruleForm 单纯存在sessionStorage localStorage cookit
          // vuex token 刷新页面就没有了
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      // 重置内容重置表单验证
      this.$refs[formName].resetFields();
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.title {
  font-size: 26px;
  margin-top: 20px;
  margin-left: 80px;
}
.bg-color {
  background-color: #2cb5ac;
  padding: 80px 100px;
}
.img {
  width: 370px;
  height: 300px;
}
.form {
  background-color: #fff;
  width: 360px;
  height: 300px;
  padding: 10px 20px;
  border-radius: 10px;
  text-align: center;
}
</style>
