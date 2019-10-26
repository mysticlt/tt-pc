// 导入
import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login'
import home from '@/views/home'

// 使用
Vue.use(VueRouter)
// 实例化
const router = new VueRouter({
  // 配置对象
  // 路由规则选项 routes  若干规则
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: home
    }
  ]
})
// 导出
export default router
