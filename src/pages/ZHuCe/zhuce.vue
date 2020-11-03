<template>
  <div>
     <van-nav-bar
  title="注册"
  left-arrow
  @click-left="onClickLeft"
/>
    <div class="box1">
    <van-field v-model="text" label="用户名" />
    <van-field v-model="tel" type="tel" label="手机号" />
    <van-field v-model="password" type="password" label="密码" />
    <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
      <template #button>
        <van-button size="small" type="primary" @click="faSong">发送验证码</van-button>
      </template>
    </van-field>
    
    </div>
     <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit" @click="zhuCe">
      完成
    </van-button>
  </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
           text:'',
           tel:'',
           password:'',
           sms:'',

        }
    },
    methods: {
        // 返回上个页面点击事件
        onClickLeft(){
             
        },
        zhuCe(){
           this.api.zhuCeData({
               captcha:this.sms,
               phone:this.tel,
               password:this.password,
               nickname:this.text
           }).then(data=>{
               console.log(data);
           })
        //    this.api.yanZhengData({
        //        phone:this.tel,
        //        captcha:this.sms
        //    }).then(data=>{
        //        console.log(data);
        //    })
        },
        // 发送验证码
        faSong(){
            this.api.sendData({
                phone:this.tel,
            }).then(data=>{
                console.log(data);
            })
        },
        
    },
};
</script>

<style  scoped>

.box1{
    margin-top: 40px;
    margin-bottom: 40px;
}
</style>