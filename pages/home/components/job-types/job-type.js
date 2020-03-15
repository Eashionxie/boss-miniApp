// pages/home/components/job-types/job-type.js
Component({
  properties: {
    jobTypes: Array
  },
  data: {
    activeIndex: 0
  },
  methods: {
    scroll(data) {

    },
    chooseType(event) {
      this.setData({
        activeIndex: event.currentTarget.dataset.index
      })
    },
    updatejobTypes() {
      wx.navigateTo({ url: '/pages/secPage/jobTypesList/jobTypesList' })
    }
  }
})
