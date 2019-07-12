// pages/review/collect-problems/collect-problems.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    postList: [],
    postList2: [],
    postList3: [],
    index: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // //将云数据库中的data传递到当前js文件的模块代码
    // //1、引用数据库
    // const db = wx.cloud.database({});


    // db.collection('question_blank').where({
    //   //筛选数据
    //   object: "积极分子"
    // }).get({
    //   success: res => {
    //     console.log('查询成功', res.data);
    //     this.setData({
    //       postList: res.data
    //     });
    //     console.log('输出成功');
    //   },
    //   fail: err => {
    //     wx.showToast({
    //       icon: 'none',
    //       title: '查询记录失败',
    //     })
    //     console.error('查询记录失败', err)
    //   }
    // })
  },

  jijifenzi: function() {
    // // 自动下拉刷新函数
    // wx.startPullDownRefresh();
    //将云数据库中的data传递到当前js文件的模块代码
    //1、引用数据库
    const db = wx.cloud.database({});
    db.collection('question_blank').where({
      //筛选数据
      zhangjie: "2017年积极分子考试"
    }).get({
      success: res => {
        console.log('查询成功', res.data);
        this.setData({
          postList: res.data
        });
        console.log('输出成功');
        console.log(this.data.postList);
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败',
        })
        console.error('查询记录失败', err)
      }
    })

    db.collection('question_blank').where({
      //筛选数据
      zhangjie: "2018年积极分子考试"
    }).get({
      success: res => {
        console.log('查询成功', res.data);
        this.setData({
          postList: this.data.postList.concat(res.data)
        });
        console.log('输出成功!!!!!!!!');
        console.log(this.data.postList);
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败',
        })
        console.error('查询记录失败', err)
      }
    })
  },

  fazhanduixiang: function() {
    // // 自动下拉刷新函数
    // wx.startPullDownRefresh();
    //将云数据库中的data传递到当前js文件的模块代码
    //1、引用数据库
    const db = wx.cloud.database({});

    db.collection('question_blank').where({
      //筛选数据
      zhangjie: "党章2"
    }).get({
      success: res => {
        console.log('查询成功', res.data);
        this.setData({
          postList1: this.data.postList.concat(res.data)
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

    db.collection('question_blank').where({
      //筛选数据
      zhangjie: "党章1"
    }).get({
      success: res => {
        console.log('查询成功', res.data);
        this.setData({
          postList: this.data.postList.concat(res.data)
        });
        console.log('输出成功');
        console.log(this.data.postList);
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败',
        })
        console.error('查询记录失败', err)
      }
    })

    db.collection('question_blank').where({
      //筛选数据
      zhangjie: "党史3"
    }).get({
      success: res => {
        console.log('查询成功', res.data);
        this.setData({
          postList: this.data.postList.concat(res.data)
        });
        console.log('输出成功');
        console.log(this.data.postList);
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败',
        })
        console.error('查询记录失败', err)
      }
    })


    db.collection('question_blank').where({
      //筛选数据
      zhangjie: "党史2"
    }).get({
      success: res => {
        console.log('查询成功', res.data);
        this.setData({
          postList: this.data.postList.concat(res.data)
        });
        console.log('输出成功');
        console.log(this.data.postList);
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败',
        })
        console.error('查询记录失败', err)
      }
    })


    db.collection('question_blank').where({
      //筛选数据
      zhangjie: "党史1"
    }).get({
      success: res => {
        console.log('查询成功', res.data);
        this.setData({
          postList: this.data.postList.concat(res.data)
        });
        console.log('输出成功');
        console.log(this.data.postList);
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败',
        })
        console.error('查询记录失败', err)
      }
    })


    db.collection('question_blank').where({
      //筛选数据
      zhangjie: "十九大3"
    }).get({
      success: res => {
        console.log('查询成功', res.data);
        this.setData({
          postList: this.data.postList.concat(res.data)
        });
        console.log('输出成功');
        console.log(this.data.postList);
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败',
        })
        console.error('查询记录失败', err)
      }
    })


    db.collection('question_blank').where({
      //筛选数据
      zhangjie: "十九大2"
    }).get({
      success: res => {
        console.log('查询成功', res.data);
        this.setData({
          postList: this.data.postList.concat(res.data)
        });
        console.log('输出成功!!!!!!!!');
        console.log(this.data.postList);
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败',
        })
        console.error('查询记录失败', err)
      }
    })

    db.collection('question_blank').where({
      //筛选数据
      zhangjie: "十九大1"
    }).get({
      success: res => {
        console.log('查询成功', res.data);
        this.setData({
          postList: this.data.postList.concat(res.data)
        });
        console.log('输出成功!!!!!!!!');
        console.log(this.data.postList);
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败',
        })
        console.error('查询记录失败', err)
      }
    })


    db.collection('question_blank').where({
      //筛选数据
      zhangjie: "十九大2"
    }).get({
      success: res => {
        console.log('查询成功', res.data);
        this.setData({
          postList: this.data.postList.concat(res.data)
        });
        console.log('输出成功!!!!!!!!');
        console.log(this.data.postList);
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败',
        })
        console.error('查询记录失败', err)
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