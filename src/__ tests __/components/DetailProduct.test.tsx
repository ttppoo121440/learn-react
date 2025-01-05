import { render, screen, fireEvent } from '@testing-library/react';
import { Is_enabledType, ProductType } from '@/types/productsType';
import DetailProduct from '@/components/DetailProduct';

const mockProduct: ProductType = {
  category: '熱門',
  content: '混合了異國情調的香料，甜味和蒸牛奶，可達到辛辣和甜味的完美平衡。',
  description:
    '混合了異國情調的香料，甜味和蒸牛奶，可達到辛辣和甜味的完美平衡。',
  id: '-OFjZwJOMyuUW9RGJN6K',
  imageUrl:
    'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/iyrGvtKOQV9d3ofiHFChFdyghFK5zKDTjio1jkGhP1tMmpBsicl4MfodqqAdkvLR8rIqjm9JFZk5N9uYFNajCSaErGh2SBHv7mixnhEEJqzIz8Pd0f7kCgXLtghPuld1.png',
  imagesUrl: [
    'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/VpD8iFirpZCtqfP5laKZUYKsi24EXxJw8Qya8fZggaPn0qqafEnhYZEutb6as3oZ4iZ6vSP6BcQm7oc84ffVSOAc6Yz73CDRW8V0iAYZYsdLAtOWtedyB7M0EAHnfc5n.png',
  ],
  is_enabled: 1 as Is_enabledType,
  origin_price: 200,
  price: 150,
  title: '柴茶拿鐵',
  unit: '杯',
};
describe('DetailProduct 元件', () => {
  it('正確呈現產品詳細信息', () => {
    render(<DetailProduct products={mockProduct} />);

    // 檢查產品標題是否顯示
    expect(screen.getByText(/柴茶拿鐵/i)).toBeInTheDocument();
    // 檢查是否顯示產品描述
    expect(
      screen.getByText(
        /混合了異國情調的香料，甜味和蒸牛奶，可達到辛辣和甜味的完美平衡。/i,
      ),
    ).toBeInTheDocument();
    // 檢查產品價格是否顯示
    expect(screen.getByText(/150 元/i)).toBeInTheDocument();
    // 檢查產品原價是否顯示刪除線
    expect(screen.getByText(/200 元/i)).toHaveClass('line-through');
  });

  it('當產品為空或未定義時顯示​​加載', () => {
    render(<DetailProduct products={null as unknown as ProductType} />);
    expect(screen.getByText(/請選擇一個商品查看/i)).toBeInTheDocument();
  });

  it('當點擊另一張圖片時更新圖片', () => {
    render(<DetailProduct products={mockProduct} />);

    const firstImage = screen.getByAltText('主圖');
    expect(firstImage).toHaveAttribute('src', mockProduct.imageUrl);

    // 點擊「更多圖片」部分中的第一張圖片
    const secondImage = screen.getAllByAltText('圖片')[0];
    fireEvent.click(secondImage);

    // 點擊後，主圖像應變為第一幅圖像
    expect(firstImage).toHaveAttribute('src', mockProduct.imagesUrl[0]);
  });
});
