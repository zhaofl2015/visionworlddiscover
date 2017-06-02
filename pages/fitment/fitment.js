//index.js  
//获取应用实例  
// var app = getApp()
Page({
  data: {
    /** 
        * 页面配置 
        */
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: "0",

    // 导航信息
    nav_list: [
      {
        "title": "第一阶段",
        "name": "方案设计",
        "current_tab": "0"
      },
      {
        "title": "第二阶段",
        "name": "前置订购",
        "current_tab": "1"
      },
      {
        "title": "第三阶段",
        "name": "装修施工",
        "current_tab": "2"
      },
      {
        "title": "第四阶段",
        "name": "成品安装",
        "current_tab": "3"
      },
      {
        "title": "第五阶段",
        "name": "竣工验收",
        "current_tab": "4"
      },
      {
        "title": "第六阶段",
        "name": "开荒保洁",
        "current_tab": "5"
      },
      {
        "title": "第七阶段",
        "name": "家具软装",
        "current_tab": "6"
      },
      {
        "title": "第八阶段",
        "name": "乔迁新居",
        "current_tab": "7"
      }
    ],
    content_list: [
      [
        {
          "title": "第1步：设计准备",
          "steps": [
            {
              "url": "../detailpage/stageone/stageone?page=1&index=1",
              "title": "1、找设计师前的功课"
            },
            {
              "url": "../detailpage/stageone/stageone?page=1&index=2",
              "title": "2、确定装修方式"
            }
          ]
        },
        {
          "title": "第2步：签署合同",
          "steps": [
            {
              "url": "../detailpage/stageone/stageone?page=1&index=3",
              "title": "1、签署设计合同"
            },
            {
              "url": "../detailpage/stageone/stageone?page=1&index=4",
              "title": "2、签署施工合同"
            }
          ]
        }
      ],
      [
        {
          "title": "第1步：设计准备",
          "steps": [
            {
              "url": "../detailpage/stageone/stageone?page=2&index=1",
              "title": "1、找设计师前的功课"
            },
            {
              "url": "../detailpage/stageone/stageone?page=2&index=2",
              "title": "2、确定装修方式"
            }
          ]
        },
        {
          "title": "第2步：签署合同",
          "steps": [
            {
              "url": "../detailpage/stageone/stageone?page=2&index=3",
              "title": "1、签署设计合同"
            },
            {
              "url": "../detailpage/stageone/stageone?page=1&index=4",
              "title": "2、签署施工合同"
            }
          ]
        }
      ],
      [
        {
          "title": "第1步：设计准备",
          "steps": [
            {
              "url": "",
              "title": "1、找设计师前的功课"
            },
            {
              "url": "",
              "title": "2、确定装修方式"
            }
          ]
        },
        {
          "title": "第2步：签署合同",
          "steps": [
            {
              "url": "",
              "title": "1、签署设计合同"
            },
            {
              "url": "",
              "title": "2、签署施工合同"
            }
          ]
        }
      ],
      [
        {
          "title": "第1步：设计准备",
          "steps": [
            {
              "url": "",
              "title": "1、找设计师前的功课"
            },
            {
              "url": "",
              "title": "2、确定装修方式"
            }
          ]
        },
        {
          "title": "第2步：签署合同",
          "steps": [
            {
              "url": "",
              "title": "1、签署设计合同"
            },
            {
              "url": "",
              "title": "2、签署施工合同"
            }
          ]
        }
      ],
      [
        {
          "title": "第1步：设计准备",
          "steps": [
            {
              "url": "",
              "title": "1、找设计师前的功课"
            },
            {
              "url": "",
              "title": "2、确定装修方式"
            }
          ]
        },
        {
          "title": "第2步：签署合同",
          "steps": [
            {
              "url": "",
              "title": "1、签署设计合同"
            },
            {
              "url": "",
              "title": "2、签署施工合同"
            }
          ]
        }
      ],
      [
        {
          "title": "第1步：设计准备",
          "steps": [
            {
              "url": "",
              "title": "1、找设计师前的功课"
            },
            {
              "url": "",
              "title": "2、确定装修方式"
            }
          ]
        },
        {
          "title": "第2步：签署合同",
          "steps": [
            {
              "url": "",
              "title": "1、签署设计合同"
            },
            {
              "url": "",
              "title": "2、签署施工合同"
            }
          ]
        }
      ],
      [
        {
          "title": "第1步：设计准备",
          "steps": [
            {
              "url": "",
              "title": "1、找设计师前的功课"
            },
            {
              "url": "",
              "title": "2、确定装修方式"
            }
          ]
        },
        {
          "title": "第2步：签署合同",
          "steps": [
            {
              "url": "",
              "title": "1、签署设计合同"
            },
            {
              "url": "",
              "title": "2、签署施工合同"
            }
          ]
        }
      ],
      [
        {
          "title": "第1步：设计准备",
          "steps": [
            {
              "url": "",
              "title": "1、找设计师前的功课"
            },
            {
              "url": "",
              "title": "2、确定装修方式"
            }
          ]
        },
        {
          "title": "第2步：签署合同",
          "steps": [
            {
              "url": "",
              "title": "1、签署设计合同"
            },
            {
              "url": "",
              "title": "2、签署施工合同"
            }
          ]
        }
      ]
    ]
  },
  onLoad: function () {
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  switchNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.currentTarget.dataset.current
      })
    }
  }
})  