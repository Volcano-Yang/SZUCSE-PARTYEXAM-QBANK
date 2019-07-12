Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  skip_w1: function() {
    console.log("w1"),
      wx.navigateTo({
      url: '../web-view/w1/w1',
      });
  },
  skip_w2: function () {
    console.log("w2"),
      wx.navigateTo({
        url: '../web-view/w2/w2',
      });
  },
  skip_w3: function () {
    console.log("w3"),
      wx.navigateTo({
        url: '../web-view/w3/w3',
      });
  },
  skip_w4: function () {
    console.log("w4"),
      wx.navigateTo({
        url: '../web-view/w4/w4',
      });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})