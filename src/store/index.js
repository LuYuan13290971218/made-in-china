import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uid:'',
    id:'',
    musicid:'19723756',
    showTabbar:true,
    show:true,
    isLogin:true,
    isLogins:false,
  },
  mutations: {
    // 歌曲id
    setUid(state , value){
      state.uid = value
    },
    // 用户id 
    userId(state , value){
      state.id = value
    },
    // 音乐列表id
    musicList(state , value){
      state.musicid = value
    },
     setshowTabbar(state , value){
        state.showTabbar = value
     },
     setShow(state,value){
        state.show = value
     },
     setLogin(state ,value){
       state.isLogin = value
     },
     setLogins(state ,value){
      state.isLogins = value
    },
  },
  actions: {
  },
  modules: {
  }
})
