import axiosClient from '@/api/axiosClient';
import { cartApiResponseSchema } from '@/schema/cartSchema';
import { safeParseResponse } from '@/utils/zodUtils';

import { cartApiResponseType, postCartType } from './types';

export const cartApi = {
  baseUrl: `/api/${process.env.VITE_BASE_PATH}/cart`,
  all: async () => {
    const response = await axiosClient.get<cartApiResponseType>(`${cartApi.baseUrl}`);
    console.log('DTO API:', response.data);
    const result = safeParseResponse(cartApiResponseSchema, response.data);

    return result;
  },
  create: async (cartItem: postCartType) => {
    const data = {
      data: cartItem,
    };
    const response = await axiosClient.post(`${cartApi.baseUrl}`, data);
    console.log(response.data);
    return response.data;
  },
  update: async (id: string, cartItem: postCartType) => {
    const data = {
      data: cartItem,
    };
    const response = await axiosClient.put(`${cartApi.baseUrl}/${id}`, data);
    console.log(response.data);
    return response.data;
  },
  delete: async (id: string) => {
    const response = await axiosClient.delete(`${cartApi.baseUrl}/${id}`);
    return response.data;
  },
  deleteAll: async () => {
    const response = await axiosClient.delete(`${cartApi.baseUrl}s`);
    return response.data;
  },
};
