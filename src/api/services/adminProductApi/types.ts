import { z } from 'zod';

import {
  ProductQueryResponseSchema,
  BaseProductSchema,
  ProductVoSchema,
  ProductQueryParamsSchema,
} from '@/schema/productSchema';
import { ProductType } from '@/types/productsType';

export interface ProductResponse {
  products: ProductType;
}

export type BaseProductApiType = z.infer<typeof BaseProductSchema>;
export type ProductVoType = z.infer<typeof ProductVoSchema>;
export type ProductResponseType = z.infer<typeof ProductQueryResponseSchema>;
export type ProductQueryParamsType = z.infer<typeof ProductQueryParamsSchema>;
