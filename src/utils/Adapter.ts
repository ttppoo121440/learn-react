import { ZodType } from 'zod';

export abstract class BaseAdapter<TInput, TOutput> {
  protected abstract schema: ZodType<TInput>;
  protected abstract voSchema: ZodType<TOutput>;

  abstract dtoToVo(data: TInput): TOutput;
  abstract voToDto(data: TOutput): TInput;

  validateDto(data: TInput): TInput {
    const parseResult = this.schema.safeParse(data);
    if (!parseResult.success) {
      console.error('DTO 資料驗證失敗:', parseResult.error.errors);
      throw new Error('DTO 資料驗證失敗');
    }
    return parseResult.data;
  }

  validateVo(data: TOutput): TOutput {
    const parseResult = this.voSchema.safeParse(data);
    if (!parseResult.success) {
      console.error('VO 資料驗證失敗:', parseResult.error.errors);
      throw new Error('VO 資料驗證失敗');
    }
    return parseResult.data;
  }
}
