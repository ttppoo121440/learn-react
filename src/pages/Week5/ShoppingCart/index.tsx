import { Link } from 'react-router';

import { CartItemType } from '@/api/services/cartApi/types';
import ClipLoading from '@/components/ClipLoading';
import Icons from '@/components/Icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useDeleteAllCartMutation, useDeleteCartMutation, useGetCart, useUpdateCartMutation } from '@/hooks/useCart';

const ShoppingCart = () => {
  const { data, isFetching } = useGetCart();
  const { mutate: deleteCartItem } = useDeleteCartMutation();
  const { mutate: deleteAllCartItem } = useDeleteAllCartMutation();
  const { mutate: updateCartItem } = useUpdateCartMutation();

  const updateQuantity = (item: CartItemType, change: number) => {
    const newQty = Math.max(1, item.qty + change);
    console.log(item.product_id);

    updateCartItem({
      id: item.id,
      data: {
        product_id: item.product_id,
        qty: newQty,
      },
    });
  };

  const totalAmount = data?.carts.reduce((sum, item) => sum + item.product.price * item.qty, 0);

  if (isFetching) {
    return <ClipLoading loading={isFetching} global />;
  }

  return (
    <div className="mx-auto max-w-3xl p-4">
      <h1 className="mb-4 text-2xl font-bold">購物車</h1>
      {data?.carts.length === 0 ? (
        <p className="text-gray-500">購物車是空的</p>
      ) : (
        <div className="space-y-4">
          {data?.carts.map((item) => (
            <div key={item.id} className="flex items-center gap-4 rounded-lg border p-4 shadow-sm">
              <img
                src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/A1GqXP09aWS6HQqTWBeyo5K6jQp8zVIXNovqLc3qu1yektW7bSmWuSTEPqhLto7xYTlXO4guNnn7qztPn2Z8muJR3vRygBvdXetbct7AbttN16ykhXopRj3cAdWP4hbD.png"
                alt={item.product.imageUrl}
                className="h-16 w-16 object-cover"
              />
              <div className="flex-1">
                <h2 className="font-semibold">{item.product.title}</h2>
                <p className="">
                  {item.product.price} 元 / {item.product.unit}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={() => updateQuantity(item, -1)}>
                  <Icons.Minus />
                </Button>
                <Input
                  type="tel"
                  defaultValue={item.qty}
                  className="w-14 rounded border text-center"
                  onBlur={(e) => {
                    let value = e.target.value.replace(/\D/g, '');
                    value = value === '' ? '1' : value;
                    const newQty = Math.min(999, Math.max(1, Number(value)));
                    updateCartItem({ id: item.id, data: { product_id: item.product_id, qty: newQty } });
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      e.currentTarget.blur();
                    }
                  }}
                  min="1"
                  max="999"
                />
                <Button variant="outline" size="icon" onClick={() => updateQuantity(item, +1)}>
                  <Icons.Plus />
                </Button>
              </div>
              <Button variant="destructive" size="icon" onClick={() => deleteCartItem(item.id)}>
                <Icons.DeleteCart />
              </Button>
            </div>
          ))}
          <div className="flex items-center justify-between border-t pt-4 text-lg font-bold">
            <span>總計：</span>
            <span>{totalAmount} 元</span>
          </div>
          <Button variant="destructive" className="mt-4 w-full" onClick={() => deleteAllCartItem()}>
            移除全部
          </Button>
          <Button className="mt-4 w-full" asChild>
            <Link to="/week5/checkout">前往結帳</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
