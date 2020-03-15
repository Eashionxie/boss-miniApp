import { config } from './config'
const uploadImg = (count = 9, cb) => {
  wx.chooseImage({
    count: count,
    sizeType: ['original', 'compressed'],
    sourceType: ['album', 'camera'],
    success (chooseRes) {
      chooseRes.tempFilePaths.forEach(element => {
        wx.uploadFile({
          url: config.baseUrl + '/mini-api/file/file-upload',
          filePath: element,
          name: 'file',
          formData: { 'openid': wx.getStorageSync('token') },
          success (uploadRes) {
            cb(JSON.parse(uploadRes.data).data)
          },
          fail () {
            wx.showToast({
              title: '文件上传失败',
              icon: 'none'
            })
          }
        })
      })
    },
    fail () {
      wx.showToast({
        title: '获取相册失败',
        icon: 'none'
      })
    }
  })
}

export default uploadImg