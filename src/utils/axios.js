import axios from 'axios'
import tip from '@/utils/tip'
import { getCookie } from '@/utils/lication'
import Router from 'vue-router'

// axios 配置
axios.defaults.timeout = 8000;
// axios.defaults.baseURL = 'http://smallbore.com/api/'; //这是调用数据接口

// http request 拦截器，通过这个，我们就可以把Cookie传到后台
axios.interceptors.request.use(
    config => {
        const token = getCookie('name'); //获取Cookie
        config.data = JSON.stringify(config.data);
        config.headers = {
            'Content-Type': 'application/x-www-form-urlencoded' //设置跨域头部
        };
        if (token) {
            config.params = { 'token': token } //后台接收的参数，后面我们将说明后台如何接收
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);


// http response 拦截器
axios.interceptors.response.use(
    response => {
        // window.console.log(response.data.code);
        //response.data.errCode是我接口返回的值，如果值为2，说明Cookie丢失，然后跳转到登录页，这里根据大家自己的情况来设定
        if (response.data.code == 2) {
            Router.push({
                path: '/login',
                query: { redirect: Router.currentRoute.fullPath } //从哪个页面跳转
            })
        }
        return response;
    },
    error => {
        return Promise.reject(error.response.data)
    });

export default axios;

/**
 * fetch 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */

export function fetch(url, params = {}) {
    return new Promise((resolve, reject) => {
        tip.loading()
        axios.get(url, {
            params: params
        }).then(response => {
            resolve(response.data);
            tip.loaded()
        }).catch(err => {
            reject(err)
            tip.loaded()
        })
    })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        tip.loading()
        axios.post(url, data)
            .then(response => {
                resolve(response.data);
                tip.loaded()
            }, err => {
                reject(err);
                tip.loaded()
            })
    })
}

/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
    })
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
    })
}