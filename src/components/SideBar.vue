<template>
    <!-- 菜单 -->
    <div class="tip">
        <div id="sidebar">
            <div id="wrap">
                <div id="prof" class="item smallhover">
                    <a href="#">
                        <span class="setting"></span>
                    </a>
                    <div class="ibar_login_box status_login">
                        <div class="avatar_box">
                            <p class="avatar_imgbox"><img src="../assets/images/no-img_mid_.jpg" /></p>
                            <ul class="user_info">
                                <li>用户名：sl1903</li>
                                <li>级&nbsp;别：普通会员</li>
                            </ul>
                        </div>
                        <div class="login_btnbox">
                            <a href="#" class="login_order">我的订单</a>
                            <a href="#" class="login_favorite">我的收藏</a>
                        </div>
                        <i class="icon_arrow_white"></i>
                    </div>

                </div>
                <div id="shopCart" class="item smallhover">
                    <a href="#">
                        <span class="message"></span>
                    </a>
                    <p>
                        购物车
                    </p>
                    <p class="cart_num">0</p>
                </div>
                <div id="asset" class="item smallhover">
                    <a href="#">
                        <span class="view"></span>
                    </a>
                    <div class="mp_tooltip">
                        我的资产
                        <i class="icon_arrow_right_black"></i>
                    </div>
                </div>

                <div id="foot" class="item smallhover">
                    <a href="#">
                        <span class="zuji"></span>
                    </a>
                    <div class="mp_tooltip">
                        我的足迹
                        <i class="icon_arrow_right_black"></i>
                    </div>
                </div>

                <div id="brand" class="item smallhover">
                    <a href="#">
                        <span class="wdsc"><img src="../assets/images/wdsc.png" /></span>
                    </a>
                    <div class="mp_tooltip">
                        我的收藏
                        <i class="icon_arrow_right_black "></i>
                    </div>
                </div>

                <div id="broadcast" class="item smallhover">
                    <a href="#">
                        <span class="chongzhi"><img src="../assets/images/chongzhi.png" /></span>
                    </a>
                    <div class="mp_tooltip">
                        我要充值
                        <i class="icon_arrow_right_black"></i>
                    </div>
                </div>

                <div class="quick_toggle">
                    <li class="qtitem smallhover" id="kefuzhongxing">
                        <a href="#"><span class="kfzx"></span></a>
                        <div class="mp_tooltip ">客服中心<i class="icon_arrow_right_black "></i></div>
                    </li>
                    <!--二维码 -->
                    <li class="qtitem smallhover" id="qrcode">
                        <a href="#none "><span class="mpbtn_qrcode "></span></a>
                        <div class="mp_qrcode " style="display:none; "><img src="../assets/images/weixin_code_145.png" /><i class="icon_arrow_white "></i></div>
                    </li>
                    <li class="qtitem smallhover">
                        <a href="#top" class="return_top"><span class="top"></span></a>
                    </li>
                </div>

                <!--回到顶部 -->
                <div id="quick_links_pop" class="quick_links_pop hide"></div>

            </div>

        </div>
    
    </div>
</template>
<script>
export default {
    methods:{
        sidebarHover: function(item){
            let idDom = document.getElementById(item).lastElementChild;
            if(item == 'prof' || item == 'qrcode'){
                idDom.style.display = 'block';
            }else{
                idDom.style.cssText = 'visibility:visible;left:-92px;transition:all 0.3s;';
            }
            
        },
        sidebarLeave: function(item){
            let idDom = document.getElementById(item).lastElementChild;
            if(item == 'prof' || item == 'qrcode'){
                idDom.style.display = 'none';
            }else{
                idDom.style.cssText = 'visibility:hidden;left:-121px';
            }
        }
    },
    mounted(){
        let that = this;
		let idDom = document.getElementsByClassName('smallhover');
		// window.console.log(idDom)
		for(let i=0; i<idDom.length; i++){
			idDom[i].onmouseover = function(){
				that.sidebarHover(this.id)
			}
			idDom[i].onmouseleave = function(){
				that.sidebarLeave(this.id)
			}
		}
  },
}
</script>
<style scoped src="../assets/basic/css/demo.css"></style>