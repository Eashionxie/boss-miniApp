// pages/secPage/jobDetail/jobDetail.js
import { getJobDetail } from '../../../api/queryList'
Page({
  data: {
    expand: false,
    isCollected: false,
    isIphone: false,
    jobId: '',
    jobDetail: ''
  },
  onLoad: function (options) {
    this._getDetail(options.jobId)
    let system = getApp().globalData.systemInfo
    if (system.model.indexOf('iPhone X') > -1 || system.model.indexOf('iPhone 11') > -1) {
      this.setData({
        isIphone: true
      })
    }
  },
  _getDetail(jobId) {
    getJobDetail({ jobId: jobId }).then(res => {
      this.setData({
        jobDetail: res.data
      })
    })
  },
  showAllText() {
    this.setData({
      expand: !this.data.expand
    })
  },
  showMap() {
    wx.navigateTo({ url: `/pages/secPage/map/map?latitude=${this.data.jobDetail.exactAddress.lat}&longitude=${this.data.jobDetail.exactAddress.lng}&name=${this.data.jobDetail.companyId.companyName}` })
  },
  shareTap() {
    wx.chooseContact()
  },
  collectTap() {
    this.setData({
      isCollected: !this.data.isCollected
    })
  }
})