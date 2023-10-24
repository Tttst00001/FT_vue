Page({
  data: {
    list: [{
        text: '声母表',
        description: '23个',
        image: 'https://tjcx-prod.oss-cn-beijing.aliyuncs.com/images/2023/10/24/a47da719-28c4-44e1-9338-39dec7976ca0.png',
        path: '/pages/main/index?type=0'
      },
      {
        text: '韵母表',
        description: '24个',
        image: 'https://tjcx-prod.oss-cn-beijing.aliyuncs.com/images/2023/10/24/83e5fdfc-d526-446e-b0e5-b008c5339d03.png',
        path: '/pages/main/index?type=1'
      },
      {
        text: '整体认读',
        description: '16个',
        image: 'https://tjcx-prod.oss-cn-beijing.aliyuncs.com/images/2023/10/24/e14f214a-9dff-4b31-bdaa-c64b656e83e6.png',
        path: ''
      },
      // {
      //   text: '声调表',
      //   description: '',
      //   image: 'https://tjcx-prod.oss-cn-beijing.aliyuncs.com/images/2023/10/23/dd0df717-cffc-4011-bb87-fcbeb67ecbbd.png',
      //   path: ''
      // }
    ],
    headerHeight: '44'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let systemInfo = wx.getSystemInfoSync()
    this.setData({
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
    let index = event.currentTarget.dataset.index
    wx.navigateTo({
      url: this.data.list[index].path
    });
  }
});