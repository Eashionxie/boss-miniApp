import request from '../utils/request.js';

export function authApi (data) {
  return request('/mini-api/user/get-openid', data)
}

export function getUser () {
  return request('/mini-api/user/get-info')
}

export function postUserInfo (data) {
  return request('/mini-api/user/post-user', data, 'post')
}

export function uploadFile (data) {
  return request('/mini-api/common/file-upload', data, 'post')
}

export function coordinate2Address (data) {
  return request('/mini-api/common/address-by-coordinate', data)
}