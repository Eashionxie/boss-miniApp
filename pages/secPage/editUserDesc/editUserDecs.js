// pages/secPage/editUserDesc/editUserDecs.js
import { postUserInfo } from '../../../api/common'
Page({
  data: {
    lengthNow: 0,
    userInfo: '',
    isIphone: false
  },
  onLoad: function (options) {
    let system = getApp().globalData.systemInfo
    if (system.model.indexOf('iPhone X') > -1 || system.model.indexOf('iPhone 11') > -1) {
      this.setData({
        isIphone: true,
      })
    }
  },
  onShow: function () {
    this.setData({
      userInfo: wx.getStorageSync('userInfo')
    })
  },
  textInput(event) {
    this.data.userInfo.discribe = event.detail.value
    this.setData({
      lengthNow: event.detail.value.length
    })
  },
  commit() {
    postUserInfo(this.data.userInfo).then(res => {
      wx.setStorageSync('userInfo', res.data)
      wx.navigateTo({ url: '/pages/secPage/onlineResume/onlineResume' });
    })
  }
})