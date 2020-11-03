<template>
  <div>
    <img src="../../assets/下箭头.png" alt class="img1" @click="tz()" />
    <div v-for="(item , index) in xiangQingList" :data="item" :key="index">
      <img :src="item.al.picUrl" alt class="img2" />
      <h2 class="span1">{{item.name}}</h2>
    </div>
    <div class="box3">
      <i class="iconfont icon-shunxubofang img5" ></i>
      <i class="iconfont icon-shangyishou img5"></i>
      <i class="iconfont icon-zanting img4" @click="zanting()"></i>
      <i class="iconfont icon-xiayishou img5"></i>
      <i class="iconfont icon-bofangliebiao img6"></i>
    </div>
  </div>
</template>

<script>

import { mapState } from "vuex";
export default {
  data() {
    return {
      xiangQingList: [],
    };
  },
  methods: {
    tz() {
      this.$router.push({
        path: "/home",
      });
    },
    qingqiu1() {
      this.api
        .huoQugedanData("/song/detail?ids=" + this.$store.state.uid, {})
        .then((data) => {
          console.log(data);
          this.xiangQingList = data.data.songs;
        });
    },
    zanting(){
      console.log(document.querySelector('.box84'));
      var a =document.querySelector('.box84')
      // 暂停。但是还没有写完
      a.pause()
      // a.play()
    }
  },
  mounted() {
    this.$store.commit("setshowTabbar", false);
    this.$store.commit("setShow", false);
    this.qingqiu1();
  },
  destroyed() {
    this.$store.commit("setshowTabbar", true);
    this.$store.commit("setShow", true);
  },
  computed: {
    jiantin() {
      return this.$store.state.uid;
    },
  },
  watch: {
    jiantin(newVal, oldVal) {
      // console.log(newVal);
      // console.log(oldVal);

    },
  },
};
</script>

<style scoped>
.img1 {
  width: 25px;
  float: left;
  margin: 20px 0 0 20px;
}
.img2 {
  width: 260px;
  border-radius: 130px;
  margin-top: 120px;
  margin-right: 34px;
}
.span1 {
  font-size: 20px;
}
.box3 {
  width: 100%;
  display: flex;
  margin-top: 80px;
  justify-content: space-between;
  align-items: center;
  /* margin:0 10px 0  10px; */
}
.img4 {
 font-size: 65px;
}
.img5 {
font-size: 40px;
margin-left: 15px;
}
.img6 {
font-size: 40px;
margin-right: 15px;
}
</style>