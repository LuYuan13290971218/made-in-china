<template>
  <div>
    <div class="box1">
        <van-nav-bar title="歌单详情" left-arrow @click-left="onClickLeft" />
        
        <div class="box2">
            <div class="box3">
            <button class="bt1">播放全部</button>
            <span class="span2" >{{this.hotsList.name}}</span>
        </div>
             <img class="img1" :src="this.hotsList.coverImgUrl" alt="">
             <h3 class="h3">播放列表</h3>
             <div  class="box4" v-for="(item , index) in hotsList.tracks" :key="index" :data="item"   >
                 <span class="text1" @click="huoQuId(item.id)" >{{item.al.name}}</span>
                
             </div>
            
        </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations } from 'vuex';
import bofang from '../Home/bofang'
export default {
    components:{bofang },
  data() {
    return{
        hotsList:[],
    };
  },
  methods: {
    ...mapMutations(['setUid']),
    onClickLeft() {
      this.$router.push({
        path: "/home",
      });
   
    },
    xiangqingData(){
        this.api.huoQugedanData('/playlist/detail?id='+this.$route.query.id, {

        }).then(data=>{
            console.log(data);
         this.hotsList=data.data.playlist
          // this.$store.commit('setUid' ,data.data.playlist.tracks.id)
        
        })
    },
  //  跳转播放
     huoQuId(value){
        //  this.$router.push({
        //      path:'/bofang',
        //      query:{
        //         id:value
        //      },
             
        //  })
          this.$store.commit('setUid' ,value)
        // console.log(value);
     } ,

     seeion(){
          this.sessionData("set","name",this.hotsList)
     }

    
  },
  mounted() {
     this.xiangqingData()
     this.seeion()
  },
};
</script>

<style scoped>
.box1{
  /* background: #e9e8e6; */
   /* background: red;  */
   /* background: #ea5c54; */
   background:#2C3E50;
   padding-top: 20px;
}
.box2{
     /* padding-top: 150px; */
     width: 90%;
     height: 100%;
     background: white;
     margin-left: 5%;
     border-radius: 10px 10px 0  0 ;
     margin-top: 85px;
     position: relative;
}
.van-nav-bar {
 background:#2C3E50;
 margin-top: 10px;
 color: #330a12;

}
.img1{
    width: 150px;
    height: 150px;
    position: absolute;
    top: -70px;
    left: 20px;
    border-radius: 10px;
}
.text1{
    font-size: 15px;
    margin: 10PX 0 0 38PX;
    border-bottom: 1px solid lightgray;
}
.box3{
    width: 100%;
    height: 180px;
    border: 1px solid lightblue;
    border-radius: 10px 10px 0 0;
    box-sizing: border-box;
    /* display: flex; */
}
.bt1{
    background: #f43151;
    width: 120px;
    height: 40px;
    float: right;
    border-radius: 20px;
    color: white;
    border: none;
    margin: 30px 15px 0 0;
}
.span2{
    font-size: 15px;
    /* margin: 0px 0 0 10px; */
    position: absolute;
    top: 95px;
   margin-right: 50px;
   color: #330a12;
   font-weight: bold;
}
.box4{
    display: flex;
    
}
.h3{
    color: #330a12;
}
</style>