import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { ProductAdapter } from '@/api/adapters/ProductAdapter';
import { productApi } from '@/api/services/product';
import { ProductQueryParamsType, ProductVoType } from '@/api/services/product/types';
import { MutationResult } from '@/types/mutationTypes';

import { useToast } from './use-toast';

const productKeys = {
  key: ['UserNews'] as const,
};

const productAdapter = new ProductAdapter();

export const useGetProducts = (queryParams: ProductQueryParamsType) => {
  return useQuery({
    queryKey: [productKeys.key, queryParams],
    queryFn: async () => {
      const response = await productApi.all(queryParams);
      const adaptedProducts = response.products.map((product) => productAdapter.dtoToVo(product));
      console.log('adaptedProducts:', adaptedProducts);
      return {
        ...response,
        products: adaptedProducts,
      };
    },
  });
};

export const usePostProductMutation = (): MutationResult<ProductVoType> => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (newProduct: ProductVoType) => {
      const dtoProduct = productAdapter.voToDto(newProduct);
      return productApi.create(dtoProduct);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [productKeys.key] });
      toast({
        description: '新增成功!',
      });
    },
    onError: (error) => {
      console.error('Error:', error);
      toast({
        variant: 'destructive',
        description: error.message,
      });
    },
  });
};

export const useUpdateProductMutation = (): MutationResult<ProductVoType> => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (newProduct: ProductVoType) => {
      const dtoProduct = productAdapter.voToDto(newProduct);
      return productApi.update(dtoProduct.id, dtoProduct);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [productKeys.key] });
      toast({
        description: '修改成功!',
      });
    },
    onError: (error) => {
      console.error('Error:', error);
      toast({
        variant: 'destructive',
        description: error.message,
      });
    },
  });
};

export const useDeleteProductMutation = (): MutationResult<ProductVoType['id']> => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: productApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [productKeys.key] });
      toast({
        description: '刪除成功!',
      });
    },
    onError: (error) => {
      console.error('Error:', error);
      toast({
        variant: 'destructive',
        description: error.message,
      });
    },
  });
};
