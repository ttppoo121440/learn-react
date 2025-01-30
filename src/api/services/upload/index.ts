import axiosClient from '@/api/axiosClient';

import { uploadResponseType, uploadSchemaType } from './types';

export const uploadApi = {
  baseUrl: `/api/${process.env.VITE_BASE_PATH}/admin/upload`,
  MULTIPART_HEADERS: {
    'Content-Type': 'multipart/form-data',
  },
  createFormData: (data: uploadSchemaType) => {
    const formData = new FormData();
    if (data.file) {
      formData.append('file', data.file);
    }
    return formData;
  },
  create: async (data: uploadSchemaType) => {
    uploadApi.createFormData(data);
    const response = await axiosClient.post<uploadResponseType>(uploadApi.baseUrl, data, {
      headers: uploadApi.MULTIPART_HEADERS,
    });
    return response.data;
  },
};
