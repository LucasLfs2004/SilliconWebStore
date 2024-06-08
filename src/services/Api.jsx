import axios from 'axios';
import { api_path } from '../constants/api_path';

export const Api = axios.create({
  baseURL: api_path,
});

// Api.interceptors.request.use(
//   config => {
//     const user = getUserLocalStorage();
//     if (user === undefined || user === null) {
//       delete config.headers.Authorization;
//       return config;
//     }

//     config.headers.Authorization = `Bearer ${user}`;
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   },
// );
