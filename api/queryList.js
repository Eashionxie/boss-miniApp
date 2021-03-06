import request from '../utils/request.js';

export function getJobList(data) {
  return request('/mini-api/job/get-job-list', data)
}

export function getJobTypes() {
  return request('/mini-api/job/get-job-types')
}

export function getJobDetail(data) {
  return request('/mini-api/job/get-jobInfo', data)
}

export function getSearchHistory(data) {
  return request('/mini-api/user/history-search', data)
}
