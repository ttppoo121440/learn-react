import { ProductListProps } from '@/types/productsType';
import { Button } from './ui/button';

const ProductList = ({ products, setDetailProduct }: ProductListProps) => {
  return (
    <>
      <tr key={products.id} className="hover:bg-gray-50">
        <td className="border border-gray-200 px-4 py-2">{products.title}</td>
        <td className="border border-gray-200 px-4 py-2">
          {products.origin_price}
        </td>
        <td className="border border-gray-200 px-4 py-2">{products.price}</td>
        <td className="border border-gray-200 px-4 py-2">
          {products.is_enabled ? (
            <span className="text-primary">啟用</span>
          ) : (
            <span className="text-red-600">未啟用</span>
          )}
        </td>
        <td className="border border-gray-200 px-4 py-2">
          <Button onClick={() => setDetailProduct(products)}>查看細節</Button>
        </td>
      </tr>
    </>
  );
};

export default ProductList;
