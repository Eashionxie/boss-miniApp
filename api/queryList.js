import request from '../utils/request.js';

export function getJobList(data) {
  return request('/mini-api/job/get-job-list', data)
}

export function getJobDetail(data) {
  return request('/mini-api/job/get-jobInfo', data)
}