// pages/wxAuth/wxAuth.js
import { postUserInfo } from '../../api/common'
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    sendData: '',
    openId:''
  },
  onLoad: function (options) {
    this.data.openId = options.openId
  },
  bindGetUserInfo: function (e) {
    const pages = getCurrentPages()
    if (!e.detail || !e.detail.userInfo){
      wx.showToast({
        title: '登录失败',
        icon: 'none'
      })
    } else {
      this.data.sendData = e.detail.userInfo
      this.data.sendData.openId = this.data.openId
      postUserInfo(this.data.sendData).then(res => {
        let tabs = [
          '/pages/home/home',
          '/pages/message/message',
          '/pages/profile/profile',
        ]
        wx.setStorageSync('token', res.data.openId)
        wx.setStorageSync('userInfo', res.data)
        if (pages && pages.length) {
          let _page = '/'+ pages[pages.length - 2].route
          tabs.indexOf(_page) > -1 && wx.switchTab({ url: _page })
          tabs.indexOf(_page) == -1 && wx.navigateTo({ url: _page })
        } else {
          wx.switchTab({ url: '/pages/home/home' })
        }
      })
    }
  }
})