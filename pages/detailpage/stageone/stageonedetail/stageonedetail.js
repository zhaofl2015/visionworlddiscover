// pages/detailpage/stageone/stageonedetail/stageonedetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      page_content: {
        title:'',
        content: ''
      },
      infos : {
        1: {
          1: {
              title: '装修前要初步统一全家思想',
              content: '有过装修经验的人<image url="../../../resource/1.jpg></image>"'
          }
        }
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      var page = options.page;
      var index = options.index;
      var ret = {title: '', content: ''};
      var infos = that.data.infos;
      if((page in infos) && (index in infos[page])) {
        ret = infos[page][index];
        this.setData({
          page_content: ret
        });
      }
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