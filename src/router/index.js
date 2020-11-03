import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


import home from '../pages/Home/home.vue'
import person from '../pages/Person/person.vue'
import login from '../pages/Login/login.vue'
import gerenXinXi from '../pages/Person/gerenXinXi.vue'
import zhuce from '../pages/ZHuCe/zhuce.vue'
import gengDuo from '../pages/Home/gengDuo.vue'
import geQuList from '../pages/Home/geQuList'
import hot from '../pages/Home/hot'
import bofang from '../pages/Home/bofang'
import zhuangtailan from '../pages/Home/zhuangtailan'
import xiangQing from '../pages/Home/xiangQing'
import guangchang from '../pages/guangChang/guangchang.vue'
import collection from '../pages/collection/collection.vue'
import zuijinbofang from '../pages/collection/zuijinbofang'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/home"
  },{
    path:'/home',
    name:'home',
    component:home
  },{
    path:'/geQuList',
    name:'geQuList',
    component:geQuList
  },{
    path:'/zhuangtailan',
    name:'zhuangtailan',
    component:zhuangtailan
  }
  ,{
    path:'/gengDuo',
    name:'gengDuo',
    component:gengDuo  
  },{
    path:'/hot',
    name:'hot',
    component:hot  
  },{
    path:'/bofang',
    name:'bofang',
    component:bofang
  },{
    path:'/login',
    name:"login",
    component:login
  },{
    path:'/person',
    name:"person",
    component:person
  },{
    path:'/zhuce',
    name:"zhuce",
    component:zhuce
  },{
    path:'/guangchang',
    name:"guangchang",
    component:guangchang
  },{
    path:'/collection',
    name:"collection",
    component:collection
  },{
    path:'/gerenXinXi',
    name:"gerenXinXi",
    component:gerenXinXi
  },{
    path:'/zuijinbofang',
    name:"zuijinbofang",
    component:zuijinbofang
  },{
    path:'/xiangQing',
    name:"xiangQing",
    component:xiangQing
  },

]

const router = new VueRouter({
  // 打包的时候
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
