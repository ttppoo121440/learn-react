import { z } from 'zod';

export const uploadSchema = z.object({
  file: z
    .union([
      z.string().nullable().optional(),
      z
        .instanceof(File)
        .refine((file) => file.type.startsWith('image/'), {
          message: '必須是有效的圖片文件',
        })
        .optional(),
    ])
    .optional(),
});

export const uploadResponseSchema = z.object({
  success: z.boolean(),
  imageUrl: z.string(),
});
