import axios, { AxiosError, AxiosResponse } from 'axios';
import cookies from 'js-cookie';

const axiosClient = axios.create({
  baseURL: process.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const userCookie = cookies.get('react-token');
    if (userCookie) {
      config.headers.Authorization = userCookie;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      return Promise.reject(error.response.data);
    } else {
      return Promise.reject(error);
    }
  },
);

export default axiosClient;
