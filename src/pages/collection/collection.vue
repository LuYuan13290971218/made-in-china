<template>
  <div class="bg">
    <div class="box1">
      <div class="title1">收藏</div>
      <div class="box3">
        <div class="box2" @click="zuijin()">
          <img src="../../assets/闹钟.png" alt class="img1" />
          <span class="text1" >最近播放</span>
        </div>
        <div class="box2">
          <img src="../../assets/喜欢.png" alt class="img1" />
          <span class="text1">喜欢的歌</span>
        </div>
        <div class="box2">
          <img src="../../assets/电台.png" alt class="img1" />
          <span class="text1">喜欢的电台</span>
        </div>
      </div>
      <div class="box4">
           <span class="span8">我的歌单
                
           </span>

           <!-- <img src="../../assets/编 辑.png" alt="" class="img5"> -->
      </div>
      <div class="box4">
           <span class="span8">我的FM</span>
           <!-- <img src="../../assets/编 辑.png" alt="" class="img5"> -->
      </div>
      <div class="box7"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    //   最近播放
      zuijin(){
    
        this.$router.push({
            path:'/zuijinbofang'
        })
      },
     // 用户歌单
      userGedan(){
        this.api.yongHuData('/user/playlist?uid='+this.$store.state.id ,{
              
        }).then(data=>{
          console.log(data);
        })
      } 
  },
  mounted() {
   this.userGedan()
  },
};
</script>

<style scoped>
.bg {
  background: #f2f2f2;
}
.title1 {
  font-size: 17px;
  font-weight: bold;
  color: #330a12;
  padding: 25px 0 15px 0;
  border: 1px solid #ebebeb;
}
.box2 {
  width: 100px;
  height: 100px;
  background: white;
  border: 1px solid white;
  border-radius: 10px;
}
.box3 {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  padding-bottom: 30px;
}
.img1 {
  width: 30px;
  margin: 20px 30px 10px;
}
.text1 {
  color: #330a12;
  font-weight: bold;
}
.box4{
    width: 340px;
    height: 340px;
    background: white;
    border: 1px solid white;
    box-sizing: border-box;
    margin: 0 18px 20px 18px;
    border-radius: 20px;
    
}
.box7{
    height: 40px;
}
/* .img5{
    width: 20px;
} */
.span8{
    font-size: 20px;
    font-weight: bold;
    color: #330a12;
}
</style>