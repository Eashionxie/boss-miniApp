//Page Object
Page({
  data: {
    userInfo: wx.getStorageSync('userInfo')
  },
  onLoad: function(options){
    
  },
  onReady: function(){
    
  },
  onShow: function(){
    
  },
  fullUserInfo() {
    wx.navigateTo({ url: '/pages/secPage/onlineResume/onlineResume' })
  }
});