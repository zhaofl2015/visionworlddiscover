// pages/detailpage/stageone/stageone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "stage_list": [
    ],
    "infos": {
      1: {
        1: [
          {
            "url": "../contentpages/page_1_1_1/page_1_1_1",
            "image_url": "../../resource/1.jpg",
            "title": "111111",
            "content": "11111有过装修经验的人，往往会说这样一句话：装修比买房还痛苦。这句话其实一点也不夸张，因为买房时，一般会初步确定一个大概位置，位置确定好之后，可选的余地也就不大了。但装"
          },
          {
            "url": "./stageonedetail/stageonedetail?page=1&index=2",
            "image_url": "../../resource/2.jpg",
            "title": "22222",
            "content": "22222有过装修经验的人，往往会说这样一句话：装修比买房还痛苦。这句话其实一点也不夸张，因为买房时，一般会初步确定一个大概位置，位置确定好之后，可选的余地也就不大了。但装"
          }
        ],
        2: [
          {
            "url": "./stageonedetail/stageonedetail?page=2&index=1",
            "image_url": "../../resource/1.jpg",
            "title": "333333",
            "content": "33333有过装修经验的人，往往会说这样一句话：装修比买房还痛苦。这句话其实一点也不夸张，因为买房时，一般会初步确定一个大概位置，位置确定好之后，可选的余地也就不大了。但装"
          },
          {
            "url": "./stageonedetail/stageonedetail?page=2&index=2",
            "image_url": "../../resource/2.jpg",
            "title": "4444444",
            "content": "4444444有过装修经验的人，往往会说这样一句话：装修比买房还痛苦。这句话其实一点也不夸张，因为买房时，一般会初步确定一个大概位置，位置确定好之后，可选的余地也就不大了。但装"
          }
        ]
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 100
      });

      var res_stage = [];
      if((options.page in that.data.infos) && (options.index in that.data.infos[options.page])) {
        res_stage = that.data.infos[options.page][options.index];
      }

      this.setData({
        stage_list: res_stage
      });

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