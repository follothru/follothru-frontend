import rp from 'request-promise';
import { getAuthToken } from '../utils/storageUtils';

const getBearerToken = () => `Bearer ${getAuthToken()}`;

export const post = (url, body, headers = {}) => {
  const options = {
    url,
    body,
    headers,
    json: true
  };
  return rp.post(options);
};

export const get = (url, headers = {}) => {
  const options = {
    url,
    headers,
    json: true
  };
  return rp.get(options);
};

export const authGet = (url, headers = {}) => {
  headers = Object.assign({}, headers, { Authorization: getBearerToken() });
  return get(url, headers);
};

export const authPost = (url, body, headers = {}) => {
  headers = Object.assign({}, headers, { Authorization: getBearerToken() });
  return post(url, body, headers);
};
