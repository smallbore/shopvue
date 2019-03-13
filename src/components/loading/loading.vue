<template>
    <div class="load_box" v-if="isVisible">
        <div class="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <span class="tiptext" v-html="text"></span>
    </div>
</template>
<script>
export default {
    name: 'loading',
    data(){
        return {
            isVisible:false,
            text:''
        }
    },
    methods: {
        tipText(tit) {
            this.text = tit;
        },
        show() {
            this.isVisible = true
        },
        hide() {
            this.isVisible = false
        }

    },
};
</script>
<style scoped lang="less">
.tiptext{
    position:absolute;
    top:60%;
    left:50%;
    transform: translate(-50%,-50%);
    color:#fff;
    
}
.load_box{
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    background:rgba(11,11,11,0.3);
    z-index: 11111;
}
.loading{
    width: 80px;
    height: 40px;
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    margin: auto;
}
.loading span{
    display: inline-block;
    width: 8px;
    height: 100%;
    margin:0 4px;
    border-radius: 4px;
    background: white;
    -webkit-animation: load 1s ease infinite;
}
@-webkit-keyframes load{
    0%,100%{
        height: 30px;
        background: gray;
    }
    50%{
        height: 70px;
        margin: -15px 4px;
        background: white;
    }
}
.loading span:nth-child(2){
    -webkit-animation-delay:0.2s;
}
.loading span:nth-child(3){
    -webkit-animation-delay:0.4s;
}
.loading span:nth-child(4){
    -webkit-animation-delay:0.6s;
}
.loading span:nth-child(5){
    -webkit-animation-delay:0.8s;
}
</style>

