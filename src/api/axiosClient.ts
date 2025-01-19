import axios, { AxiosError, AxiosResponse } from 'axios';
import cookies from 'js-cookie';

const userCookie = cookies.get('react-token');

const axiosClient = axios.create({
  baseURL: process.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    ...(userCookie && { Authorization: userCookie }),
  },
});

const goTOLogin = (error: AxiosError) => {
  const status = error?.response?.status || null;
  if (status === 401) {
    if (typeof window !== 'undefined') {
      window.location.href = '/#login';
    }
  }
};

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      goTOLogin(error);
      return Promise.reject(error.response.data);
    } else {
      goTOLogin(error);
      return Promise.reject(error);
    }
  },
);

export default axiosClient;
