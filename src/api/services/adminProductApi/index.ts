import axiosClient from '@/api/axiosClient';
import { ProductQueryResponseSchema } from '@/schema/productSchema';
import { safeParseResponse } from '@/utils/zodUtils';

import { BaseProductApiType, ProductQueryParamsType, ProductResponseType } from './types';

export const adminProductApi = {
  baseUrl: `/api/${process.env.VITE_BASE_PATH}/admin`,
  all: async ({ page, category }: ProductQueryParamsType) => {
    const response = await axiosClient.get<ProductResponseType>(`${adminProductApi.baseUrl}/products`, {
      params: { page, category },
    });
    const result = safeParseResponse(ProductQueryResponseSchema, response.data);
    console.log('DTO API:', result);
    return result;
  },
  create: async (product: BaseProductApiType) => {
    const data = {
      data: product,
    };
    const response = await axiosClient.post(`${adminProductApi.baseUrl}/product`, data);
    console.log(response.data);

    return response.data;
  },
  update: async (id: string, product: BaseProductApiType) => {
    const data = {
      data: product,
    };
    const response = await axiosClient.put(`${adminProductApi.baseUrl}/product/${id}`, data);
    console.log(response.data);
    return response.data;
  },
  delete: async (id: string) => {
    const response = await axiosClient.delete(`${adminProductApi.baseUrl}/product/${id}`);
    return response.data;
  },
};
