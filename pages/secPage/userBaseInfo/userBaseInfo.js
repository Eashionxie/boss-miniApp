// pages/secPage/userBaseInfo/userBaseInfo.js
import dateFormat from '../../../utils/dateformat'
import uploadImg from '../../../utils/imageUpload'
import { config } from '../../../utils/config'
import { postUserInfo } from '../../../api/common'
Page({
  data: {
    isIphone: false,
    userInfo: '',
    DateNow: '',
    eduLeves: [
      {
        value: '初中',
        key: '初中'
      },
      {
        value: '中专/中技',
        key: '中专/中技'
      },
      {
        value: '大专',
        key: '大专'
      },
      {
        value: '本科',
        key: '本科'
      },
      {
        value: '硕士',
        key: '硕士'
      }
    ]
  },
  onLoad: function (options) {
    let system = getApp().globalData.systemInfo
    if (system.model.indexOf('iPhone X') > -1 || system.model.indexOf('iPhone 11') > -1) {
      this.setData({
        isIphone: true,
      })
    }
    this.setData({
      DateNow: dateFormat(new Date().getTime(), 'yyyy-MM-dd')
    })
  },
  onReady: function () {

  },
  onShow: function () {
    let _user = wx.getStorageSync('userInfo')
    !_user.gender && (_user.gender = 1)
    this.setData({
      userInfo: _user
    })
  },
  chooseHeadImage() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (chooseRes) {
        console.log('chooseRes: ', chooseRes)
        wx.navigateTo({ url:`/pages/secPage/imageCut/imageCut?filePath=${chooseRes.tempFilePaths[0]}` })
      },
      fail () {
        wx.showToast({
          title: '获取相册失败',
          icon: 'none'
        })
      }
    })
  },
  changeGender(event) {
    this.data.userInfo.gender = event.currentTarget.dataset.gender
    this.setData({
      userInfo: this.data.userInfo
    })
  },
  chooseEduleve(event) {
    this.data.userInfo.eduLeve = this.data.eduLeves[event.detail.value].value
    this.setData({
      userInfo: this.data.userInfo
    })
  },
  nameInput(event) {
    this.data.userInfo.nickName = event.detail.value
    this.setData({
      userInfo: this.data.userInfo
    })
  },
  chooseBirthday(event) {
    this.data.userInfo.birthday = new Date(event.detail.value).getTime()
    this.setData({
      userInfo: this.data.userInfo
    })
  },
  chooseWorkDate(event) {
    this.data.userInfo.workDate = new Date(event.detail.value).getTime()
    this.setData({
      userInfo: this.data.userInfo
    })
  },
  telInput(event) {
    this.data.userInfo.tel = event.detail.value
    this.setData({
      userInfo: this.data.userInfo
    })
  },
  commit() {
    if (!this.data.userInfo.nickName) return wx.showToast({ title: '请输入姓名', icon: 'none', duration: 1500 })
    if (!this.data.userInfo.birthday) return wx.showToast({ title: '请选择出生年月', icon: 'none', duration: 1500 })
    if (!this.data.userInfo.workDate) return wx.showToast({ title: '请选择参加工作时间', icon: 'none', duration: 1500 })
    postUserInfo(this.data.userInfo).then(res => {
      wx.setStorageSync('userInfo', res.data);
      wx.navigateTo({ url: '/pages/secPage/onlineResume/onlineResume' });
    })
  }
})