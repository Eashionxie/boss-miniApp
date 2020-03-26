// pages/search/search.js
import { getJobList, getSearchHistory } from '../../api/queryList.js'
import { addSearchHistory } from '../../api/formPost'
Page({
  data: {
    records:[],
    searchHistoryList: [],
    triggered: false,
    showInput: true,
    showDel: false,
    sendData: {
      current: 1,
      size: 10,
      keyWords: '',
      jobTypeId: ''
    }
  },
  onLoad: function (options) {
    this._getSearchHistory()
  },
  _getSearchHistory() {
    let _user = wx.getStorageSync('userInfo')
    getSearchHistory({ openId: _user.openId }).then(res => {
      this.setData({
        searchHistoryList: res.data
      })
    })
  },
  textInput(event) {
    console.log(event)
    if (event.detail.value && event.detail.value !== '') {
      this.setData({
        showDel: true
      })
    }
  },
  clearInput() {
    this.data.sendData.keyWords = ''
    this.setData({
      sendData: this.data.sendData,
      showDel: false
    })
  },
  focusInput() {
    !this.data.showInput && this._getSearchHistory()
    this.data.sendData.keyWords && (this.data.showDel = true)
    this.setData({
      showDel: this.data.showDel,
      showInput: true,
      records: []
    })
  },
  confirmInput(event) {
    this.data.sendData.keyWords = event.detail.value
    this.setData({
      sendData: this.data.sendData,
      showInput: false
    })
    this._getJobList()
    this.addHistory(event.detail.value)
  },
  chooseHistoryItem(event) {
    this.data.sendData.keyWords = event.currentTarget.dataset.item
    this.setData({
      sendData: this.data.sendData,
      showInput: false
    })
    this._getJobList()
  },
  _getJobList(fp = true) {
    this._freshing = true
    fp && (this.data.sendData.current = 1)
    !fp && (this.data.sendData.current ++)
    this.data.sendData.current < 1 && (this.data.sendData.current = 1)
    getJobList(this.data.sendData).then(res => {
      if (res.data.records && res.data.records.length) {
        !fp && (this.data.records = this.data.records.concat(res.data.records))
        fp && (this.data.records = res.data.records)
        this.setData({
          records: this.data.records,
          triggered: false
        })
      } else {
        this.data.sendData.current --
        this.setData({
          triggered: false
        })
      }
      this._freshing = false
    })
  },
  addHistory(jobType) {
    addSearchHistory({ openId: wx.getStorageSync('token'), jobType: jobType })
    .then(res => {

    })
  },
  onPulling(e) {
    console.log('onPulling:', e)
  },
  onRefresh() {
    if (this._freshing) return
    this._getJobList()
  },
  tolower() {
    this._getJobList(false)
  },
  onRestore(e) {
    console.log('onRestore:', e)
  },
  onAbort(e) {
    console.log('onAbort', e)
  }
})