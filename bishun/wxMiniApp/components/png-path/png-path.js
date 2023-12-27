// components/png-path.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    extClass: {
      type: String,
      value: ''
    },
    word: {
      type: String,
      value: ''
    },
    redIndex: {
      type: Number,
      value: 0
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    bg: ''
  },
  lifetimes: {
    attached() {
      const bg = `background-image:url(http://127.0.0.1:5173/pngs/${
        encodeURIComponent(this.data.word).replace(/%/g, '-')
      }.png); background-position: 3rpx -${
        83 * this.data.redIndex
      }rpx`;
      
      this.setData({ bg })
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})