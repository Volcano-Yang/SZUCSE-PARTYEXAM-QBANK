Page({
  data: {
    // postList就是存放问题的数组
    postList: [],
    userid: '',
    zhangjie: "2017积极分子考试",
    group_number: "单选题",

    index: 0,
    userid: '',
    bc_default: '#FBFBFB',
    bc_right: '#98FB98',
    bc_wrong: '#FF99B4',
    bcA: '',
    bcB: '',
    bcC: '',
    bcD: '',
    ny: 'true'
  },

  nextQuestion: function() {
    console.error('下一题');
    if (this.data.index < this.data.postList.length - 1) {
      this.setData({
        //更改数据要用A：B
        index: this.data.index + 1,
        bcA: this.data.bc_default,
        bcB: this.data.bc_default,
        bcC: this.data.bc_default,
        bcD: this.data.bc_default,
        ny: 'true'
      });
    } else {
      wx.navigateTo({
        url: '../end/end',
      })
    }
  },


  lastQuestion: function() {
    if (this.data.index > 0) {

      this.setData({
        bcA: this.data.bc_default,
        bcB: this.data.bc_default,
        bcC: this.data.bc_default,
        bcD: this.data.bc_default,
        index: this.data.index - 1,
        ny: 'true'
      });
    }
  },

  btnOpClick: function(e) {
    console.log("点击");
    if (this.data.ny != '') {
      console.log(this.data.postList[this.data.index].daan);
      var that = this;
      var select = e.currentTarget.id;
      var jieg = this.data.postList[this.data.index].daan;
      if (select == jieg) {

        if (select == 'A') {
          this.setData({
            bcA: that.data.bc_right
          });
        } else if (select == 'B') {
          this.setData({
            bcB: that.data.bc_right
          });
        } else if (select == 'C') {
          this.setData({
            bcC: that.data.bc_right
          });
        } else if (select == 'D') {
          this.setData({
            bcD: that.data.bc_right
          });
        }
        this.xianshi();


      } else {
        if (select == 'A') {
          this.setData({
            bcA: that.data.bc_wrong
          });
        } else if (select == 'B') {
          this.setData({
            bcB: that.data.bc_wrong
          });
        } else if (select == 'C') {
          this.setData({
            bcC: that.data.bc_wrong
          });
        } else if (select == 'D') {
          this.setData({
            bcD: that.data.bc_wrong
          });
        }
        this.xianshi();
      }
    }

  },
  gotonext: function() {
    wx.navigateTo({
      url: '../end/end',
    })
  },
  xianshi: function() {
    this.setData({
      //''相当于false
      ny: ''
    })
  },


  // 收藏函数

  //获取昵称
  onGotUserInfo: function(e) {
    console.log("收藏 获取昵称");
    console.log("nickname=" + e.detail.userInfo.nickName);

    this.setData({
      userid: e.detail.userInfo.nickName
    });
    console.log(this.data.userid);

    const db = wx.cloud.database()
    db.collection('collection').add({
      data: {
        userid: this.data.userid,
        _id: this.data.postList[this.data.index]._id,
        zhangjie: this.data.postList[this.data.index].zhangjie,
        tixing: this.data.postList[this.data.index].tixing,
        timu: this.data.postList[this.data.index].timu,
        xuanxianga: this.data.postList[this.data.index].xuanxianga,
        xuanxiangb: this.data.postList[this.data.index].xuanxiangb,
        xuanxiangc: this.data.postList[this.data.index].xuanxiangc,
        xuanxiangd: this.data.postList[this.data.index].xuanxiangd,
        daan: this.data.postList[this.data.index].daan
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        console.log('[数据库] [新增记录] 成功，记录 ', res)
      },
      fail: err => {
        console.error('[数据库] [新增记录] 失败：')
      }
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    //  判断是哪个章节
    var zhangjieid = parseInt(options.id);
    console.log("章节ID");
    console.log(zhangjieid);
    if (zhangjieid == 111) {
      this.setData({
        zhangjie: "2017年积极分子考试",
        group_number: "填空题"
      })
      console.log("以及顺利修改！！！！！！！！！！！！！！！！")
      console.log("章节:")
      console.log(this.data.zhangjie)
      console.log("题型:")
      console.log(this.data.group_number)

    } else if (zhangjieid == 112) {
      this.setData({
        zhangjie: "2017年积极分子考试",
        group_number: "单选题"
      })
    } else if (zhangjieid == 113) {
      this.setData({
        zhangjie: "2017年积极分子考试",
        group_number: "简答论述题"
      })
    } else if (zhangjieid == 122) {
      this.setData({
        zhangjie: "2018年积极分子考试",
        group_number: "单选题"
      })
    } else if (zhangjieid == 121) {
      this.setData({
        zhangjie: "2018年积极分子考试",
        group_number: "填空题"
      })
    } else if (zhangjieid == 123) {
      this.setData({
        zhangjie: "2018年积极分子考试",
        group_number: "简答论述题"
      })
    } else if (zhangjieid == 211) {
      this.setData({
        zhangjie: "党史1",
        group_number: "单选题"
      })
    } else if (zhangjieid == 212) {
      this.setData({
        zhangjie: "党史2",
        group_number: "单选题"
      })
    } else if (zhangjieid == 213) {
      this.setData({
        zhangjie: "党史3",
        group_number: "判断题"
      })
    } else if (zhangjieid == 221) {
      this.setData({
        zhangjie: "党章",
        group_number: "单选题"
      })
    } else if (zhangjieid == 222) {
      this.setData({
        zhangjie: "党章2",
        group_number: "单选题"
      })
    } else if (zhangjieid == 231) {
      this.setData({
        zhangjie: "十九大1",
        group_number: "单选题"
      })
    } else if (zhangjieid == 232) {
      this.setData({
        zhangjie: "十九大2",
        group_number: "单选题"
      })
    } else if (zhangjieid == 233) {
      this.setData({
        zhangjie: "十九大3",
        group_number: "判断题"
      })
    }



    //将云数据库中的data传递到当前js文件的模块代码
    //1、引用数据库
    const db = wx.cloud.database({});


    db.collection('question_blank').where({

      //筛选数据
      zhangjie: this.data.zhangjie,
      tixing: this.data.group_number
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