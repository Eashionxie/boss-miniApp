// pages/secPage/map/map.js
Page({
  data: {
    options: '',
    markers: []
  },
  onLoad: function (options) {
    this.data.markers.push({ id: 1, latitude: options.latitude, longitude: options.longitude, name: options.name })
    this.setData({
      options: options,
      markers: this.data.markers
    })
  },
  onReady: function () {
    this.mapCtx = wx.createMapContext('loactionMap')
  }
})