<template>
<div>
    <div class="login-boxtitle">
        <router-link to="/"><img alt="logo" src="../assets/images/logobig.png" /></router-link>
    </div>
    <div class="login-banner">
        <div class="login-main">
            <div class="login-banner-bg"><span></span><img src="../assets/images/big.jpg" /></div>
            <div class="login-box">
				<div class="am-tabs" id="doc-my-tabs">
                    <ul class="am-tabs-nav am-nav am-nav-tabs am-nav-justify">
                        <li v-bind:class="{'am-active' : am_active }" @click="AmActive(true)"><a href="javascript:;">邮箱注册</a></li>
                        <li v-bind:class="{'am-active' : !am_active }" @click="AmActive(false)"><a href="javascript:;">手机号注册</a></li>
                    </ul>

					<div class="am-tabs-bd">
						<div class="am-tab-panel" v-bind:class="{'am-active' : am_active }">
                            <div v-if="am_active">
                                <div style="color:#ff0000;font-size:12px;margin-bottom:-14px">{{errortext}}</div>
                                <form method="post">			
                                    <div class="user-email">
                                        <label for="email"><i class="am-icon-envelope-o"></i></label>
                                        <input type="email" name="" id="email" placeholder="请输入邮箱账号" v-model="regName">
                                    </div>										
                                    <div class="user-pass">
                                        <label for="password"><i class="am-icon-lock"></i></label>
                                        <input type="password" name="" id="password" placeholder="设置密码" v-model="regPass">
                                    </div>										
                                    <div class="user-pass">
                                        <label for="passwordRepeat"><i class="am-icon-lock"></i></label>
                                        <input type="password" name="" id="passwordRepeat" placeholder="确认密码" v-model="regPassword">
                                    </div>	
                    
                                </form>
                    
                                <div class="login-links">
                                    <label for="reader-me">
                                        <input id="reader-me" type="checkbox"> 点击表示您同意商城《服务协议》
                                    </label>
                                </div>
                                <div class="am-cf">
                                    <input type="submit" name="" value="注册" class="am-btn am-btn-primary am-btn-sm am-fl" @click="register">
                                </div>
                                <div class="am-cf" style="text-align:center;font-size:12px;">
                                    <router-link to="/login">已有账号去登录</router-link>
                                </div>
                            </div>
						</div>

						<div class="am-tab-panel" v-bind:class="{'am-active' : !am_active }">
                            <div v-if="!am_active">
                                <div style="color:#ff0000;font-size:12px;margin-bottom:-14px">{{errortext}}</div>
                                <form method="post">    
                                    <div class="user-phone">
                                        <label for="phone"><i class="am-icon-mobile-phone am-icon-md"></i></label>
                                        <input type="tel" name="" id="phone" placeholder="请输入手机号" v-model="regName">
                                    </div>																			
                                    <div class="verification" style="display:none;">
                                        <label for="code"><i class="am-icon-code-fork"></i></label>
                                        <input type="tel" name="" id="code" placeholder="请输入验证码">
                                        <a class="btn" href="javascript:void(0);" id="sendMobileCode">
                                            <span id="dyMobileButton">获取</span>
                                        </a>
                                    </div>
                                    <div class="user-pass">
                                        <label for="password"><i class="am-icon-lock"></i></label>
                                        <input type="password" name="" id="password" placeholder="设置密码" v-model="regPass">
                                    </div>										
                                    <div class="user-pass">
                                        <label for="passwordRepeat"><i class="am-icon-lock"></i></label>
                                        <input type="password" name="" id="passwordRepeat" placeholder="确认密码" v-model="regPassword">
                                    </div>	
                                </form>
                                <div class="login-links">
                                    <label for="reader-me">
                                        <input id="reader-me" type="checkbox"> 点击表示您同意商城《服务协议》
                                    </label>
                                </div>
                                <div class="am-cf">
                                    <input type="submit" name="" value="注册" class="am-btn am-btn-primary am-btn-sm am-fl" @click="register">
                                </div>
                                <div class="am-cf" style="text-align:center;font-size:12px;">
                                    <router-link to="/login">已有账号去登录</router-link>
                                </div>
                            </div>
							<hr>
						</div>
						
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
import tip from '@/utils/tip.js'

export default {
  name: 'register',
  data() {
    return {
        am_active: true,
        regName: '',
        regPass: '',
        regPassword: '',
        errortext: '',
    } 
  },
  components: {
    Foot
  },
  methods: {
    AmActive: function(option){
        this.am_active = option;
        this.regName = '';
        this.regPass = '';
        this.regPassword = '';
        this.errortext = '';
    },
    register:function(){
        let that = this;
        let regName = this.regName;
        let regPass = this.regPass;
        let regPassword = this.regPassword;
        window.console.log(regName)
        if(!regName){
            this.errortext = '用户账号不能为空！'
        }else if(!regPass){
            this.errortext = '用户密码不能为空！'
        }else if(!regPassword){
            this.errortext = '请再次输入密码！'
        }else if(regPass !== regPassword){
            this.errortext = '确认密码不一致！'
        }else{
            api.register({
                name: regName,
                password: regPass
            }).then( (res) =>{ 
              this.errortext = res.desc;
              if(!res.code){
                  tip.toast(res.desc,2000,function(){
                      that.$router.push('/login'); 
                  })
                // this.$router.push('/login'); 
              }
          }).catch( (res) =>{
              window.console.log('catch' , res)
              this.errortext = res.desc;
          })
        }
    }
  }
}
</script>
<style scoped lang="less">
img{
        width:auto;
    }
    .am-nav-tabs>li.am-active>a{
        border-bottom: 1px solid #0e90d2;
    }
    .vertical{
       vertical-align: middle;
    }
    .no_marg{
        margin:0;
    }
</style>

