<template>
  <div class="bg">
    <div class="box2">
      <form action="/">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </div>
    <div class="box1">
      <van-swipe :loop="true" :width="400" :show-indicators='false'>
          <!-- 推荐歌单 -->
        <van-swipe-item>
             <span class="h2">全部歌单</span>
             <div class="box3_box1" @click="geDan()">
          <div class="box3" v-for="(item , index) in hotList.slice(0, 3)" :data="item" :key="index">
             <span class="text"> {{item.name}}</span>
             <img :src="item.coverImgUrl" alt="" class="img1">
             
              </div>
              <button class="bt1" @click="gengDuo">更多</button>
              </div>
        </van-swipe-item>
        <!-- 热门 -->
        <van-swipe-item>      
            <span class="h2">网友推荐歌单</span>
                <div class="reMen" v-for="(item , index) in tuiJianList.slice(1, 2)" :data="item" :key="index" >
                     <img :src="item.coverImgUrl" alt="" class="rMimg" @click="tuijianXiangQing(item.id)"  >
                     <h3 class="rMtxt">{{item.name}}</h3>
                     <!-- <h5>{{item.id}}</h5> -->
                </div>
        </van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>

    <!-- <div class="bofang"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      hotList: [],
      tuiJianList:[],
    };
  },
  methods: {
    onSearch() {},
    onCancel() {},
    hot() {
      this.api.paiHangData({}).then((data) => {
        // console.log(data);
        this.hotList = data.data.list;
      });
    },
    gengDuo(){
        // console.log(4444444);
        this.$router.push({
          path:'/gengDuo'
        })
    },
    // 点击进入歌单详情页面
    geDan(){

    },
    // 网友推荐歌单
     tuiJian(){
         this.api.tuiJianGeDanData('/top/playlist',{

         }).then(data=>{
          //  console.log(data);
           this.tuiJianList = data.data.playlists
         })
     },
     tuijianXiangQing(value){
         this.$router.push({
           path:'/hot',
           query:{
             id:value
           }
           
         })
        //  console.log(value);
     }
  },

  mounted() {
    this.hot();
    this.tuiJian()
  },
};
</script>

<style scoped>
/* .van-search__action{
    display: none;
} */

.box1 {
  background: #ffffff;
  width: 100%;
  height: 470px;
  /* border: 1px solid red; */
  box-sizing: border-box;
  margin-top: 20px;
}
.bg {
  background-color: #f2f2f2;
  position: relative;
}
.h2 {
  color: #330a12;
  font-weight: bold;
  float: left;
  margin-left: 40px;
  font-size: 23px;
  margin-top: 20px;
}
.van-swipe-item {
  height: 460px;
  background: #ffffff;
}
/* .bofang {
  width: 100%;
  height: 30px;
  border: 1px solid black;
  box-sizing: border-box;
  margin-top: 30px;
  background: white;
} */
.box3 {
  width: 300px;
  height: 100px;
  background: #feddcc;
  margin-top: 20px;
  margin-left: 40px;
  border-radius: 20px;
}
.text{
    font-size: 31rpx;
    color: #330a12;
    font-weight: bold;
    line-height: 100px;
    float: left;
    margin-left: 10px;
    /* height: 20px; */
    /* display: inline-block; */
}
/* .box1 /deep/ {
    width: 500px;
} */
.van-swipe__track /deep/ .van-swipe-item{
    width: 500px;
}
.img1{
    width: 100px;
    height: 100px;
    border-radius: 50px 10px  20px 50px;
    float: right;
}
.box3_box1{
    margin-top: 65px;
}
.bt1{
    width: 270px;
    height: 38px;
    background: #f43151;
    border-radius: 38px;
    border: none;
    color: #ffffff;
    margin-top: 12px;
}
/* .reMen{

} */
.rMimg{
   width: 80%;
   height: 300px;
   border-radius: 10px;
   margin-top: 30px;
}
/* .rMtxt{
    
} */
</style>