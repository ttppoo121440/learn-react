import { z } from 'zod';

export const LoginResponseSchema = z.object({
  expired: z.number(),
  token: z.string(),
  uid: z.string(),
  username: z.string(),
  success: z.boolean(),
});

export const AuthResponseSchema = z.object({
  success: z.boolean(),
  uid: z.string(),
});

export const FormLoginSchema = z.object({
  username: z.string().email({
    message: '請輸入有效的電子郵件地址',
  }),
  password: z.string().nonempty('密碼不可為空'),
});
