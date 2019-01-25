// pages/zixun/zixun.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgdj: 'https://www.yunteng0923.cn/MakeYouListen/pic/jd.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  isStart(){
    wx.showModal({
      title: '开始答题',
      content: '点击确定，开始计时答题',
      success:res=>{
        if (res.confirm) {
          this.start()
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  start(){
    wx.navigateTo({
      url: '../index/index',
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