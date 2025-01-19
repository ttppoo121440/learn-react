import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { FormLogin } from '@/api/services/signFlow/types';
import { FormFieldConfig } from '@/components/FormRenderer/types';
import { FormLoginSchema } from '@/schema/signFlowSchema';

const initialValues: z.infer<typeof FormLoginSchema> = {
  username: '',
  password: '',
};

const loginFormFields: FormFieldConfig<FormLogin>[] = [
  {
    label: '信箱',
    name: 'username',
    type: 'email',
    required: true,
    placeholder: 'test@gmail.com',
    key: 'username',
  },
  {
    label: '密碼',
    name: 'password',
    type: 'password',
    required: true,
    placeholder: '請輸入您的密碼',
    key: 'password',
  },
];

const useFormConfig = () => {
  const form = useForm<FormLogin>({
    resolver: zodResolver(FormLoginSchema),
    defaultValues: initialValues,
  });

  return {
    form,
    initialValues,
    loginFormFields,
  };
};

export default useFormConfig;
