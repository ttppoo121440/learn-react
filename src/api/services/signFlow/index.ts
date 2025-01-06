import { AuthResponse, FormLogin, LoginResponse } from './types';
import axiosClient from '@/api/axiosClient';

export const signFlowApi = {
  isCheckAuth: async () => {
    const response = await axiosClient.post<AuthResponse>(`/api/user/check`);
    return response.data;
  },
  signIn: async (user: FormLogin) => {
    const response = await axiosClient.post<LoginResponse>(
      `admin/signin`,
      user,
    );
    return response.data;
  },
};
