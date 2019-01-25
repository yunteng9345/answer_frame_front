// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    dept:"",
    sec:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.sec)
    this.setData({
      sec: options.sec
    })
  },
  nameInput(e) {
    if (typeof (e.detail.value) != "undefined") {
      this.setData({
        name: e.detail.value
      })
    }
  },
  deptInput(e){
    if (typeof (e.detail.value) != "undefined") {
      this.setData({
        dept: e.detail.value
      })
    }
    // else {
    //   this.setData({
    //     txt: e.currentTarget.id
    //   })
    // }
  },
  submit(){
    wx.request({
      method: 'GET',
      url: 'https://www.yunteng0923.cn/MakeYouListen/dati/insert',
      header: { 'content-type': 'application/json' },
      data:{
        "name":this.data.name,
        "branch":this.data.dept,
        "time":this.data.sec
      },
      success:res=>{
        wx.switchTab({
          url: '../top/top',
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