import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { ProductAdapter } from '@/api/adapters/ProductAdapter';
import { adminProductApi } from '@/api/services/adminProductApi';
import { ProductQueryParamsType, ProductVoType } from '@/api/services/adminProductApi/types';
import { MutationResult } from '@/types/mutationTypes';

import { useToast } from './use-toast';

const adminProductKeys = {
  key: ['adminProduct'] as const,
};

const productAdapter = new ProductAdapter();

export const useGetAdminProducts = (queryParams: ProductQueryParamsType) => {
  return useQuery({
    queryKey: [adminProductKeys.key, queryParams],
    queryFn: async () => {
      const response = await adminProductApi.all(queryParams);
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
      return adminProductApi.create(dtoProduct);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [adminProductKeys.key] });
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
      return adminProductApi.update(dtoProduct.id, dtoProduct);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [adminProductKeys.key] });
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
    mutationFn: adminProductApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [adminProductKeys.key] });
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
