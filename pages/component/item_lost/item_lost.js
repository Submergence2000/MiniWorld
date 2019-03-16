// pages/component/item/item.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item_time: '',
    item_location: '',
    item_contact: '',
    item_description: '',
    item_picture_url: null,
    img_width_2: wx.getSystemInfoSync().windowWidth / 2.6,
    img_width_3: wx.getSystemInfoSync().windowWidth / 4,
    img_width_1: wx.getSystemInfoSync().windowWidth / 1.3
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("接收到的参数是item=" + options.item);//此处打印出来的是字符串，解析如下    	
    var item = JSON.parse(options.item);//解析得到集合
    this.setData({
      item_time: item.time,
      item_location: item.address,
      item_contact: item.contactMethod,
      item_description: item.detail,
      item_picture_url: item.imgs//此处为网址
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

  },
  //此函数为预览，调用了当前图片的地址和图片所在的列表
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, 
      urls: this.data.item_picture_url
      })}
})