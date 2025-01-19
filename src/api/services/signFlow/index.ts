import axiosClient from '@/api/axiosClient';

import { AuthResponse, FormLogin, LoginResponse } from './types';

export const signFlowApi = {
  isCheckAuth: async () => {
    const response = await axiosClient.post<AuthResponse>(`/api/user/check`);
    return response.data;
  },
  signIn: async (user: FormLogin) => {
    const response = await axiosClient.post<LoginResponse>(`admin/signin`, user);
    return response.data;
  },
  logout: async () => {
    const response = await axiosClient.post(`/logout`);
    return response.data;
  },
};
