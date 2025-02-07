import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { cartApi } from '@/api/services/cartApi';
import { postCartType } from '@/api/services/cartApi/types';

import { useToast } from './use-toast';

const cartKeys = {
  key: ['cart'] as const,
};

export const useGetCart = () => {
  return useQuery({
    queryKey: [cartKeys.key],
    queryFn: async () => {
      const response = await cartApi.all();
      console.log(response);
      return response.data;
    },
  });
};

export const usePostCartMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: cartApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [cartKeys.key] });
      toast({
        description: '新增購物車成功!',
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

export const useUpdateCartMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: postCartType }) => {
      return cartApi.update(id, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [cartKeys.key] });
      toast({
        description: '修改購物車成功!',
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

export const useDeleteCartMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: cartApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [cartKeys.key] });
      toast({
        description: '移除購物車成功!',
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

export const useDeleteAllCartMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: cartApi.deleteAll,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [cartKeys.key] });
      toast({
        description: '移除所有購物車成功!',
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
