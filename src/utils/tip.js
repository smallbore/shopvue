import Vue from 'vue'
import Loading from '@/components/loading'
import toast from '@/components/toast'
import CreateAPI from 'vue-create-api'
Vue.use(CreateAPI)

Vue.createAPI(Loading, true)
Vue.createAPI(toast, true)
/**
 * 提示与加载工具类
 */
export default class Tips {

    /**
    * 弹出加载提示
    */
    static loading(title = "加载中") {
        if (Tips.isLoading) {
            return;
        }
        Tips.isLoading = true;
        const tip = Loading.$create();
        tip.tipText(title);
        tip.show();
    }
    /**
     * 加载完毕
     */
    static loaded() {
        if (Tips.isLoading) {
            Tips.isLoading = false;
            const tip = Loading.$create()
            tip.hide()
        }
    }
    /**
     * toast,提示框
     * title:提示信息
     * time ：延时时间
     */
    static toast(title = "提示！",time = 2000,callback) {
        const tip = toast.$create();
        tip.tipText(title);
        // if (Tips.isLoading) {
        //     this.loaded();
        //     tip.toast(time);
        // }else{
        //     tip.toast(time);
        // }
        tip.toast(time);
        setTimeout(function(){
            callback()
        },time)
        
    }

}

/**
 * 静态变量，是否加载中
 */
Tips.isLoading = false;
