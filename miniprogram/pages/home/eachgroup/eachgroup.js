// miniprogram/pages/home/eachgroup/eachgroup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
       problem_blank:"2017年积极分子考试"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //  判断是哪个是哪个练习入口

    // problem_blank: "2017年积极分子考试真题"
    var problem_blank_id = parseInt(options.id);

    if (problem_blank_id == 11) {
      this.setData({
        problem_blank: "2017年积极分子考试"
      })
    } else if (problem_blank_id == 12) {
      this.setData({
        problem_blank: "2018年积极分子考试"
      })
    } else if (problem_blank_id == 21) {
      this.setData({
        problem_blank: "党章"
      })
    } else if (problem_blank_id == 22) {
      this.setData({
        problem_blank: "党史"
      })
    } else if (problem_blank_id == 23) {
      this.setData({
        problem_blank: "十九大"
      })
    } else if (problem_blank_id == 31) {
      this.setData({
        problem_blank: "2017年发展对象面谈问题"
      })
    }


    console.log("练习入口:")
    console.log(this.data.problem_blank)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})