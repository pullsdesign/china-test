import axios from 'axios';
import Config from '../config';

const get = (path = '', config?: any) => {
  return axios.get(`${Config.APi}/${path}`, config);
};

const post = (path = '', data = {}) => {
  return axios.post(`${Config.APi}/${path}`, data);
};
// :TODO Have to be universal fo all requests, bcs in this case data.name could be undefined and we'll have an err
const postData = (path = '', data: any = {}, files = []) => {
  const formData = new FormData();
  formData.append('data', JSON.stringify(data));
  files.length > 1
    ? files.forEach((file, index) => {
      formData.append(data.name + index + 1, file);
    })
    : formData.append(data.name, files[0]);

  return axios.post(`${Config.APi}/${path}`, formData);
};

const del = (path = '') => {
  return axios.delete(`${Config.APi}/${path}`);
};

const put = (path = '', data = {}) => {
  return axios.put(`${Config.APi}/${path}`, data);
};
// :TODO Have to be universal fo all requests, bcs in this case data.name could be undefined and we'll have an err
const putData = (path = '', data: any = {}, files = []) => {
  const formData = new FormData();
  formData.append('data', JSON.stringify(data));
  files.length > 1
    ? files.forEach((file, index) => {
      formData.append(data.name + index + 1, file);
    })
    : formData.append(data.name, files[0]);

  return axios.put(`${Config.APi}/${path}`, formData);
};

export default {
  get,
  post,
  postData,
  del,
  put,
  putData,
};
