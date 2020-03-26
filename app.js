import authPromission from './utils/promission'
App({
  // 全局数据
  globalData:{
    userInfo: wx.getStorageSync('userInfo'),
    systemInfo: wx.getSystemInfoSync(),
    expectNew: {}
  },
  onLaunch: () => {
    authPromission()
  }
})
