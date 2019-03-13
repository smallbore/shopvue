import utils from '@/utils/utils'

export const commonParams = {
    format: 'jsonp',
    times: utils.getCurrentTime()
}

export const options = {
    param: 'Callback'
}

export const ERR_OK = 0