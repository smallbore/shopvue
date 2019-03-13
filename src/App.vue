<template>
  <div id="app" @mouseover="OperatinWebsite()">
    <!-- <div id="nav">
      <router-link to="/" v-wechat-title="$route.meta.title">Home</router-link> |
      <router-link to="/about" v-wechat-title="$route.meta.title">About</router-link>
    </div> -->
    <router-view v-wechat-title="$route.meta.title" />
  </div>
</template>

<script>
import { getCookie, delCookie } from "@/utils/lication"
  export default {
    data() {
      return {
        currentTime : new Date().getTime()
      }
    },
    methods:{
      OperatinWebsite() {
        const currentTime = this.currentTime;
        // window.console.log(currentTime,"currentTime");
        let lastTime = new Date().getTime();
        // window.console.log(lastTime,"lastTime");
        let timeOut = 60 * 60 * 1000 ; // 设置时间为10分钟
        if(lastTime - currentTime > timeOut){
          this.currentTime = new Date().getTime();
          const fullPath = this.$route.fullPath;
          // const query = this.$Base64.encode(fullPath);
          const query = fullPath;
          let loginName = getCookie("name")
          if(loginName){
            delCookie("name");
            this.$router.go(0);
          }
          
          // 刷新页面
          
          // 跳转登录页
          // this.$router.push({
          //   path : "/login",
          //   query: {
          //     type: query
          //   }
          // })
        }else{
          this.currentTime = new Date().getTime();
        }
      }
    }
  }
</script>
<style lang="less">
@import url(./assets/AmazeUI-2.4.2/assets/css/amazeui.css);
@import url(./assets/css/dlstyle.css);
</style>
