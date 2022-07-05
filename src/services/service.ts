import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:8080',
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  //   'Content-Type': 'application/x-www-form-urlencoded;application/json;charset=utf-8',
  // },
});

// productService.interceptors.request.use(async (config) => {
//   // Declaramos um token manualmente para teste.
//   const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9';

//   if (token) {
//     productService.defaults.headers.authorization = `Bearer ${token}`;
//   }

//   return config;
// });

export default service;
