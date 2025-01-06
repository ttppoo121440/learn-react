import axiosClient from '@/api/axiosClient';
import { ProductResponse } from './types';

export const productApi = {
  all: async () => {
    const response = await axiosClient.get<ProductResponse>(
      `/api/${process.env.VITE_BASE_PATH}/products/all`,
    );
    return response.data;
  },
};
