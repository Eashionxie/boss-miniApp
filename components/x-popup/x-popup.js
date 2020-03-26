// components/x-popup/x-popup.js
Component({
  properties: {

  },
  data: {

  },
  methods: {
    closePop() {
      this.triggerEvent('closeDialog')
    },
    defaultTap() {} // 阻止mask事件冒泡
  }
})
