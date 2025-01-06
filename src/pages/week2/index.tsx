import { productApi } from '@/api/services/product';
import { signFlowApi } from '@/api/services/signFlow';
import DetailProduct from '@/components/DetailProduct';
import { LoginForm } from '@/components/loginForm';
import ProductList from '@/components/ProductList';
import { ProductType } from '@/types/productsType';
import { useEffect, useState } from 'react';

const tableTitle = ['產品名稱', '原價', '售價', '是否啟用', '查看細節'];

const Week2 = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isAuth, setIsAuth] = useState(false);
  const [detailProduct, setDetailProduct] = useState<ProductType | null>(null);

  const isCheckAuth = async () => {
    const result = await signFlowApi.isCheckAuth();
    if (result.success) {
      setIsAuth(true);
    }
  };

  const getProducts = async () => {
    const result = await productApi.all();
    setProducts(result.products);
  };

  useEffect(() => {
    isCheckAuth();
    getProducts();
  }, []);

  return (
    <>
      {isAuth ? (
        <div className="container mx-auto px-4 py-8">
          <div className="mx-auto  w-full sm:w-[640px]">
            <div className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold">產品列表</h2>
              <table className="w-full table-auto border-collapse border border-gray-200 text-left">
                <thead>
                  <tr className="bg-gray-100">
                    {tableTitle.map((title) => (
                      <th
                        key={title}
                        className="border border-gray-200 px-4 py-2"
                      >
                        {title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {products.map((item: ProductType) => (
                    <ProductList
                      key={item.id}
                      products={item}
                      setDetailProduct={setDetailProduct}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            {products && <DetailProduct products={detailProduct!} />}
          </div>
        </div>
      ) : (
        <LoginForm setIsAuth={setIsAuth} />
      )}
    </>
  );
};

export default Week2;
