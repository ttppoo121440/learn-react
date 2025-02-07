import { useEffect, useState } from 'react';

import { DetailProductProps } from '@/types/productsType';

import Loading from './TableLoading';

const DetailProduct = ({ products }: DetailProductProps) => {
  const [pic, setPic] = useState<string>(products?.imageUrl);

  useEffect(() => {
    if (products) {
      setPic(products.imageUrl);
    }
  }, [products]);

  if (!products) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">單一產品細節</h2>
      <div className="overflow-hidden rounded shadow-md">
        <img src={pic || products.imageUrl} alt="主圖" className="w-full object-cover" />
        <div className="p-4">
          <h5 className="flex items-center text-xl font-bold">
            {products.title}
            <span className="ml-2 rounded bg-blue-100 px-2 py-1 text-sm text-primary">{products.category}</span>
          </h5>
          <p className="mt-2">商品描述：{products.description}</p>
          <div className="mt-4 flex items-center">
            <p className="mr-2 text-gray-400 line-through">{products.origin_price} 元</p>
            <p className="font-semibold text-red-500">{products.price} 元</p>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            {products.imagesUrl?.map(
              (url, index) =>
                url && (
                  <div key={url}>
                    <h5 className="mt-4 text-lg font-semibold">更多圖片：</h5>
                    <img
                      key={index}
                      src={url}
                      alt="圖片"
                      className="size-20 cursor-pointer rounded object-cover"
                      onClick={() => setPic(url)}
                    />
                  </div>
                ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
