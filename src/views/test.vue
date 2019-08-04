<template>
    <div>
        test
        <canvas id="canvas" width="600" height="600" style="border:1px solid red"
        @mousedown="canvasDown($event)"
        @mouseup="canvasUp($event)"
        @mousemove="canvasMove($event)"
        @touchstart="canvasDown($event)"
        @touchend="canvasUp($event)"
        @touchmove="canvasMove($event)"></canvas>
    </div>
</template>

<script>
export default {
    data(){
        return {
            test: 'tast',
            cxt: {},
        }
    },
    mounted(){
        let canvas = document.getElementById("canvas");
        this.cxt = canvas.getContext("2d");
        this.cxt.moveTo(100,100);
        this.cxt.lineTo(200,100);
        this.cxt.lineTo(200,200);
        this.cxt.lineTo(100,200);
        this.cxt.lineTo(100,100);
        this.cxt.strokeStyle = "#00c5de";
        this.cxt.stroke();

        var arr=[100,300,200,100,100];
        //开始绘制(圆点Y轴坐标)
        var yArr=[100,100,200,200,100];
        // for(let i=0,len=arr.length;i<len;i++){
        //     yArr.push(400-arr[i]*6);
        // }
        console.log(yArr)
        for(let j=0,len=yArr.length;j<len;j++){
            //画实心圆
            this.cxt.beginPath();
            this.cxt.fillStyle="#00c5de";
            this.cxt.arc(arr[j],yArr[j],5,0,Math.PI*2,true);
            this.cxt.fill();
            this.cxt.closePath();
            //绘制连接圆的折线
            this.cxt.beginPath();
            this.cxt.strokeStyle='#00c5de';
            this.cxt.lineWidth = 1;
            this.cxt.moveTo(arr[j],yArr[j]);
            this.cxt.lineTo(arr[j+1],yArr[j+1]);
            this.cxt.stroke();
        }
    },
    methods: {
        // "eslint:recommended"
        // 鼠标按下
        canvasDown (e) {
            
        },

        // 鼠标移动时绘制
        canvasMove (e) {
            console.log(e)

        },
        // 鼠标抬起
        canvasUp () {
            if (this.canDraw) {
                this.canvasMoveUse = false
            }
        },
        // 获取坐标信息
        getInfo () {
            return this.drawInfo
        },
        // 清空画布
        clean () {
            this.context.drawImage(this.img, 0, 0, this.width, this.height)
            this.drawInfo = []
        }
    }
}
</script>

<style lang="less" scoped>

</style>


