import axiosClient from '@/api/axiosClient';

import { orderPostType } from './types';

export const orderApi = {
  baseUrl: `/api/${process.env.VITE_BASE_PATH}/order`,
  create: async (orderData: orderPostType) => {
    const data = {
      data: {
        user: orderData,
        message: orderData.message,
      },
    };
    const response = await axiosClient.post(`${orderApi.baseUrl}`, data);
    console.log(response.data);
    return response.data;
  },
};
