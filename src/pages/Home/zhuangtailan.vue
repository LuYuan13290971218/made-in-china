<template>
     <div class="bofang" @click="tiao()" v-if="$store.state.show">
         <div   v-for="(item , index) in xiangQingList" :data='item' :key="index">
          
              <img :src="item.al.picUrl" alt="" class="img1">
              <span class="span1">{{item.name}}</span>
              
                      <img src="../../assets/播放列表.png" alt="" class="img3">
           <img src="../../assets/1.png" alt="" class="img2">

       
         </div>
           
    
     </div>
</template>

<script>
 import {mapState} from 'vuex'
export default {
    data(){
      return{
xiangQingList:[],
      }
    },
    methods: {
      tiao(){
        this.$router.push({
          path:'/xiangQing'
        })
      },
      qingqiu(){
          this.api
        .huoQugedanData("/song/detail?ids=" + this.$store.state.uid, {})
        .then((data) => {
           console.log(data);
          this.xiangQingList = data.data.songs;
        });
      }
    },
    mounted() {
     
    },
    computed: {
      jianting(){
        return this.$store.state.uid
      }
    },
    watch: {
      jianting(newVal , oldVal){
        console.log(newVal);
        console.log(oldVal);
         this.qingqiu()
      }
    },
}
</script>

<style scoped>
.bofang {
  width: 100%;
  height: 50px;
  border: 1px solid #f5f5f5;
  box-sizing: border-box;
  /* margin-top: 30px; */
  background: white;
  position: absolute;
  bottom: 50px;
  position: fixed;
    /* align-items: center; */
  /* justify-content: center;  */
  z-index: 1111;
}
.img1{
  width: 40px;
  height: 40px;
  border-radius: 20px;
  float: left;
  margin-left: 10px;
  margin-top: 5px;
}
.span1{
  float: left;
  margin-left: 10px;
  line-height: 50px;
  color: #2c0d13;
}
.img3{
  width: 28px;
  margin-top: 10px;
  float:right;
  margin-right: 10px;
}
.img2{
  width: 28px;
  margin-top: 10px;
  float:right;
  margin-right: 15px;
}
</style>