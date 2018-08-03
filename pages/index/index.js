import MockData from './mockdata.js'
import {
  formatTime
} from '../../utils/util.js'

Page({
  data: {
    currentDate: '',
    username: '张三',
    list: ''
  },
  
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '工资查询',
    })
    //设置当前年月
    this.setCurrentDate()
    this._getSalary()
  },

  setCurrentDate(){
    //获取当前年月
    let date = new Date()
    let fmtDate = formatTime(date).substring(0, 7)
    this.setData({
      currentDate: fmtDate,
    })
    console.log(fmtDate)
  },

  //日期变化回调
  dateChange(res) {
    console.log(res)
    let value = res.detail.value
    this.setData({
      currentDate: value
    })
    //请求数据
    this._getSalary()
  },

  //模拟请求数据
  _getSalary(){
    this.setData({
      list: MockData.data
    })
  }
  
})
