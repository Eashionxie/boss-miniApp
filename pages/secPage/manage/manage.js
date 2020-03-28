// pages/profile/profile.js
import { postUserInfo } from '../../../api/common.js'
import {  addCompany, addJob } from '../../../api/formPost.js'
Page({
  data: {
    sendData: {
      companyName: '腾讯科技',
      financingType: 0,
      companySize: 0,
      companyType: '1',
      companyShortDuce: '腾讯',
      companyIntroduction: '手机腾讯网是腾讯公司的手机门户网站，是国内手机门户网站。基于腾讯网的资源优势，可以拿着手机随时随地享受互联网的各样资讯以及重大赛事直播。',
      welfares: ['公司福利'],
      companyAvatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585315537034&di=70555fedf30d38d189d6bf3aa5c6ae6e&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fbaike%2Fpic%2Fitem%2Fb21c8701a18b87d6774a25ff0d0828381e30fdc2.jpg',
      companyAlbum: [],
      companyAdresses: [
        {
          fullAddress: '深圳市南山区高新科技园中区一路腾讯大厦',
          shortAddress: '腾讯大厦',
          latlng: {
            latitude: '22.540503',
            longitude: '113.934528'
          },
          country: '中国',
          provience: '广东',
          city: '深圳',
          area: '南山区',
          street: '深南大道',
          building: '腾讯大厦',
          No: 10000
        }
      ],
      businessInfo: {
        established: new Date('1998-11-11').getTime(), // 公司成立时间
        registeredCapital: 6500, // 注册资金 （单位：万）
        legalRepresentative: '马化腾'
      },
      officeWeb: 'http://www.tencent.com/', // 公司官方网站
      products: [],
      managers: []
    },
    sendData2: {
      companyId: "5e7dd8c3e829356d5b5957ae",
      jobName: 'web前端开发',
      city: '深圳',
      minSalary: 16,
      maxSalary: 20,
      salaryType: '13薪',
      workExp: '3-5年',
      eduLeve: '本科',
      publisherId: '5e7ddb86e829356d5b5957b1',
      detail: `<p>1.3年以上前端开发经验，负责过大型web项目，能够运用web前端技术构建高性能应用程序；</p>
<p>2.熟悉H5、CSS3,精通JavaScript，熟悉ES6/ES7标准；</p>
<p>3.熟悉vue，react，Angular等任意一种现代前端框架并理解其原理；</p>
<p>4.热爱前端技术，注重代码质量；有框架设计能力者优先，熟悉任意一门后端语言者优先；</p>
<p>5.有团队精神、善于沟通、有责任心、执行能力强。</p>
<p>提供极致高性能 Web 服务，海量运营；</p>
<p>探索 Web 和后台、客户端相结合的最佳实践方案，持续优化性能；</p>
<p>前端效率工具开发 & 工作流优化。</p>
<p>计算机专业或相关专业大学本科以上学历，2年以上工作经验； 熟悉 Javascript/CSS 及主流前端类库、框架、工具，如 jQuery，React，Vue 等，有框架开发或贡献经验者优先；</p>
<p>熟悉 ES6/HTML5/CSS3 等新技术，对 JS 新特性、响应式布局、Web 动画等有深刻理解和使用经验者优先；</p>
<p>有大型 Web 前端项目开发和维护经验者优先； 有 Web 富文本编辑开发经验，有多人实时 Web 系统</p>
<p>开发经验者优先 热爱分享，开源，有开源项目维护经验优先；</p>
<p>掌握至少一门服务器端编程语言，熟悉 HTTP、HTTPS 等常见网络协议，有服务器运维经验者优先。</p>
<p>如果你觉得自己足够优秀，前面所有条件都可以忽略，直接联系我，我们先聊聊</p>`,
      tags: ['Typescript', 'Vue', 'Node.js', 'http协议'],
      exactAddress: {
        name: '深圳南山区腾讯公司总部12楼',
        lat: '22.540503',
        lng: '113.934528'
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