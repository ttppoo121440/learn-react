import { FormProvider } from 'react-hook-form';

import { FormLogin } from '@/api/services/signFlow/types';
import FormRenderer from '@/components/FormRenderer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useSigInMutation } from '@/hooks/useSignFlow';
import { cn } from '@/lib/utils';

import useFormConfig from './formConfig';

const Login = () => {
  const { form, loginFormFields } = useFormConfig();
  const { mutate: sigIn } = useSigInMutation();

  const handleSubmit = async (data: FormLogin) => {
    sigIn(data);
  };

  return (
    <div className="container mx-auto flex h-screen items-center justify-center">
      <div className={cn('flex w-96 flex-col  gap-6')}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              <h1>登入</h1>
            </CardTitle>
            <CardDescription>在下面輸入您的電子郵件以登入您的帳戶</CardDescription>
          </CardHeader>
          <CardContent>
            <FormProvider {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} noValidate>
                <FormRenderer<FormLogin> FormFields={loginFormFields} methods={form} />
                <Button type="submit">登入</Button>
              </form>
            </FormProvider>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
