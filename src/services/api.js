// import qs from 'qs';
import request from '../utils/request';

export async function getList(params) {
  return request(`/api/openapi/eventreport?mediaType=${params.mediaType}&pageNum=${params.pageNum}&pageSize=10`);
}

export async function create(params) {
  return request(`/api/permissions`, {
    method: 'POST',
    body: JSON.stringify(params),
  });
}

export async function remove(params) {
  return request(`/api/permissions/${params.id}`, {
    method: 'DELETE',
  });
}

export async function update(params) {
  return request(`/api/permissions/${params.id}`, {
    method: 'PATCH',
    body: JSON.stringify(params),
  });
}