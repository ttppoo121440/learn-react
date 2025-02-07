import { z } from 'zod';

import { cartApiResponseSchema, CartItemSchema, postCartSchema } from '@/schema/cartSchema';

export type cartApiResponseType = z.infer<typeof cartApiResponseSchema>;
export type postCartType = z.infer<typeof postCartSchema>;
export type CartItemType = z.infer<typeof CartItemSchema>;
