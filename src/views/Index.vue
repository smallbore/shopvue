<template>
  <div>
    <!-- top -->
		
    <Hmtop/>
    <!--轮播 -->
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" style="background:#55be59;">
            <img src="../assets/images/ad1.jpg" alt="">
          </div>
          <div class="swiper-slide" style="background:#f44661;">
            <img src="../assets/images/ad2.jpg" alt="">
          </div>
          <div class="swiper-slide" style="background:#0f1024;">
            <img src="../assets/images/ad3.jpg" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="shopNav">
      <div class="slideall">
        <div class="long-title">
          <span class="all-goods">全部分类{{doneTodes}}</span>
        </div>
        <div class="nav-cont">
          <ul>
            <li class="index">
              <a href="#">首页</a>
            </li>
            <li class="qc">
              <a href="#">闪购</a>
            </li>
            <li class="qc">
              <a href="#">限时抢</a>
            </li>
            <li class="qc">
              <a href="#">团购</a>
            </li>
            <li class="qc last">
              <a href="#">大包装</a>
            </li>
          </ul>
          <div class="nav-extra">
            <i class="am-icon-user-secret am-icon-md nav-user"></i>
            <b></b>我的福利
            <i class="am-icon-angle-right" style="padding-left: 10px;"></i>
          </div>
        </div>
        <!--侧边导航 -->
        <div id="nav" class="navfull">
          <div class="area clearfix">
            <div class="category-content" id="guide_2">
              <div class="category">
                <ul class="category-list" id="js_climit_li" >
                  <li class="appliance js_toggle relative first"
                  v-for="(item, index) in navlist"
                  v-bind:key="index"
                  :class="{ 'hover' : item.liactive}"
                  @mouseover="LiHover(index)" 
                  @mouseleave="LiLeave(index)">
                    <div class="category-info">
                      <h3 class="category-name b-category-name">
                        <i>
                          <img :src="item.icon">
                        </i>
                        <a class="ml-22" :title="item.navtitle" href="javascript:;">{{item.navtitle}}</a>
                      </h3>
                      <em>&gt;</em>
                    </div>
                    <div class="menu-item menu-in top" v-if="item.liactive">
                      <div class="area-in">
                        <div class="area-bg">
                          <div class="menu-srot">
                            <div class="sort-side">
                              <dl class="dl-sort" 
                              v-for="(option, index) in item.navchild"
                              v-bind:key="index">
                                <dt>
                                  <span :title="option.typename">{{option.typename}}</span>
                                </dt>
                                <dd  v-for="(list, index) in option.navlist"
                              v-bind:key="index">
                                  <a :title="list.listname" href="#">
                                    <span>{{list.listname}}</span>
                                  </a>
                                </dd>
                              </dl>
                            </div>
                            <div class="brand-side">
                              <dl class="dl-sort" v-for="(store, index) in item.store"
                              v-bind:key="index">
                                <dt>
                                  <span>{{store.typename}}</span>
                                </dt>
                                <dd  v-for="(storelist, index) in store.navlist"
                              v-bind:key="index">
                                  <a rel="nofollow" :title="storelist.listname" target="_blank" href="#">
                                    <span class="red">{{storelist.listname}}</span>
                                  </a>
                                </dd>
                                
                              </dl>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <b class="arrow"></b>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
      <!--走马灯 -->

			<div class="marqueen">
				<span class="marqueen-title">商城头条</span>
				<div class="demo">

					<ul>
						<li class="title-first"><a target="_blank" href="#">
							<img src="../assets/images/TJ2.jpg" />
							<span>[特惠]</span>商城爆品1分秒								
						</a></li>
						<li class="title-first"><a target="_blank" href="#">
							<span>[公告]</span>商城与广州市签署战略合作协议
									<img src="../assets/images/TJ.jpg" />
									<p>XXXXXXXXXXXXXXXXXX</p>
							</a></li>
							
				<div class="mod-vip">
					<div class="m-baseinfo">
						<a href="../person/index.html">
							<img src="../assets/images/getAvatar.do.jpg" />
						</a>
						<em>
							Hi,<span class="s-name">小叮当</span>
							<a href="#"><p>点击更多优惠活动</p></a>									
						</em>
					</div>
					<div class="member-logout">
						<a class="am-btn-warning btn" href="login.html">登录</a>
						<a class="am-btn-warning btn" href="register.html">注册</a>
					</div>
					<div class="member-login">
						<a href="#"><strong>0</strong>待收货</a>
						<a href="#"><strong>0</strong>待发货</a>
						<a href="#"><strong>0</strong>待付款</a>
						<a href="#"><strong>0</strong>待评价</a>
					</div>
					<div class="clear"></div>	
				</div>																	    
							
						<li><a target="_blank" href="#"><span>[特惠]</span>洋河年末大促，低至两件五折</a></li>
						<li><a target="_blank" href="#"><span>[公告]</span>华北、华中部分地区配送延迟</a></li>
						<li><a target="_blank" href="#"><span>[特惠]</span>家电狂欢千亿礼券 买1送1！</a></li>
						
					</ul>
										<div class="advTip"><img src="../assets/images/advTip.jpg" /></div>
				</div>
			</div>
			<div class="clear"></div>
    </div>
    <div class="shopMainbg">
        <div class="shopMain" id="shopmain">
            <!--今日推荐 -->

						<div class="am-g am-g-fixed recommendation">
							<div class="clock am-u-sm-3">
								<img src="../assets/images/2016.png" />
								<p>今日<br>推荐</p>
							</div>
							<div class="am-u-sm-4 am-u-lg-3">
								<div class="info ">
									<h3>真的有鱼</h3>
									<h4>开年福利篇</h4>
								</div>
								<div class="recommendationMain one">
									<a href="introduction.html"><img src="../assets/images/tj.png" /></a>
								</div>
							</div>						
							<div class="am-u-sm-4 am-u-lg-3 ">
								<div class="info ">
									<h3>囤货过冬</h3>
									<h4>让爱早回家</h4>
								</div>
								<div class="recommendationMain two">
									<img src="../assets/images/tj1.png" />
								</div>
							</div>
							<div class="am-u-sm-4 am-u-lg-3">
								<div class="info">
									<h3>浪漫情人节</h3>
									<h4>甜甜蜜蜜</h4>
								</div>
								<div class="recommendationMain three">
									<img src="../assets/images/tj2.png" />
								</div>
							</div>

						</div>
						<div class="clear"></div>
            <!--热门活动 -->

						<div class="am-container activity ">
							<div class="shopTitle ">
								<h4>活动</h4>
								<h3>每期活动 优惠享不停 </h3>
								<span class="more">
	                              <a href="#">全部活动<i class="am-icon-angle-right" style="padding-left:10px ;" ></i></a>
	                        </span>
							</div>
						  <div class="am-g am-g-fixed">
							<div class="am-u-sm-3">
								<div class="icon-sale one"></div>	
									<h4>秒杀</h4>							
								<div class="activityMain ">
									<img src="../assets/images/activity1.jpg" />
								</div>
								<div class="info">
									<h3>春节送礼优选</h3>
								</div>														
							</div>
							
							<div class="am-u-sm-3 ">
							  <div class="icon-sale two"></div>	
								<h4>特惠</h4>
								<div class="activityMain">
									<img src="../assets/images/activity2.jpg" />
								</div>
								<div class="info">
									<h3>春节送礼优选</h3>								
								</div>							
							</div>						
							
							<div class="am-u-sm-3 ">
								<div class="icon-sale three"></div>
								<h4>团购</h4>
								<div class="activityMain">
									<img src="../assets/images/activity3.jpg" />
								</div>
								<div class="info ">
									<h3>春节送礼优选</h3>
								</div>							
							</div>						

							<div class="am-u-sm-3 last ">
								<div class="icon-sale"></div>
								<h4>超值</h4>
								<div class="activityMain ">
									<img src="../assets/images/activity.jpg" />
								</div>
								<div class="info">
									<h3>春节送礼优选</h3>
								</div>													
							</div>

						  </div>
	                   </div>
						<div class="clear"></div>

            <div id="f1">
						<!--甜点-->
						
							<div class="am-container ">
								<div class="shopTitle ">
									<h4>甜品</h4>
									<h3>每一道甜品都有一个故事</h3>
									<div class="today-brands ">
										<a href="#">桂花糕</a>
										<a href="#">奶皮酥</a>
										<a href="#">栗子糕 </a>
										<a href="#">马卡龙</a>
										<a href="#">铜锣烧</a>
										<a href="#">豌豆黄</a>
									</div>
									<span class="more">
		                    	<a href="#">更多美味<i class="am-icon-angle-right" style="padding-left:10px ;" ></i></a>
		              </span>
								</div>
							</div>
							
							<div class="am-g am-g-fixed floodFour">
								<div class="am-u-sm-5 am-u-md-4 text-one list">
									<div class="word">
										<a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
										<a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
										<a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>	
										<a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
										<a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
										<a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>									
									</div>
									<a href="#">
										<div class="outer-con">
											<div class="title">
											开抢啦！
											</div>
											<div class="sub-title">
												零食大礼包
											</div>									
										</div>
		                                  <img src="../assets/images/act1.png" />								
									</a>
									<div class="triangle-topright"></div>						
								</div>
								
									<div class="am-u-sm-7 am-u-md-4 text-two sug">
										<div class="outer-con">
											<div class="title ">
												雪之恋和风大福
											</div>									
											<div class="sub-title ">
												¥13.8
											</div>
											<i class="am-icon-shopping-basket am-icon-md  seprate"></i>
										</div>
										<a href="#"><img src="../assets/images/2.jpg" /></a>
									</div>

									<div class="am-u-sm-7 am-u-md-4 text-two">
										<div class="outer-con">
											<div class="title">
												雪之恋和风大福
											</div>
											<div class="sub-title">
												¥13.8
											</div>
											<i class="am-icon-shopping-basket am-icon-md  seprate"></i>
										</div>
										<a href="#"><img src="../assets/images/1.jpg" /></a>
									</div>


								<div class="am-u-sm-3 am-u-md-2 text-three big">
									<div class="outer-con">
										<div class="title">
											小优布丁
										</div>
										<div class="sub-title">
											¥4.8
										</div>
										<i class="am-icon-shopping-basket am-icon-md  seprate"></i>
									</div>
									<a href="#"><img src="../assets/images/5.jpg" /></a>
								</div>

								<div class="am-u-sm-3 am-u-md-2 text-three sug">
									<div class="outer-con">
										<div class="title">
											小优布丁
										</div>
										<div class="sub-title">
											¥4.8
										</div>
										<i class="am-icon-shopping-basket am-icon-md  seprate"></i>
									</div>
									<a href="#"><img src="../assets/images/3.jpg" /></a>
								</div>

								<div class="am-u-sm-3 am-u-md-2 text-three ">
									<div class="outer-con">
										<div class="title">
											小优布丁
										</div>
										<div class="sub-title">
											¥4.8
										</div>
										<i class="am-icon-shopping-basket am-icon-md  seprate"></i>
									</div>
									<a href="#"><img src="../assets/images/4.jpg" /></a>
								</div>

								<div class="am-u-sm-3 am-u-md-2 text-three last big ">
									<div class="outer-con">
										<div class="title">
											小优布丁
										</div>
										<div class="sub-title">
											¥4.8
										</div>
										<i class="am-icon-shopping-basket am-icon-md  seprate"></i>
									</div>
									<a href="#"><img src="../assets/images/5.jpg" /></a>
								</div>

							</div>
            <div class="clear"></div>  
          </div>

          <div id="f2">
						<!--坚果-->
							<div class="am-container ">
								<div class="shopTitle ">
									<h4>坚果</h4>
									<h3>酥酥脆脆，回味无穷</h3>
									<div class="today-brands">
										<a href="#">腰果</a>
										<a href="#">松子</a>
										<a href="#">夏威夷果 </a>
										<a href="#">碧根果</a>
										<a href="#">开心果</a>
										<a href="#">核桃仁</a>
									</div>
									<span class="more">
		                    		<a href="#">更多美味<i class="am-icon-angle-right" style="padding-left:10px ;"></i></a>
		                        </span>
								</div>
							</div>
							<div class="am-g am-g-fixed floodThree">
							<div class="am-u-sm-4 text-four list">
								<div class="word">
									<a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
									<a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
									<a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>	
									<a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
									<a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
									<a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>									
								</div>
								<a href="#">
									<img src="../assets/images/act1.png" />
									<div class="outer-con">
										<div class="title">
											雪之恋和风大福
										</div>									
									</div>
								</a>
								<div class="triangle-topright"></div>	
							</div>
							<div class="am-u-sm-4 text-four">
								<a href="#">
									<img src="../assets/images/6.jpg" />
									<div class="outer-con">
										<div class="title">
											雪之恋和风大福
										</div>								
										<div class="sub-title">
											¥13.8
										</div>
										<i class="am-icon-shopping-basket am-icon-md  seprate"></i>
									</div>
								</a>
							</div>
							<div class="am-u-sm-4 text-four sug">
								<a href="#">
									<img src="../assets/images/7.jpg" />
									<div class="outer-con">
										<div class="title">
											雪之恋和风大福
										</div>
										<div class="sub-title">
											¥13.8
										</div>
										<i class="am-icon-shopping-basket am-icon-md  seprate"></i>
									</div>
								</a>
							</div>
							
							<div class="am-u-sm-6 am-u-md-3 text-five big ">
								<a href="#">
									<img src="../assets/images/10.jpg" />
									<div class="outer-con ">
										<div class="title ">
											雪之恋和风大福
										</div>		
										<div class="sub-title ">
											¥13.8
										</div>
										<i class="am-icon-shopping-basket am-icon-md  seprate"></i>
									</div>
								</a>
							</div>						
							<div class="am-u-sm-6 am-u-md-3 text-five ">
								<a href="#">
									<img src="../assets/images/8.jpg" />
									<div class="outer-con ">
										<div class="title">
											雪之恋和风大福
										</div>	
										<div class="sub-title">
											¥13.8
										</div>
										<i class="am-icon-shopping-basket am-icon-md  seprate"></i>
									</div>
								</a>
							</div>						
							<div class="am-u-sm-6 am-u-md-3 text-five sug">
								<a href="#">
									<img src="../assets/images/9.jpg" />
									<div class="outer-con">
										<div class="title">
											雪之恋和风大福
										</div>
										<div class="sub-title">
											¥13.8
										</div>
										<i class="am-icon-shopping-basket am-icon-md  seprate"></i>
									</div>
								</a>
							</div>
							<div class="am-u-sm-6 am-u-md-3 text-five big">
								<a href="#">
									<img src="../assets/images/10.jpg" />
									<div class="outer-con">
										<div class="title">
											雪之恋和风大福
										</div>			
										<div class="sub-title">
											¥13.8
										</div>
										<i class="am-icon-shopping-basket am-icon-md  seprate"></i>
									</div>
								</a>
							</div>
							
							</div>

							<div class="clear"></div>
						</div>
	                 
        </div>
    </div>
		<!-- 侧边菜单 -->
    <SideBar/>
    <!-- footer -->
    <Foot/>
  </div>
</template>

<script>
// @ is an alias to /src
import Foot from "@/components/Foot.vue";
import Hmtop from "@/components/Hmtop.vue";
import SideBar from "@/components/SideBar.vue";
import api from '@/api/api.js';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default {
  name: "index",
  components: {
    Foot,
		Hmtop,
		SideBar
  },
  data() {
      return {
          liactive:false,
          show: false,
					navlist: '',
					store: this.$store.state.count
      }
	},
	computed: {
		doneTodes () {
			return this.$store.getters.doneTodes
		}
	},
  methods: {
      LiHover:function(index){
        let navlist = this.navlist;
          for(let i=0; i<navlist.length; i++){
            if(i == index){
              navlist[i].liactive = true;
            }
          }
        this.navlist = navlist
      },
      LiLeave:function(index){
          let navlist = this.navlist;
          for(let i=0; i<navlist.length; i++){
            if(i == index){
              navlist[i].liactive = false;
            }
          }
        this.navlist = navlist
      },
      GetNavlist: function(){
        return api.getNavlist().then( (res) => {
          let data = res.data;
          for(let i=0; i<data.length; i++){
            data[i].liactive = false;
          }
          this.navlist = res.data
        })
			},
			
  },
  created() {
		this.GetNavlist();
	},
	mounted(){
		
    new Swiper('.swiper-container', {
      autoplay:{
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      speed:1000,
      loop:true,
      pagination: {
        el: '.swiper-pagination',
      },
		})
  },
};
</script>

<style scoped src="../assets/AmazeUI-2.4.2/assets/css/amazeui.css"></style>
<style scoped src="../assets/basic/css/demo.css"></style>
<style scoped src="../assets/css/hmstyle.css"></style>
<style scoped src="../assets/css/skin.css"></style>
<style scoped lang="less">
.category-content .menu-in{
    display:block;
}
.banner{
  .swiper-slide{
    position:relative;
    height: 450px;
    img{
      width: 954px;
      left: 50%;
      position: absolute;
      margin-left: -438px;
    }
  }
}
.shopNav{
	position:relative;
}
</style>

