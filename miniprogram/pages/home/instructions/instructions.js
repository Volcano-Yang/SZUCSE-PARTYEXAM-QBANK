Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectIndex: 1
  },
  //index转换
  changeSelectIndex1:function()
  {
    console.log("index:1"),
      this.setData({
      selectIndex:1,
      });
  },
  changeSelectIndex2: function () {
    console.log("index:2"),
      this.setData({
        selectIndex:2,
      });
  },
  changeSelectIndex3: function () {
    console.log("index:3"),
      this.setData({
        selectIndex: 3,
      });
  },
  changeSelectIndex4: function () {
    console.log("index:4"),
      this.setData({
        selectIndex: 4,
      });
  },
  changeSelectIndex5: function () {
    console.log("index:5"),
      this.setData({
        selectIndex: 5,
      });
  },


  // 菜单跳转函数
  skip_party_history: function() {
    console.log("eeeeee"),
      wx.navigateTo({
      url: '../party-history/party-history',
      })

  },

  skip_party_rules: function() {
    console.log("eeeeee"),
      wx.navigateTo({
      url: '../party-rules/party-rules',
      })

  },


  skip_19_cpc: function() {
    console.log("eeeeee"),
      wx.navigateTo({
      url: '../19-cpc/19-cpc',
      })

  },

  skip_experience: function () {
    console.log("eeeeee"),
      wx.navigateTo({
      url: '../experience/experience',
      })

  },

  skip_use_kill: function () {
    console.log("eeeeee"),
      wx.navigateTo({
      url: '../use-kill/use-kill',
      })

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