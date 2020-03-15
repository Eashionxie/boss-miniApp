// pages/home/components/job-item/job-item.js
Component({
  properties: {
    itemDetail: Object
  },
  data: {

  },
  methods: {
    itemTap() {
      wx.navigateTo({
        url: `/pages/secPage/jobDetail/jobDetail?jobId=${this.properties.itemDetail._id}`
      });
    }
  }
})
