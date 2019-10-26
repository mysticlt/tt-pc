<template>
  <div class="container">
    <!-- 登录卡片 -->
    <el-card>
      <!-- logo -->
      <img src="../../assets/logo_index.png" width="200px" />
      <!-- 表单 -->
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" status-icon>
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号" style="width:345px"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            placeholder="请输入验证码"
            style="width:225px;margin-right:10px"
          ></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button style="width:345px" type="primary" @click="login">立即登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    // 校验手机号的函数
    const checkMobile = (rule, value, callback) => {
      // 通过校验逻辑判断成功失败
      // 手机号格式：1开头 第二位3-9 9个数字结尾
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('手机号格式不对'))
      }
    }

    return {
      loginForm: {
        mobile: '',
        code: ''
      },
      //  校验规则
      loginRules: {
        mobile: [
          // type: date|email|url 支持 不支持手机号
          { required: true, message: '请输入手机号', trigger: 'blur' }, // trigger 切换  blur焦点
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '验证码6个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      // 获取表单组件实例 ----> 调用校验函数
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          // 发请求 校验手机号和验证码 后台
          this.$http.post('authorizations', this.loginForm).then(res => {
          // 成功
            this.$router.push('/')
          }).catch(() => {
          // 失败 提示
            this.$message.error('手机或验证码错误')
          })
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
// 全屏容器
.container {
  width: 100%;
  height: 100%;
  // 背景尺寸 background-size 拆分写法
  // 组合写法background: 简写cover 铺满整个容器多余不显示 contain 等比例缩放完全显示在容器内
  background: url(../../assets/login_bg.jpg) no-repeat center / cover;
  position: absolute;
  left: 0;
  top: 0;
}
// 饿了么组件 el-card 组件名称  解析成HTML  后组件根元素上默认生成一个类和组件的名称一致
.el-card {
  width: 400px;
  height: 340px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  img {
    display: block;
    margin: 0 auto 30px;
  }
}
</style>
