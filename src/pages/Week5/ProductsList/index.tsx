import { Link, useNavigate } from 'react-router';

import ClipLoading from '@/components/ClipLoading';
import Icons from '@/components/Icons';
import { DataTablePagination } from '@/components/Table/DataTablePagination';
import { Button } from '@/components/ui/button';
import { usePostCartMutation } from '@/hooks/useCart';
import { useGetProducts } from '@/hooks/useProduct';
import usePaginationStore from '@/store/paginationStore';

const ProductsList = () => {
  const navigate = useNavigate();
  const { currentPage } = usePaginationStore();
  const { data, isFetching } = useGetProducts({ page: currentPage + 1, category: '' });
  const { mutate: create, isPending } = usePostCartMutation();
  const totalPages = data?.pagination.total_pages || 0;

  const goToDetailProduct = (id: string) => {
    console.log(id);
    navigate(`${id}`);
  };

  const addCartItem = (id: string) => {
    console.log(id);
    create({ product_id: id, qty: 1 });
  };

  if (isFetching || isPending) {
    return <ClipLoading loading={isFetching || isPending} global />;
  }
  return (
    <>
      <div className="flex items-center py-5">
        <div className="mr-auto">
          <h1 className="text-5xl">產品列表</h1>
        </div>
        <Button variant="outline" asChild>
          <Link to="/week5/ShoppingCart">
            <Icons.Cart />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-6 bg-black">
        {data?.products.map((product) => {
          return (
            <div className="flex flex-col overflow-hidden rounded-lg border p-4 shadow-lg" key={product.id}>
              <div className="flex items-center">
                <h3 className="mr-auto text-2xl">{product.title}</h3>
                <span className="text-gray-200">{product.category}</span>
              </div>
              <div className="flex justify-center">
                <img src={product.imageUrl as string} alt="商品圖片" className="mt-2 rounded-lg object-cover" />
              </div>
              <p className="mt-1 text-xl font-bold text-red-500">$ {product.price}</p>
              <div className="mt-auto flex gap-2 pt-4">
                <div className="mr-auto">
                  <Button onClick={() => goToDetailProduct(product.id)} variant="outline">
                    查看更多
                  </Button>
                </div>
                <Button onClick={() => addCartItem(product.id)}>加入購物車</Button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="py-10">
        <DataTablePagination totalPages={totalPages} />
      </div>
    </>
  );
};

export default ProductsList;
