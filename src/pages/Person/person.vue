<template>
  <div>
      <div class="nav">
             <img src="../../assets/saomiao.png" alt="" class="img1">
             <img src="../../assets/bianji.png" alt="" class="img2">
             <span class="span1">我的</span>
             <van-uploader :after-read="afterRead" />
             <span class="spantxt"><span class="span3"> <router-link to="/login">登录</router-link> </span>/<span class="span4"> <router-link to="/zhuce">注册</router-link></span> </span>
             <div class="box1"><span class="span5">开通库客会员</span><button class="bt1">开通</button></div>
      </div>
  </div>
</template>

<script>
export default {
      data(){
          return{

          }
      },
      methods: {
          afterRead(file){
              console.log(file)
          }
      },
}
</script>

<style scoped>
.nav{
    width: 100%;
    height: 200px;
    background: rgb(47,20,13);
    position: relative;
}
.img1{
    width: 28px;
    height: 28px;
    position: absolute;
    left: 25px;
    top: 30px;
}
.img2{
    width: 30px;
    height: 30px;
     position: absolute;
    right: 25px;
    top: 30px;
}
.span1{
    font-size: 18px;
    color: #ffffff;
    position: absolute;
    top: 30px;
    left: 170px;
}
.van-uploader{
    position: absolute;
    top: 60px;
    left: 40px;
    width: 80px;
    height: 80px;
    border-radius:50px;
}
.spantxt{
   position: absolute;
   top: 75px;
   left: 130px;
   color: white;
   font-size: 15px;
}
.box1{
    width: 330px;
    height: 40px;
    position: absolute;
    top: 160px;
    background: rgb(57,22,28);
    color:#CCB8BA;
    margin-left: 30px;
}
.bt1{
    color: white;
    background: #FD744F;
    width: 80px;
    height: 35px;
    border-radius: 35px;
    float: right;

}
.span5{
    position: absolute;
    left: 30px;
    top: 5px;
}
</style>