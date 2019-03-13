// import {commonParams} from './config'
import { fetch, post } from '@/utils/axios.js'

// url
const URL = 'http://smallbore.com/api/'

// 登录
export function getLogin(option) {
    const url = URL + 'login'
    const data = Object.assign({}, {
        name: option.name,
        password: option.password
    })
    return fetch(url, data)
}
// register
export function register(option) {
    const url = URL + 'addEegister'
    const data = Object.assign({}, {
        name: option.name,
        password: option.password
    })
    return post(url, data)
}

// navlist
export function getNavlist() {
    const url = URL + 'navfull'
    const data = Object.assign({}, {
        
    })
    return fetch(url, data)
}

export default{
    getLogin,
    register,
    getNavlist
}