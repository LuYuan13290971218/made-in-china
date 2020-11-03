<template>
  <div id="app">

   
    <van-tabbar v-model="active"  v-if="$store.state.showTabbar">
      
      <van-tabbar-item icon="browsing-history-o" to="home">发现</van-tabbar-item>
      <van-tabbar-item icon="bullhorn-o" to="guangchang">广场</van-tabbar-item>
      <van-tabbar-item icon="like-o" to="collection">收藏</van-tabbar-item>
      <van-tabbar-item icon="contact" to="person">我的</van-tabbar-item>
      
    </van-tabbar>
     <zhuangtailan></zhuangtailan>
  
    <router-view />

      <audio class="box84" :src="item.url" controls="controls" preload="auto" autoplay="autoplay"  loop="loop" v-for="(item,index) in bofangList" :key="index" :data='item'></audio>
    
  </div>
</template>

<script>
import zhuangtailan from '../src/pages/Home/zhuangtailan'
export default {
  components:{zhuangtailan},
  data() {
    return {
      active: 0,
      bofangList:[],

    };
  },
  methods: {
      bofang(){
          this.api.obtainMusicData('/song/url?id='+this.$store.state.uid,{

          }).then(data=>{
              console.log(this.$store.state.uid);
              // console.log(data);
              this.bofangList=data.data.data
              
          })
          // console.log(this.$store.state.uid);
          
      },
  },
  mounted() {

        
  },
  computed: {
    chuanzhi(){
      return this.$store.state.uid
    }
  },
  watch: {
    chuanzhi(newVal , oldVal){
      console.log(newVal);
       console.log(oldVal);
       this.bofang()
    }
  },


};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.box84{
 display: none;
}
/* .bofang {
  width: 100%;
  height: 30px;
  border: 1px solid black;
  box-sizing: border-box;

  background: white;
  position: absolute;
  bottom: -70px;
  display: flex;
    align-items: center;
  justify-content: center; 
} */

</style>
