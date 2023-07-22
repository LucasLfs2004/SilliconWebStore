import axios from "axios";

export const Api = axios.create({
  baseURL: 'http://0.0.0.0:8080',
  headers: {
    'Content-Type': 'application/json',
  }
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
