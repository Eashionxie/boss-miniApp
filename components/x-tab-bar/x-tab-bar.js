// components/x-tab-bar/x-tab-bar.js
Component({
  properties: {
    items: {
      type: Array,
      value: ['NaN', 'NaN'],
    }
  },
  data: {
    activeIndex: 0
  },
  methods: {
    itemSelected(event) {
      this.setData({
        activeIndex: event.currentTarget.dataset.index
      })
      this.triggerEvent('itemClick', { item: event.currentTarget.dataset.item, index: event.currentTarget.dataset.index}, {})
    }
  }
})
