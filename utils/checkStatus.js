
const checkStatus = (status) => {
  if (status === 200) return true
  if (status === -9999) {
    wx.showToast({
      title: '暂无权限',
      icon: 'none'
    })
    return false
  }
  else return false
}

export default checkStatus