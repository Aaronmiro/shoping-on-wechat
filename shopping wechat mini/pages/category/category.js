// pages/category/category.js
import{request}from "../../request/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryListLeft:[],
    categoryListRight: [],
    currentIndex:0,
  },

  categoryList:[],

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCategoryList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  getCategoryList(){
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/categories",dataType: "json",method: "GET"})
    .then(result=>{
      this.categoryList = result.data.message;
      console.log(result.data.message);
      
      let categoryListLeft = this.categoryList.map(v=>v.cat_name);
      let categoryListRight = this.categoryList[0].children;
      
      this.setData({
        categoryListLeft,
        categoryListRight
      })
    })
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