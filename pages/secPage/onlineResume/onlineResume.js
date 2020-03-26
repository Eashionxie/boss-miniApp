// pages/secPage/onlineResume/onlineResume.js
import { postUserInfo } from '../../../api/common.js'

Page({
  data: {
    userInfo: '',
    cardActive: false,
    descActive: false,
    postStatus: [
      {
        value: '离职-随时到岗',
        key: '0'
      },
      {
        value: '在职-暂不考虑',
        key: '1S'
      },
      {
        value: '在职-月内到岗',
        key: '2'
      }
    ]
  },
  onLoad: function (options) {
    console.log('userInfo: ', this.data.userInfo)
  },
  onReady: function () {

  },
  onShow: function () {
    this.setData({
      userInfo: wx.getStorageSync('userInfo')
    })
  },
  onHide: function () {

  },
  baseInfoTouch(){
    this.setData({
      cardActive: true
    })
  },
  baseInfoUntouch() {
    this.setData({
      cardActive: false
    })
  },
  fullBaseInfo() {
    wx.navigateTo({ url: '/pages/secPage/userBaseInfo/userBaseInfo' })
  },
  descTouch() {
    this.setData({
      descActive: true
    })
  },
  descUntouch() {
    this.setData({
      descActive: false
    })
  },
  fullDesc() {
    wx.navigateTo({ url: '/pages/secPage/editUserDesc/editUserDecs' })
  },
  chooseJonStatus(event) {
    this.data.userInfo.userPostStatus = event.detail.value
    postUserInfo(this.data.userInfo).then(res => {
      wx.setStorageSync('userInfo', res.data)
      getApp().globalData.userInfo = res.data
      this.setData({
        userInfo: this.data.userInfo
      })
    })
  },
  toExpectPage(event) {
    let params = event.currentTarget.dataset
    console.log('params: ', params)
    wx.navigateTo({ url: `/pages/secPage/expectPage/expectPage?expectItem=${JSON.stringify(params.expectitem)}&index=${params.index}` })
  }
})