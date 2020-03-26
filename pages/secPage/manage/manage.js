// pages/profile/profile.js
import { postUserInfo } from '../../../api/common.js'
import {  addCompany, addJob } from '../../../api/formPost.js'
Page({
  data: {
    sendData: {
      companyName: '捶纸科技',
      financingType: 0,
      companySize: 0,
      companyType: '1',
      companyShortDuce: '平果科技母公司',
      companyIntroduction: 'Thank you for 关注我们，我们一直致力于研发新的技术以提高人们的生活品质',
      welfares: ['周末双休', '免费咖啡', '生育保险'],
      companyAvatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3107860485,4228739328&fm=26&gp=0.jpg',
      companyAlbum: [],
      companyAdresses: [
        {
          fullAddress: '湖北省武汉市东湖高新技术开发区关山街道世贸中心K栋1616',
          shortAddress: '世贸中心K栋1616',
          latlng: {
            latitude: '30.470832',
            longitude: '114.421384'
          },
          country: '中国',
          provience: '湖北省',
          city: '武汉市',
          area: '东湖高新技术开发区',
          street: '关山街道',
          building: '光谷现代世贸中心K栋',
          No: 1616
        }
      ],
      businessInfo: {
        established: new Date('2015-12-12').getTime(),
        registeredCapital: 500,
        legalRepresentative: '张三'
      },
      officeWeb: 'http://m.maguaxie.cn',
      products: [],
      managers: []
    },
    sendData2: {
      companyId: "5e76ddd24e14242e34081942",
      jobName: '前端开发',
      city: '宜昌市',
      minSalary: 8,
      maxSalary: 16,
      salaryType: '',
      workExp: '经验不限',
      eduLeve: '本科',
      publisherId: '5e70bcd5165ef23db4b0dff4',
      detail: `<p>1、熟练掌握 HTML5/CSS3/Javascript/jQuery/React 等前端技术；</p>
<p>2、熟悉各浏览器间 Web 标准实现差异，了解响应式与自适应布局；</p>
<p>3、熟悉前端模块化、组件化、工程化开发，熟练使用 Node 开发前端工具；</p>
<p>4、熟悉常见 Javascript 设计模式，了解 MVC/MVP/MVVM 等架构模式；</p>
<p>6、能根据设计图快速开发出页面交互效果，根据反馈的bug快速响应并立即处理。</p>`,
      tags: ['java', 'springBoot', 'springCloud'],
      exactAddress: {
        name: '湖北省宜都市宜都市一中',
        lat: '30.381483',
        lng: '111.462543'
      }
    },
    sendData3: {
      _id: '5e6c9f8856e12c1ebc03e702',
      companyAvatar: 'http://dl.bbs.9game.cn/attachments/forum/202002/24/163438cmy1qemiieaefmym.png'
    },
    sendData4: {
      _id: '5e70bcd5165ef23db4b0dff4',
      publisherId: 'oC2r15ahI7lpVA4B48QVhDY4dy68'
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