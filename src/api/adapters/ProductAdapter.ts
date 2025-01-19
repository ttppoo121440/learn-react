import { BaseProductApiType, ProductVoType } from '@/api/services/product/types';
import { BaseProductSchema, ProductVoSchema } from '@/schema/productSchema';
import { BaseAdapter } from '@/utils/Adapter';
export class ProductAdapter extends BaseAdapter<BaseProductApiType, ProductVoType> {
  protected schema = BaseProductSchema;
  protected voSchema = ProductVoSchema;

  dtoToVo(data: BaseProductApiType): ProductVoType {
    try {
      const validatedData = this.validateDto(data);
      return {
        ...validatedData,
        is_enabled: validatedData.is_enabled === 1,
      };
    } catch (error) {
      console.error('dtoToVo 發生錯誤:', error);
      throw new Error('DTO 轉 VO 失敗');
    }
  }

  voToDto(data: ProductVoType): BaseProductApiType {
    try {
      const validatedData = this.validateVo(data);
      return {
        ...validatedData,
        is_enabled: validatedData.is_enabled ? 1 : 0,
      };
    } catch (error) {
      console.error('voToDto 發生錯誤:', error);
      throw new Error('VO 轉 DTO 失敗');
    }
  }
}
