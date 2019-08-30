import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // 首页
    {
      path: '/',
      component: ()=>import('../components/index.vue')
    },
      // 首页
      {
        path: '/index',
        component: ()=>import('../components/index.vue')
      },
    // 社区
    {
      path: '/community',
      component:()=>import('../components/community.vue')
    },
    // 个人主页
    {
      path: '/home',
      component:()=>import('../components/home.vue')
    },
    // 他人主页
    {
      path: '/whome',
      component: ()=>import('../components/whome.vue')
    },
    // 上传照片
    {
      path: '/upload',
      component: ()=>import('../components/upload.vue')
    },
    // 登录
    {
      path: '/login',
      component: ()=>import('../components/login.vue')
    },
    // 注册
    {
      path: '/reg',
      component: ()=>import('../components/reg.vue')
    },
    // 找回密码
    {
      path: '/reset',
      component: ()=>import('../components/reset.vue')
    },
   // 管理
   {
    path: '/admin',
    component: ()=>import('../components/admin.vue')
  },
  ]
})
