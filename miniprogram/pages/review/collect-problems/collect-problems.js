// pages/review/collect-problems/collect-problems.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    usernick: "",
    postList: [],
    index: 0,
    click:"未更新",
    // date:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(e) {

    //获取用户名字
    wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: res => {
              console.log('查询id成功', res.userInfo);
              console.log('id成功');
            },
          })
        }
      }
    })
  },

  // 更新题目函数

  //获取昵称
  onGotUserInfo: function (e) {
    console.log("获取昵称");
    console.log("nickname=" + e.detail.userInfo.nickName);

    this.setData({
      usernick: e.detail.userInfo.nickName,
      // click:"更新",
      // date: util.formatTime(new Date())
    });
    console.log(this.data.usernick);
    // console.log(this.data.click);
    // console.log(this.data.date);

    //将云数据库中的data传递到当前js文件的模块代码
    var _this = this;
    //1、引用数据库
    const db = wx.cloud.database({});

    //第二组
    console.log("准备根据名字查询题目");
    console.log(this.data.usernick);
    db.collection('collection').where({
      userid: this.data.usernick
    }).get({
      success: res => {
        console.log('查询成功', res.data);
        this.setData({
          postList: res.data
        });
        console.log('输出成功');
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败',
        })
        console.error('查询记录失败', err)
      }
    })

    this.setData({
      // usernick: e.detail.userInfo.nickName,
      click: "更新",
      // date: util.formatTime(new Date())
    });
    // console.log(this.data.usernick);
    console.log(this.data.click);
    // console.log(this.data.date);

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