// pages/dati/dati.js
var i = 0
Page({
  /**
   * 页面的初始数据
   */
  data: {
    c:i+1,
    timu: "",
    ti: "",
    result: "",
    flag: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    //console.log(options.id)
    wx.request({
      url: 'http://localhost:8080/wechat/alltimuitem?t_id=' + options.id,
      header: { //请求头
        "Content-Type": "applciation/json"
      },
      method: "GET", //get为默认方法/POST
      success: function (res) {
        // that.setData({
        //   timu:res.data.alltimuitem[i]
        // })
        //console.log("alltimuitem"+res.data.alltimuitem[0].ti_name)
        wx.setStorage({
          key: "timu",
          data: res.data.alltimuitem
        })

        wx.getStorage({
          key: 'timu',
          success: function(res) {
            //console.log("缓存"+res.data[0].ti_name)
            that.setData({
              timu: res.data[i]
            })
          }
        })
      },
      fail: function (err) {

      }
    })
   
  },

  /*
  A,B,C,D选择后判断是否正确
  根据对错将对应题目集的答案存在缓存里
  */
  butA: function(e) {
    var that = this;
    var ta = e.currentTarget.dataset.ta
    var ans = e.currentTarget.dataset.ans

    if (ta == ans) {

      that.setData({
        result: "正确",
        flag: true,
        c: i + 1
      })
      
      this.refresh(e)
    } else {
      that.setData({
        result: "错误，正确答案是：" + ans
      })

    }


  },
  butB: function(e) {
    var that = this;
    var tb = e.currentTarget.dataset.tb
    var ans = e.currentTarget.dataset.ans
    if (tb == ans) {

      that.setData({
        result: "正确",
        flag: true,
        c: i + 1

      })
      
      this.refresh(e)
    } else {
      that.setData({
        result: "错误，正确答案是：" + ans
      })

    }

  },
  butC: function(e) {
    var that = this;
    var tc = e.currentTarget.dataset.tc
    var ans = e.currentTarget.dataset.ans
    if (tc == ans) {

      that.setData({
        result: "正确",
        flag: true,
        c: i + 1
      })
      c++ ,
      this.refresh(e)
    } else {
      that.setData({
        result: "错误，正确答案是：" + ans
      })

    }

  },
  butD: function(e) {
    var that = this;
    var td = e.currentTarget.dataset.td
    var ans = e.currentTarget.dataset.ans
    if (td == ans) {

      that.setData({
        result: "正确",
        flag: true,
        c: i + 1
      })
      this.refresh(e)
    } else {
      that.setData({
        result: "错误，正确答案是：" + ans
      })

    }

  },

  /*
  下一题
  */
  refresh(e) {
    var that = this;
    wx.getStorage({
      key: 'timu',
      success: function(res) {
        i++;
        if (res.data[i] == null) {
          wx.showToast({
            title: '本关卡通过！',
            icon: 'succes',
            duration: 1000,
            mask: true
          })
        } else {
          that.setData({
            timu: res.data[i],
            c: i+1
          })
        }

      },
      // fail:function(res){
      //     console.log("fail")
      // }
    })

  },

  /*
  上一题
  */
  uprefresh(e) {
    var that = this;
    wx.getStorage({
      key: 'timu',
      success: function (res) {
          that.setData({
            timu: res.data[--i],
            c:i-1
            
          })
        }

    })

  },

  /*
加入错题本
  */
  joinbook(e) {
    var tno = e.currentTarget.dataset.tno
   
    wx.request({
      method: "GET", //get为默认方法/POST
      url: 'https://www.yunteng0923.cn/t/timu/erro',
      header: { //请求头
        "content-type": "applciation/json"
      },
      data: {
        'tno': tno,
      },

      success: function(res) {
        wx.showToast({
          title: '加入错题本成功！',
          icon: 'succes',
          duration: 1000,
          mask: true
        })
        //console.log("加入错题本成功！")
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
  onShow: function(options) {

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
    i = 0;
    c:i+1;
    console.log("onUnload")
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