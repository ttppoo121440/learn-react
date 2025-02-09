import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { orderPostType } from '@/api/services/orderApi/types';
import { FormFieldConfig } from '@/components/FormRenderer/types';
import { postOrderSchema } from '@/schema/orderSchema';

const initialValues: z.infer<typeof postOrderSchema> = {
  name: '',
  email: '',
  tel: '',
  address: '',
  message: '',
};

const productFormFields: FormFieldConfig<orderPostType>[] = [
  {
    label: '姓名',
    name: 'name',
    type: 'text',
    required: true,
    placeholder: '請輸入您的姓名',
    key: 'name',
  },
  {
    label: '信箱',
    name: 'email',
    type: 'text',
    required: true,
    placeholder: '請輸入您的email',
    key: 'email',
  },
  {
    label: '電話',
    name: 'tel',
    type: 'tel',
    required: true,
    placeholder: '請輸入您的電話',
    key: 'tel',
  },
  {
    label: '地址',
    name: 'address',
    type: 'text',
    required: true,
    placeholder: '請輸入您的地址',
    key: 'address',
  },
  {
    label: '留言',
    name: 'message',
    type: 'textarea',
    placeholder: '請輸入您的留言',
    key: 'message',
  },
];

const useFormConfig = () => {
  const form = useForm<orderPostType>({
    resolver: zodResolver(postOrderSchema),
    defaultValues: initialValues,
  });

  return {
    form,
    initialValues,
    productFormFields,
  };
};

export default useFormConfig;
