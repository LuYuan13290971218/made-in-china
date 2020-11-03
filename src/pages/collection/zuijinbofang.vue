<template>
  <div>
     <van-nav-bar
  title="最近播放"
  left-arrow
  @click-left="onClickLeft"
/>
    <div class="box1" v-for="(item , index) in zuijinList" :key="index" :data="item">
        <div class="box2" @click="zj(item.song.id)" >
            <img :src="item.song.al.picUrl" alt="" class="img1">
            <span class="span2">{{item.song.al.name}}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            zuijinList:[],
        }
    },
    methods: {
        zuijin(){
                this.api.zuijinData('/user/record?uid='+this.$store.state.id+'&type=1 ',{
 
        }).then(data=>{
            console.log(data);
            this.zuijinList=data.data.weekData
           
        })
        },
        onClickLeft(){
             this.$router.push({
                 path:'/collection'
             })
        },
        zj(value){
            console.log(value);
            
              this.$store.commit('setUid' ,value)
        }
    },
    mounted() {
        this.zuijin()
    },
    computed: {
        huoquId(){
            return this.$store.state.id
        }
    },
    watch: {
        chuanzhi(newval ,oldval){
            console.log(newVal);
       console.log(oldVal);
       this.huoquId()
        }
    },
}
</script>

<style scoped>
.box2{
    display: flex;
    margin: 20px 20px 5px 20px;
    border: 1px solid slategrey;
    background: salmon;
}
.img1{
    width: 60px;
    height: 60px;
    float: left;
    
}
.span2{
    margin: 15px 0  0 40px;
}
</style>