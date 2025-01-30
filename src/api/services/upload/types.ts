import { z } from 'zod';

import { uploadResponseSchema, uploadSchema } from '@/schema/uploadSchema';

export type uploadSchemaType = z.infer<typeof uploadSchema>;
export type uploadResponseType = z.infer<typeof uploadResponseSchema>;
