import { z } from 'zod';

import { postOrderSchema } from '@/schema/orderSchema';

export type orderPostType = z.infer<typeof postOrderSchema>;
