import axiosClient from '@/api/axiosClient';
import { ProductQueryResponseSchema } from '@/schema/productSchema';
import { safeParseResponse } from '@/utils/zodUtils';

import { ProductQueryParamsType, ProductResponseType } from '../adminProductApi/types';

export const productApi = {
  baseUrl: `/api/${process.env.VITE_BASE_PATH}`,

  all: async ({ page, category }: ProductQueryParamsType) => {
    const response = await axiosClient.get<ProductResponseType>(`${productApi.baseUrl}/products`, {
      params: { page, category },
    });
    const result = safeParseResponse(ProductQueryResponseSchema, response.data);
    return result;
  },
  getById: async (id: string) => {
    const response = await axiosClient.get(`${productApi.baseUrl}/product/${id}`);
    return response.data;
  },
};
