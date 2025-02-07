import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { ProductVoType } from '@/api/services/adminProductApi/types';
import { uploadResponseType, uploadSchemaType } from '@/api/services/upload/types';
import { FormFieldConfig } from '@/components/FormRenderer/types';
import { ProductVoSchema } from '@/schema/productSchema';

const initialValues: z.infer<typeof ProductVoSchema> = {
  id: '',
  title: '',
  category: '',
  content: '',
  description: '',
  is_enabled: true,
  origin_price: 0,
  price: 0,
  unit: '',
  imageUrl: '',
  imagesUrl: [''],
  tags: '',
};

const useFormConfig = ({
  uploadImageUrl,
  imageUrlResult,
  uploadImagesUrl,
  imagesUrlResult,
}: {
  uploadImageUrl: (data: uploadSchemaType) => void;
  imageUrlResult?: uploadResponseType;
  uploadImagesUrl: (data: uploadSchemaType) => void;
  imagesUrlResult?: uploadResponseType;
}) => {
  const form = useForm<ProductVoType>({
    resolver: zodResolver(ProductVoSchema),
    defaultValues: initialValues,
  });

  const productFormFields: FormFieldConfig<ProductVoType>[] = [
    {
      label: '產品名稱',
      name: 'title',
      type: 'text',
      required: true,
      placeholder: '請輸入您的產品名稱',
      key: 'title',
    },
    {
      label: '類別',
      name: 'category',
      type: 'text',
      required: true,
      placeholder: '請輸入您的類別',
      key: 'category',
    },
    {
      label: '單位',
      name: 'unit',
      type: 'text',
      required: true,
      placeholder: '請輸入您的單位',
      key: 'unit',
    },
    {
      label: '原價',
      name: 'origin_price',
      type: 'tel',
      placeholder: '請輸入您的原價',
      key: 'origin_price',
    },
    {
      label: '價錢',
      name: 'price',
      type: 'tel',
      placeholder: '請輸入您的價錢',
      key: 'price',
    },
    {
      label: '內容',
      name: 'content',
      type: 'textarea',
      placeholder: '請輸入您的內容',
      key: 'content',
    },
    {
      label: '描述',
      name: 'description',
      type: 'textarea',
      placeholder: '請輸入您的描述',
      key: 'description',
    },
    {
      label: 'Tag',
      name: 'tags',
      type: 'text',
      placeholder: '請輸入商品的Tag',
      key: 'description',
    },
    {
      label: '圖片',
      name: 'imageUrl',
      type: 'file',
      placeholder: '請輸入您的圖片',
      key: 'imageUrl',
      onFileUpload: (file: File) => {
        uploadImageUrl({ file });
      },
    },
    {
      label: '多張圖片',
      name: 'imagesUrl',
      type: 'imagesUrl',
      placeholder: '請輸入您的多張圖片',
      key: 'imagesUrl',
      onFileUpload: (file: File) => {
        uploadImagesUrl({ file });
      },
    },
    {
      label: '是否啟用',
      name: 'is_enabled',
      type: 'switch',
      placeholder: '請輸入您的是否啟用',
      key: 'is_enabled',
    },
  ];

  useEffect(() => {
    if (imageUrlResult?.imageUrl) {
      form.setValue('imageUrl', imageUrlResult.imageUrl);
    }
  }, [imageUrlResult, form]);

  useEffect(() => {
    if (imagesUrlResult?.imageUrl) {
      const currentImages = form.getValues('imagesUrl') || [];
      const validUrls = currentImages.filter((item) => typeof item === 'string' && item.startsWith('http'));
      console.log([...validUrls, imagesUrlResult.imageUrl]);
      form.setValue('imagesUrl', [...validUrls, imagesUrlResult.imageUrl]);
    }
  }, [imagesUrlResult, form]);

  return {
    form,
    initialValues,
    productFormFields,
  };
};

export default useFormConfig;
