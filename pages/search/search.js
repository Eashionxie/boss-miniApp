// pages/search/search.js
Page({
  data: {
    records:[],
    keyWords: ''
  },
  onLoad: function (options) {

  },
  focusInput() {
    this.setData({
      records: []
    })
  },
  confirmInput(event) {
    this.setData({
      keyWords: event.detail.value,
      records: [1,1,1,1,1,1,1,1,11,]
    })
  },
  chooseHistoryItem(event) {
    this.setData({
      keyWords: event.currentTarget.dataset.item,
      records: [2,2,2]
    })
  }
})