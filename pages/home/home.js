// pages/home/home.js
import { getJobList } from '../../api/queryList.js'
Page({
  data: {
    records: [],
    userInfo: wx.getStorageSync('userInfo'),
    sendData: {
      current: 1,
      size: 10,
      keyWords: '',
      jobTypeId: ''
    }
  },
  onLoad() {
    this._getJobList()
  },
  _getJobList(fp = true) {
    fp && (this.data.sendData.current = 1)
    !fp && (this.data.sendData.current ++)
    this.data.sendData.current < 1 && (this.data.sendData.current = 1)
    getJobList(this.data.sendData).then(res => {
      if (res.data.records && res.data.records.length) {
        this.setData({
          records: res.data.records,
        })
      } else {
        this.data.sendData.current --
      }
    })
  },
  showSearch() {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  }
})