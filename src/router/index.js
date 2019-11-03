// 导入
import VueRouter from 'vue-router'
import Vue from 'vue'
import local from '@/utils/local'

import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFound from '@/views/404'
import Article from '@/views/article'
import Image from '@/views/image'
import Publish from '@/views/publish'

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
      component: Home,
      children: [
        // 欢迎页面
        {
          path: '',
          component: Welcome
        },
        // 内容管理
        {
          path: 'article',
          component: Article
        },
        // 素材管理
        {
          path: 'image',
          component: Image
        },
        // 发布文章
        {
          path: 'publish',
          component: Publish
        }
      ]
    },
    {
      path: '*',
      component: NotFound
    }

  ]
})

// 添加路由 的 导航守卫（前置导航守卫）
router.beforeEach((to, from, next) => {
  // 当每次跳转路由前触发
  // to 跳转到目标路由对象
  // from 从哪里跳转过来的路由对象
  // next 下一步方法 next()放行 next('/login')拦截
  const user = local.getUser()
  // 如果登录
  if (user && user.token) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

// 导出
export default router
