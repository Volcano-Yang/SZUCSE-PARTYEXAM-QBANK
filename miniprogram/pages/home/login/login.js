var userinfoid = "不要挂科"
module.exports = {
  userinfoport: userinfoid
}

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function() {

    // 查看是否授权
    wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
            }
          })

        }
      }
    })



  },

  // 获取用户昵称储存
  bindGetUserInfo: function(e) {

    console.log("获取昵称");
    console.log("nickname=" + e.detail.userInfo.nickName);
    console.log("改变前");
    console.log(userinfoid);
    console.log("改变后");
    userinfoid = e.detail.userInfo.nickName;

    console.log(userinfoid);


    console.log(e.detail.userInfo),
      wx.showLoading({
        title: '登陆中...',
      }),
      wx.switchTab({
        url: '/pages/home/instructions/instructions'
      })

    //在登录窗要用这个跳转
  }

})