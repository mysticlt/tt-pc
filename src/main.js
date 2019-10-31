import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入文件的时候，默认导入的是目录文件下的索引文件（index.js/.vue/.json）优先级同括号内顺序
// @是webpack指定的路径别名 @==='/src'
import router from '@/router'

import axios from '@/api'

// import MyBread from '@/components/my-bread'
// Vue.component('my-bread', MyBread)
import plugin from '@/components'
Vue.use(plugin)

Vue.prototype.$http = axios

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// isMainThread.js 职责是入口文件
// 职责1：创建根实例
// 职责2：依赖项目需要全局的资源
