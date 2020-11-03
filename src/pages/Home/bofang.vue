<template>
  <div>
      <audio :src="item.url" controls="controls" preload="auto" autoplay="autoplay"  loop="loop" v-for="(item,index) in bofangList" :key="index" :data='item'></audio>
   <!-- <audio :src="item.url" controls="controls" preload="auto" autoplay="autoplay"  loop="loop" v-for="(item,index) in fangList" :key="index" :data='item'></audio> -->
  
  </div>
  
</template>

<script>
export default {
  data() {
    return {
     bofangList:[]

    };
  },
  methods: {
      chuanzhi(){
        // this.api.obtainMusicData('/song/url?id='+this.$route.query.id ,{

        //   }).then(data=>{
        //       console.log(data);
        //       this.fangList=data.data.data
        //   })
      },
      bofang(){
          this.api.obtainMusicData('/song/url?id='+this.$route.query.id ,{

          }).then(data=>{
              console.log(data);
              this.bofangList=data.data.data
              // sessionstorage存储
              // this.sessionData("set","id",this.bofangList);
              //  this.sessionData("get","id",this.bofangList)
          })
      },

  },
  mounted() {
     this.chuanzhi()
     this.bofang()
  },
};
</script>

<style scoped>
</style>