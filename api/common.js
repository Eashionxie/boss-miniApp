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
  return request('/mini-api/file/file-upload', data, 'post')
}

export function getFile (data) {
  return request('/api/file', data)
}