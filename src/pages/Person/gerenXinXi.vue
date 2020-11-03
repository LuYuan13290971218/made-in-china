<template>
  <div >
    <div class="nav">
      <img src="../../assets/saomiao.png" alt class="img1" />
      <img src="../../assets/bianji.png" alt class="img2" />
      <span class="span1">我的</span>
       <div  v-for="(item , index) in xinXiList" :key="index" :data="item">
           <img class="img5" :src="item.avatarUrl" alt="">
           <span class="title1">{{item.nickname}}</span>
           {{item.userId}}
       </div>
      <div class="box1">
        <span class="span5">开通库客会员</span>
        <button class="bt1">开通</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        xinXiList:[],
        
    };
  },
  methods: {
        dengluzhuangtai(){
         this.api.dengLuData({

     }).then(data=>{
         console.log(data);
         this.xinXiList=data.data
        //  遇到后台反数据包的层数过多时，记得要加上索引值
         console.log(this.xinXiList.bindings[0].userId);
         this.$store.commit('userId' ,this.xinXiList.bindings[0].userId )
        //  this.$store.commit('setLogins' , true)
     })
     },

  },
  mounted() {
      this.dengluzhuangtai()
  },
  computed: {
    
  },
  watch: {
    
  },
};
</script>

<style scoped>
.nav {
  width: 100%;
  height: 200px;
  background: rgb(47, 20, 13);
  position: relative;
}
.img1 {
  width: 28px;
  height: 28px;
  position: absolute;
  left: 25px;
  top: 30px;
}
.img2 {
  width: 30px;
  height: 30px;
  position: absolute;
  right: 25px;
  top: 30px;
}
.span1 {
  font-size: 18px;
  color: #ffffff;
  position: absolute;
  top: 30px;
  left: 170px;
}
.van-uploader {
  position: absolute;
  top: 60px;
  left: 40px;
  width: 80px;
  height: 80px;
  border-radius: 50px;
}
.spantxt {
  position: absolute;
  top: 75px;
  left: 130px;
  color: white;
  font-size: 15px;
}
.box1 {
  width: 330px;
  height: 40px;
  position: absolute;
  top: 160px;
  background: rgb(57, 22, 28);
  color: #ccb8ba;
  margin-left: 30px;
}
.bt1 {
  color: white;
  background: #fd744f;
  width: 80px; 
  height: 35px;
  border-radius: 35px;
  float: right;
}
.span5 {
  position: absolute;
  left: 30px;
  top: 5px;
}
.img5{
    border-radius: 50px;
    width: 70px;
   position: absolute;
   top: 68px;
   left: 45px;
}
.title1{
    color: #ffffff;
    position: absolute;
    top: 85px;
    left: 130px;
}
</style>