// components/choose-city/choose-city.js
import cityData from '../../utils/cityData'
import { coordinate2Address } from '../../api/common'
Component({
  properties: {

  },
  data: {
    location: '',
    citys: cityData.citys,
    hotCitys: ['深圳', '广州', '上海', '北京'],
    activeTitle: 'hot',
    toView: 'hot'
  },
  ready() {
    wx.getLocation({
      type: 'gcj02',
      success: (result) => {
        coordinate2Address({ location: `${result.latitude},${result.longitude}` }).then(res => {
          this.setData({
            location: res.data.ad_info.city.split('市')[0]
          })
        })
      },
      fail: (err) => {
        wx.showToast({ title: '定位失败，请手动选择城市', icon: 'none' });
      }
    })
  },
  methods: {
    changeIndex(event) {
      this.setData({
        activeTitle: event.currentTarget.dataset.title,
        toView: event.currentTarget.dataset.title
      })
    },
    confirmCity(event) {
      if (!event.currentTarget.dataset.city) return
      this.triggerEvent('confirmCity', event.currentTarget.dataset.city)
    }
  }
})
