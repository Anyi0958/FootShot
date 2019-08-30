// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入图标样式
import './font/iconfont.css'



// 引入mint-ui组件
import mintui from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(mintui)

// 引入axios
import axios from 'axios'
// 设置默认请求头
// axios.defaults.baseURL = 'http://localhost:8888'
axios.defaults.baseURL = 'http://47.102.96.85:8888'
//让axios自动携带cookieid到服务端，为学session做准备
axios.defaults.withCredentials=true;
Vue.prototype.axios = axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
