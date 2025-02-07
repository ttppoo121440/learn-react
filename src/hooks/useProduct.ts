import { useQuery } from '@tanstack/react-query';

import { ProductQueryParamsType } from '@/api/services/adminProductApi/types';
import { productApi } from '@/api/services/productApi';

const productKeys = {
  key: ['product'] as const,
};

export const useGetProducts = (queryParams: ProductQueryParamsType) => {
  return useQuery({
    queryKey: [productKeys.key, queryParams],
    queryFn: async () => {
      const response = await productApi.all(queryParams);
      console.log('response:', response);
      return response;
    },
  });
};

export const useGetProductId = (id: string) => {
  return useQuery({
    queryKey: [productKeys.key],
    queryFn: async () => {
      const response = await productApi.getById(id);
      console.log('response:', response);
      return response.product;
    },
  });
};
