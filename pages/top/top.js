// pages/top/top.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      topList:[],
      img:'https://www.yunteng0923.cn/MakeYouListen/pic/phb.png',
      top1: 'https://www.yunteng0923.cn/MakeYouListen/pic/top1.png',
      top2: 'https://www.yunteng0923.cn/MakeYouListen/pic/top2.png',
      top3: 'https://www.yunteng0923.cn/MakeYouListen/pic/top3.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var count=app.globalData.count;
    console.log(count)
    wx.request({
      url: 'https://www.yunteng0923.cn/MakeYouListen/dati/show',
      success:res=>{
        this.setData({
          topList: res.data.allDati
        })
      }
    })
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
    console.log("onshow")
    wx.request({
      url: 'https://www.yunteng0923.cn/MakeYouListen/dati/show',
      success: res => {
        this.setData({
          topList: res.data.allDati
        })
      }
    })
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