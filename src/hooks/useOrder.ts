import { useMutation, useQueryClient } from '@tanstack/react-query';

import { orderApi } from '@/api/services/orderApi';

import { useToast } from './use-toast';

const orderKeys = {
  key: ['order'] as const,
};

export const usePostOrderMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: orderApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [orderKeys.key] });
      toast({
        description: '已送出訂單!',
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
