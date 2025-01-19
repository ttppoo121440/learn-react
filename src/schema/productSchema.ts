import { z } from 'zod';

export const BaseProductSchema = z.object({
  id: z.string(),
  category: z.string().nonempty('產品類別不能為空'),
  content: z.string(),
  description: z.string(),
  is_enabled: z.union([z.literal(0), z.literal(1)]),
  title: z.string().nonempty('產品名稱不能為空'),
  unit: z.string().nonempty('產品單位不能為空'),
  origin_price: z.number().nonnegative({ message: '必須是非負數' }),
  price: z.number().nonnegative({ message: '必須是非負數' }),
  num: z.number().optional(),
  imageUrl: z.string(),
  imagesUrl: z.array(z.string()).optional(),
});

export const ProductVoSchema = BaseProductSchema.extend({
  is_enabled: z.boolean(),
});

export const ProductQueryParamsSchema = z.object({
  page: z.number().optional(),
  category: z.string().optional(),
});

export const ProductQueryResponseSchema = z.object({
  success: z.boolean(),
  products: z.array(BaseProductSchema),
  message: z.string().optional(),
  pagination: z.object({
    category: z.string(),
    current_page: z.number(),
    has_next: z.boolean(),
    has_pre: z.boolean(),
    total_pages: z.number(),
  }),
});
