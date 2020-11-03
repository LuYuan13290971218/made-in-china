<template>
  <div class="box">
    <van-nav-bar title="热榜排行歌单" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model="id" @click="click(id)">
      <van-tab v-for="(item ,index) in suoYouList" :title="item.name " :key="index" :name="item.id">
        <div
          v-for="(a , b) in xiangQingList.slice(0, 10)"
          :data="a"
          :key="b"
          class="box2"
          @click="boFang(a.id)"
        >
          <img :src="a.al.picUrl" alt class="img1" />
          <div class="text1">{{a.name}}</div>
          {{a.id}}
          <!-- <div>{{a.al.name}}</div> -->
          <div class="text2">{{a.ar[0].name}}</div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import geQuList from "../Home/geQuList";
import aplayer from "vue-aplayer";
export default {
  components: { geQuList, aplayer },
  data() {
    return {
      suoYouList: [],
      id: "1",
      xiangQingList: [],
      boFangList: [],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/home",
      });
    },
    suoYou() {
      this.api.paiHangData({}).then((data) => {
        //   console.log(data.data.list);
        this.suoYouList = data.data.list;
      });
    },
    chuanZhi() {},

    click(value) {
      // console.log(value);
      this.api
        .huoQugedanData("/playlist/detail?id=" + value, {})
        .then((data) => {
          //  console.log(data);
          this.xiangQingList = data.data.playlist.tracks;
          //  获取歌单id
          this.$store.commit("userId", value);
        });
    },
// 获取歌曲详情
    qingQiu() {
      this.api
        .huoQugedanData("/playlist/detail?id=" + this.$store.state.musicid, {})
        .then((data) => {
          //  console.log(data);
          this.xiangQingList = data.data.playlist.tracks;
        });
    },
    boFang(value) {
      //  console.log(value);
      this.api.obtainMusicData("/song/url?id=" + value, {}).then((data) => {
        //  console.log(data);
        this.boFangList = data.data.data;
      });
      //  this.$router.push({
      //  path:'/bofang',
      //  query:{
      //    id:value
      //  }
      this.$store.commit("setUid", value);
      //  })
    },
  },
  mounted() {
    this.suoYou(), this.chuanZhi(), this.qingQiu();
  },
  destroyed() {},
};
</script>

<style scoped>
.box2 {
  width: 300px;
  height: 100px;
  /* border: 1px solid red; */
  margin-left: 20px;
  margin-top: 10px;
}
.img1 {
  width: 80px;
  float: left;
}
.text1 {
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 35px;
}
.text2 {
  font-size: 13px;
  /* margin-top: 35px; */
  margin-left: 15px;
}
.box {
  padding-bottom: 50px;
}
</style>

