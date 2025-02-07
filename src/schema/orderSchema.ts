import { z } from 'zod';

export const postOrderSchema = z.object({
  name: z.string().nonempty('姓名不能為空'),
  email: z.string().email('請輸入正確信箱格式').nonempty('信箱不能為空'),
  tel: z.preprocess((val) => String(val), z.string().regex(/^\d{10}$/, '電話號碼必須是 10 碼數字')),
  address: z.string().nonempty('地址不能為空'),
  message: z.string().optional(),
});
