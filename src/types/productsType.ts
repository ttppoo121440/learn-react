type Is_enabledType = 0 | 1;

export type OnchangeType = (product: ProductType) => void;

export interface ProductType {
  id: string;
  category: string;
  content: string;
  description: string;
  is_enabled: Is_enabledType;
  origin_price: number;
  price: number;
  title: string;
  unit: string;
  num: number;
  imageUrl: string;
  imagesUrl: string[];
}

export interface ProductListProps {
  products: ProductType;
  setDetailProduct: OnchangeType;
}

export type DetailProductProps = Omit<ProductListProps, 'setDetailProduct'>;
