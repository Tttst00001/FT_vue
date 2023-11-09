import {
  fn
} from './type'

Page({
  data: {
    list: [],
    num: 1,
    type: null
  },
  onLoad(options) {
    let systemInfo = wx.getSystemInfoSync()
    const _list = fn(options.type)
    const list = _list
    this.setData({
      list,
      type: options.type,
      systemInfo
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  onClick(event) {
    let index = event.currentTarget.dataset.index;

  },
  pr(event) {
    let index = event.currentTarget.dataset.index;
    let target = this.data.list;
    let num = this.data.num
    let flag = target[index].flag
    if (!flag) {
      target[index].index = num
      target[index].flag = !target[index].flag
      this.setData({
        list: target,
        num: num + 1
      })
    }
    const innerAudioContext = wx.createInnerAudioContext({
      useWebAudioImplement: true // 是否使用 WebAudio 作为底层音频驱动，默认关闭。对于短音频、播放频繁的音频建议开启此选项，开启后将获得更优的性能表现。由于开启此选项后也会带来一定的内存增长，因此对于长音频建议关闭此选项
    })
    innerAudioContext.src = `/video/${target[index].text}.mp3`
    innerAudioContext.play() // 播放
  },
  refresh() {
    let origin = this.data.list;
    origin.map(item => {
      item.index = null
      item.flag = false
      return item;
    })

    this.setData({
      list: origin,
      num: 1
    })
  },
  backIndex() {
    wx.navigateBack()
  }
})