import checkStatus from './checkStatus.js'
import { config } from './config'

const baseUrl = config.baseUrl || "http://192.168.1.19:3000"
const request = (url, data, method) => {
  return new Promise((resolve, reject) =>{
    wx.showLoading({
      // title: '加载中...',
      mask: true
    })
    wx.request({
      url: baseUrl + url,
      method: method || 'get',
      timeout: 20000,
      data: data || '',
      complete: (res) => {
        if (res.errMsg !== "request:ok") reject(res)
        else {
          let data = res.data
          if (data && checkStatus(data.status)) resolve(data)
          else reject(res)
          // resolve(res)
        }
        wx.hideLoading()
      }
    })
  })
}

export default request