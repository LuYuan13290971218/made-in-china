<template>
  <div >
    <img src="../../assets/0.jpg" alt class="img1" />
    <van-tabs v-model="active">
      <van-tab title="账号登录">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="用户名"
            label="手机号"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit" >提交</van-button>
          </div>
          
        </van-form>
      </van-tab>




      <van-tab title="验证码登录">
        <van-field v-model="tel" type="tel" label="手机号" />
        <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
          <template #button>
            <van-button size="small" type="primary" @click="yanzhengma()">发送验证码</van-button>
          </template>
        </van-field>
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-tab>
    </van-tabs>
    <router-link to="/zhuce">注册</router-link>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "",
      username: "",
      password: "",
      tel: "",
      sms: "",
      loginList:[],
      Toast:'',
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
       this.api.miMaData('/login/cellphone?phone='+this.username+'&password='+this.password+' ' ,{
            phone:this.username,
            password:this.password
       }).then(data=>{
         console.log(data);
          this.loginList = data.data.code
         if(this.loginList== 200){
            this.$toast.success('登录成功');
              setTimeout(() => {
                   this.$router.push({
                 path:'/gerenXinXi'
               })
               this.$store.commit('setLogin' , false)
                this.$store.commit('setLogins' , true)
              }, 2000);
         }
       })
    },
    yanzheng(){
     this.api.yanZhengData({
          phone:this.tel,
          captcha:this.sms
     }).then(data=>{
         console.log(data.data);

     })
     },
     
     dengluzhuangtai(){
         this.api.dengLuData({

     }).then(data=>{
         console.log(data);
     })
     },
     yanzhengma(){
         this.api.sendData({
               phone:this.tel
         }).then(data=>{
             console.log(data);
         })
     },
    //  mimas(){
    //      this.api.yongHuData('/user/playlist?uid=543387921',{

    //      }).then(data=>{
    //        console.log(data);
    //      })
    //  },
     shuaxinDengLu(){
       this.api.zhuangtaiData({

       }).then(data=>{
         console.log(data);
       })
     }
  },
  mounted() {
  //  this.shuaxinDengLu()
  // this.mimas()
    
  },
};
</script>

<style scoped>
.img1 {
  width: 100px;
  height: 100px;
}
</style>