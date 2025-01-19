import { z } from 'zod';

import { AuthResponseSchema, FormLoginSchema, LoginResponseSchema } from '@/schema/signFlowSchema';

export type LoginResponse = z.infer<typeof LoginResponseSchema>;
export type AuthResponse = z.infer<typeof AuthResponseSchema>;
export type FormLogin = z.infer<typeof FormLoginSchema>;
