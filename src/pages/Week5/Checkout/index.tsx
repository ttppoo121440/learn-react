import { FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { orderPostType } from '@/api/services/orderApi/types';
import ClipLoading from '@/components/ClipLoading';
import FormRenderer from '@/components/FormRenderer';
import { Button } from '@/components/ui/button';
import { usePostOrderMutation } from '@/hooks/useOrder';

import useFormConfig from './formConfig';

const Checkout = () => {
  const { form, productFormFields } = useFormConfig();
  const { mutate: createOrder, isPending } = usePostOrderMutation();
  const navigate = useNavigate();

  const onSubmit = (date: orderPostType) => {
    createOrder(date);
    navigate('/week5');
  };

  if (isPending) {
    return <ClipLoading loading={isPending} global />;
  }

  return (
    <div className="container ">
      <h1 className="my-10 text-center text-5xl">結帳</h1>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="mx-auto w-96">
          <FormRenderer FormFields={productFormFields} methods={form} />
          <Button type="submit">送出</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Checkout;
