// import qs from 'qs';
import request from '../utils/request';

// export async function getList(params) {
//   return request(`/api/openapi/eventreport?mediaType=${params.mediaType}&pageNum=${params.pageNum}&pageSize=10`);
// }
const getList = async function (params) {
  return request(`/api/openapi/eventreport?mediaType=${params.mediaType}&pageNum=${params.pageNum}&pageSize=10`);
}
// export async function postReport(params) {
//   return request(`/api/openapi/eventreport/eventreport`, {
//     method: 'POST',
//     body: params
//   });
// }
const postReport = async function (params) {
  return request(`/api/openapi/eventreport/eventreport`, {
    method: 'POST',
    body: params
  });
}

// export async function upload(params) {
//   return request(`/api/openapi/eventreport/file`, {
//     method: 'post',
//     heades: {
//       "Content-Type": "multipart/form-data"
//     },
//     body: params
//   });
// }
const upload =  async function (params) {
  return request(`/api/openapi/eventreport/file`, {
    method: 'post',
    heades: {
      "Content-Type": "multipart/form-data"
    },
    body: params
  });
}

export default {upload,postReport,getList}