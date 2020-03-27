// pages/profile/profile.js
import { postUserInfo } from '../../../api/common.js'
import {  addCompany, addJob } from '../../../api/formPost.js'
Page({
  data: {
    sendData: {
      companyName: '公司名称',
      financingType: 0,
      companySize: 0,
      companyType: '1',
      companyShortDuce: '公司简介',
      companyIntroduction: '公司介绍',
      welfares: ['公司福利'],
      companyAvatar: '公司logo(可用于http访问的图片url)',
      companyAlbum: ['公司相册'],
      companyAdresses: [
        {
          fullAddress: '公司详细地址',
          shortAddress: '公司地址缩写',
          latlng: {
            latitude: '公司定位纬度',
            longitude: '公司定位经度'
          },
          country: '公司所在国家',
          provience: '公司所在省份',
          city: '公司所在城市',
          area: '公司所在区',
          street: '公司所在街道',
          building: '公司所在具体建筑物',
          No: '公司门牌号码'
        }
      ],
      businessInfo: {
        established: new Date('2015-12-12').getTime(), // 公司成立时间
        registeredCapital: 500, // 注册资金 （单位：万）
        legalRepresentative: '公司法人代表'
      },
      officeWeb: 'http://m.maguaxie.cn', // 公司官方网站
      products: [],
      managers: []
    },
    sendData2: {
      companyId: "公司ID（由服务器返回）",
      jobName: '岗位名称',
      city: '所在城市',
      minSalary: 8,
      maxSalary: 16,
      salaryType: '',
      workExp: '经验不限',
      eduLeve: '本科',
      publisherId: '发布人ID',
      detail: `岗位详情描述`,
      tags: ['岗位标签'],
      exactAddress: {
        name: '具体地址',
        lat: '纬度',
        lng: '经度'
      }
    }
  },
  onLoad: function (options) {
    
  },
  _addCompany: function() {
    addCompany(this.data.sendData).then(res => {
      console.log(res)
    })
  },
  _addJob: function() {
    addJob(this.data.sendData2)
  }
})