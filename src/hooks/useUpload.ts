import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { uploadApi } from '@/api/services/upload';
import { uploadResponseType, uploadSchemaType } from '@/api/services/upload/types';

import { useToast } from './use-toast';

export const useUploadMutation = (): UseMutationResult<uploadResponseType, AxiosError, uploadSchemaType, unknown> => {
  const { toast } = useToast();
  return useMutation({
    mutationFn: uploadApi.create,
    onSuccess: () => {
      toast({
        description: '上傳成功!',
      });
    },
    onError: (error) => {
      console.error('Error creating News:', error);
      toast({
        variant: 'destructive',
        description: error.message,
      });
    },
  });
};
