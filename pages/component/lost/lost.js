// pages/component/lost/lost.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [
      { message: '找到一把雨伞', address: "仙林校区", posttime: "2018.12.3 2:21" },
      { message: '今天丢了可爱的岳心淳小哥哥,啊，好难过，好想他，求求好心人把他带回来', address: "鼓楼校区", posttime: "2018.12.3 2:21" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  itemTap: function () {
    wx.navigateTo({
      url: '../item_lost/item_lost'
    })
  },
  searchFn: function (e) {
    var that = this
    search.searchAddHisKey(that);

  },

  searchInput: function (e) {
    var that = this
    search.searchInput(e, that);
  },

  serchFocus: function (e) {
    var that = this
    search.searchFocus(e, that);
  },

  searchBlur: function (e) {
    var that = this
    search.searchBlur(e, that);
  },

  searchKeyTap: function (e) {
    var that = this
    search.searchKeyTap(e, that);
  },

  searchDeleteKey: function (e) {
    var that = this
    search.searchDeleteKey(e, that);
  },

  searchDeleteAll: function (e) {
    var that = this;
    search.searchDeleteAll(that);
  },

  searchTap: function (e) {
    var that = this
    search.searchHiddenPancel(that);
  }
})