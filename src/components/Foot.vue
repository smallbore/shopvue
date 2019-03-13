<template>
    <div class="footer ">
        <div class="footer-hd ">
            <p>
                <a href="#">smallbore</a>
                <b>|</b>
                <router-link to="/">商城首页</router-link>
                <b>|</b>
                <a href="#">支付宝</a>
                <b>|</b>
                <a href="#">物流</a>
            </p>
        </div>
        <div class="footer-bd">
            <p>
                <a href="#">smallbore</a>
                <a href="#">合作伙伴</a>
                <a href="#">联系我们</a>
                <a href="#">网站地图</a>
                <em>© 2015-2025 smallbore.com 版权所有. </em>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'foot',
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .footer-bd{
        a{
            margin-right:5px;
        }
    }
</style>