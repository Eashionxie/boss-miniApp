import { getUser } from '../api/common'

const app = getApp()

export default {
  getUserInfo: () => {
    return new Promise((resolve, reject) =>{
      getUser()
        .then(res => {
          app.globalData.userInfo = res.data
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}