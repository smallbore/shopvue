<template>
<div>
    <div class="login-boxtitle">
        <router-link to="/"><img alt="logo" src="../assets/images/logobig.png" /></router-link>
    </div>
    <div class="login-banner">
        <div class="login-main">
            <div class="login-banner-bg"><span></span><img src="../assets/images/big.jpg" /></div>
            <div class="login-box">
                <h3 class="title">登录商城</h3>
                <div class="clear"></div>
                <div style="color:#ff0000;position:absolute;font-size:12px;">{{errortext}}</div>
                <div class="login-form">
                    <form>
                        <div class="user-name">
                            <label for="user"><i class="am-icon-user"></i></label>
                            <input type="text" v-model="name" name="" id="user" placeholder="邮箱/手机/用户名">
                        </div>
                        <div class="user-pass">
                                <label for="password"><i class="am-icon-lock"></i></label>
                                <input type="password" v-model="password" name="" id="password" placeholder="请输入密码">
                        </div>
                    </form>
                </div>
                <div class="login-links">
                    <label for="remember-me">
                        <input id="remember-me" type="checkbox" class="vertical no_marg">
                        <span class="vertical">记住密码</span>
                    </label>
                    <a href="javascript:;" class="am-fr">忘记密码?</a>
                    <!-- <a href="register.html" class="zcnext am-fr am-btn-default"></a> -->
                    <router-link to="/register" class="zcnext am-fr am-btn-default">注册</router-link>
                    <br />
                </div>
                <div class="am-cf">
                    <input type="submit" name="" @click="getLogin" value="登 录" class="am-btn am-btn-primary am-btn-sm">
                </div>
                <div class="partner">		
                    <h3>合作账号</h3>
                    <div class="am-btn-group">
                        <li><a href="javascript:;"><i class="am-icon-qq am-icon-sm"></i><span>QQ登录</span></a></li>
                        <li><a href="javascript:;"><i class="am-icon-weibo am-icon-sm"></i><span>微博登录</span> </a></li>
                        <li><a href="javascript:;"><i class="am-icon-weixin am-icon-sm"></i><span>微信登录</span> </a></li>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Foot />
</div>
</template>

<script>
// @ is an alias to /src
import Foot from '@/components/Foot.vue'
import api from '@/api/api.js'
import { setCookie } from '@/utils/lication'

export default {
  name: 'login',
  components: {
    Foot
  },
  data() {
      return {
          errortext: '',
          name: '',
          password: ''
      }
  },
  methods:{
      getLogin() {
          api.getLogin({
              name: this.name,
              password: this.password
          }).then( (res) =>{ 
              this.errortext = res.desc;
              if(!res.code){
                setCookie('name',res.data,1)
                this.$router.push('/'); 
              }
          }).catch( (res) =>{
              window.console.log('catch' , res)
              this.errortext = res.desc;
          })
          
      }
  }
}
</script>
<style scoped lang="less">
    img{
        width:auto;
    }
    .vertical{
       vertical-align: middle;
    }
    .no_marg{
        margin:0;
    }
</style>

