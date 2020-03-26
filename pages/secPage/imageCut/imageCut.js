import { config } from '../../../utils/config'
import { postUserInfo } from '../../../api/common'
const app = getApp()

const device = wx.getSystemInfoSync()
const width = device.windowWidth
const height = device.windowHeight - 50

Page({
  data: {
    fileType: '',//学历：E, 车：C, 房：H, 头像：H, 用户图片：U,兴趣爱好：I
    isupdate: '',//是否更新照片
    src: '',
    width: 300,//宽度
    height: 300,//高度
    limit_move: false,//是否禁用旋转
    max_width: 100,
    max_height: 100,
    min_width: 50,
    min_height: 50,
    disable_width: true,
    disable_height: true,
    disable_ratio: true
  },
  onLoad: function (option) {
    //获取到image-cropper对象
    this.cropper = this.selectComponent("#image-cropper");
    const filePath = decodeURIComponent(option.filePath); //图片临时地址
    console.log(width * option.width / 750)
    console.log(width)
    //开始裁剪
    this.setData({
      src: filePath,
      width: width * option.width / 750 || this.data.width,
      height: width * option.height / 750 || this.data.height,
      max_width: width * option.width / 750 || this.data.max_width,
      max_height: width * option.height / 750 || this.data.max_height,
      fileType: option.fileType,
      isupdate: option.isupdate
    });
    wx.showLoading({
      title: '加载中'
    })
  },
  cropperload(e) {
    console.log("cropper初始化完成");
  },
  loadimage(e) {
    console.log("图片加载完成", e.detail);
    wx.hideLoading();
    this.cropper.imgReset();
  },
  clickcut(e) {
    console.log(e.detail);
    //点击裁剪框阅览图片
    wx.previewImage({
      current: e.detail.url, // 当前显示图片的http链接
      urls: [e.detail.url] // 需要预览的图片http链接列表
    })
  },
  submit: function () {
    this.cropper.getImg((obj) => {
      // app.globalData.imgSrc = obj.url;
      // wx.navigateBack({
      //   delta: -1
      // })
      const src = obj.url;
      const _this = this;
      console.log(obj)
      wx.showLoading({
        title: '上传中...',
        mask: true,
      });
      wx.uploadFile({
        url: config.baseUrl + '/mini-api/common/file-upload',
        filePath: src,
        name: 'file',
        formData: { 'openid': wx.getStorageSync('token') },
        success (uploadRes) {
          _this.callBack(JSON.parse(uploadRes.data).data)
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
  cancel() {
    wx.navigateBack({
      delta: 1
    })
  },
  callBack(data) {
    let _user = wx.getStorageSync('userInfo')
    _user.avatarUrl = config.baseUrl + data
    postUserInfo(_user).then(res => {
      wx.setStorageSync('userInfo', res.data);
      wx.navigateBack({
        delta: 1
      })
      wx.hideLoading()
    })
  },
  rotate() {
    //在用户旋转的基础上旋转90°
    this.cropper.setAngle(this.cropper.data.angle += 90);
  },
  end(e) {
    clearInterval(this.data[e.currentTarget.dataset.type]);
  }
})