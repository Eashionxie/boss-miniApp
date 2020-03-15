import { config } from './config'

const ws = {
  onConnect: wx.connectSocket({
    url: config.wsUrl,
    header:{
      'content-type': 'application/json'
    },
    protocols: ['protocol1'],
    success: () => {
      wx.onSocketOpen()
    },
    fail: (err) => {
      console.log('err: ', err)
    }
  })
}