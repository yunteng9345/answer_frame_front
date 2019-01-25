// pages/dtindex/datiindex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:40,
    timu:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
 // console.log("onLoad")
  },
  dati(e){
    wx.navigateTo({
      url: '../dati/dati?id=' + e.currentTarget.id,
    })
    //console.log(e.currentTarget.id);
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
    var that=this;
    wx.request({
      url: 'http://localhost:8080/wechat/alltimu',
      header: { //请求头
        "Content-Type": "applciation/json"
      },
      method: "GET", //get为默认方法/POST
      success: function (res) {
        //console.log("alltimu"+res.data.alltimu[0].t_name);
        that.setData({
          timu:res.data.alltimu
        })
      },
      fail: function (err) {

      }
    })
    
    //console.log("onShow!")
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