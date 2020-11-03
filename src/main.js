import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/font_2091230_mdzk5t44eo/iconfont.css'

import vant, { Form } from 'vant'
import 'vant/lib/index.css'
Vue.use(vant)
import api from './API/api'
Vue.prototype.api = api 


import {localData, sessionData} from "../src/assets/fengzhuang.js/local"
    Vue.prototype.localData = localData;
    Vue.prototype.sessionData=sessionData;
  
// import vueAplayer from 'vue-aplayer'
// import bofang from './components/bofang'
// Vue.use(bofang)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

