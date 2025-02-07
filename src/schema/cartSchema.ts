import { z } from 'zod';

export const postCartSchema = z.object({
  product_id: z.string(),
  qty: z.number(),
});

export const couponSchema = z.object({
  code: z.string(),
  due_date: z.number(),
  id: z.string(),
  is_enabled: z.number(),
  percent: z.number(),
  title: z.string(),
});

export const productSchema = z.object({
  category: z.string(),
  content: z.string(),
  description: z.string(),
  id: z.string(),
  imageUrl: z.string(),
  imagesUrl: z.array(z.string().optional()),
  is_enabled: z.number(),
  origin_price: z.number(),
  price: z.number(),
  title: z.string(),
  unit: z.string(),
});

export const CartItemSchema = z.object({
  coupon: couponSchema.optional(),
  final_total: z.number(),
  id: z.string(),
  product: productSchema,
  product_id: z.string(),
  qty: z.number(),
  total: z.number(),
});

export const CartDataSchema = z.object({
  carts: z.array(CartItemSchema),
  total: z.number(),
  final_total: z.number(),
});

export const cartApiResponseSchema = z.object({
  success: z.boolean(),
  data: CartDataSchema,
  messages: z.array(z.string()),
});
