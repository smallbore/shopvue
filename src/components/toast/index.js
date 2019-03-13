import Toast from './toast.vue'

// 注册Toast
Toast.install = function (Vue) {
    Vue.component(Toast.name, Toast)
}

export default Toast