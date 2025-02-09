import { useMutation, useQueryClient } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

import { signFlowApi } from '@/api/services/signFlow';

import { useToast } from './use-toast';

const signFlowKeys = {
  key: ['signFlow'] as const,
};

export const useSigInMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: signFlowApi.signIn,
    onSuccess: (result) => {
      queryClient.invalidateQueries({ queryKey: [signFlowKeys.key] });
      if (result.success) {
        Cookies.set('react-token', result.token);
        navigate('/week3');
      }
      toast({
        description: '登入成功!',
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

export const useIsCheckAuthMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: signFlowApi.isCheckAuth,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [signFlowKeys.key] });
      toast({
        description: '已登入!',
      });
      navigate('/week3');
    },
    onError: (error) => {
      console.error('Error:', error);
    },
  });
};

export const useLogOutMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: signFlowApi.logout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [signFlowKeys.key] });
      Cookies.remove('react-token');
      navigate('/');
      toast({
        description: '登出成功!',
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
