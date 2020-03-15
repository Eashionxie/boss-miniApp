import getUserInfo from './getUserInfo'
import { authApi } from '../api/common'


const authPromission = () => {
  const token = wx.getStorageSync('token')
  const userInfo = wx.getStorageSync('userInfo')
  if (token && token.length) {
    if (!userInfo) {
      wx.navigateTo({ url: `/pages/wxAuth/wxAuth?openid=${token}` })
      wx.setStorageSync('token', '')
    }
  } else {
    wx.login({
      success: (res) => {
        authApi({ code: res.code }).then(res => {
          if (!res.data || !res.data.userData) {
            wx.navigateTo({ url: `/pages/wxAuth/wxAuth?openId=${res.data.openId}` })
          }
        }).catch(err => {
          wx.navigateTo({ url: `/pages/404/404` })
          wx.showToast({
            title: '登录失败',
            icon: 'none'
          })
        })
      },
      fail: (res) => {
        wx.showToast({
          title: '登录失败',
          icon: 'none'
        })
      }
    })
  }
}

export default authPromission