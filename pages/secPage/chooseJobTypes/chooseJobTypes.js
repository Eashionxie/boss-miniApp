import { getJobTypes } from '../../../api/queryList'
Component({
  properties: {
    jobTypes: Array,
    childTypes: Array,
    activeType: Object
  },
  data: {
    
  },
  methods: {
    parentTap(event) {
      this.triggerEvent("changeParent", event.currentTarget.dataset.index)
      // this.setData({
      //   activeType: event.currentTarget.dataset.parent,
      //   childTypes: event.currentTarget.dataset.parent.childTypes
      // })
    },
    childTap(event) {
      this.triggerEvent('confirmType', event.currentTarget.dataset.child)
      // getApp().globalData.expectNew.jobType = event.currentTarget.dataset.child.childTypeName
      // getApp().globalData.expectNew.jobTypeId = event.currentTarget.dataset.child.childTypeId
      // wx.navigateBack({
      //   delta: 1
      // })
    }
  }
  // onLoad: function (options) {
  //   this.data.index = options.index
  //   getJobTypes().then(res => {
  //     this.setData({
  //       jobTypes: res.data,
  //       childTypes: res.data[0].childTypes || [],
  //       activeType: res.data[0] || '',
  //     })
  //   })
  // },
  // parentTap(event) {
  //   this.setData({
  //     activeType: event.currentTarget.dataset.parent,
  //     childTypes: event.currentTarget.dataset.parent.childTypes
  //   })
  // },
  // childTap(event) {
  //   getApp().globalData.expectNew.jobType = event.currentTarget.dataset.child.childTypeName
  //   getApp().globalData.expectNew.jobTypeId = event.currentTarget.dataset.child.childTypeId
  //   wx.navigateBack({
  //     delta: 1
  //   })
  // }
})