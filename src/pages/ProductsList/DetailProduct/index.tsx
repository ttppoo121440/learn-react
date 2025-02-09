import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import TableLoading from '@/components/TableLoading';
import { useGetProductId } from '@/hooks/useProduct';

const DetailProduct = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetProductId(id as string);
  const [pic, setPic] = useState<string>(data?.imageUrl);

  useEffect(() => {
    if (data) {
      setPic(data.imageUrl);
    }
  }, [data]);

  if (!data || isFetching) {
    return <TableLoading />;
  }

  return (
    <div className="mt-20">
      <h2 className="mb-4 text-2xl font-semibold">單一產品細節</h2>
      <div className="rounded shadow-md">
        <img src={pic || data.imageUrl} alt="主圖" className="w-20 object-cover" />
        <div className="p-4">
          <h5 className="flex items-center text-xl font-bold">
            {data.title}
            <span className="ml-2 rounded bg-blue-100 px-2 py-1 text-sm text-primary">{data.category}</span>
          </h5>
          <p className="mt-2">商品描述：{data.description}</p>
          <div className="mt-4 flex items-center">
            <p className="mr-2 text-gray-400 line-through">{data.origin_price} 元</p>
            <p className="font-semibold text-red-500">{data.price} 元</p>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            {data.imagesUrl?.map(
              (url: string, index: number) =>
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
