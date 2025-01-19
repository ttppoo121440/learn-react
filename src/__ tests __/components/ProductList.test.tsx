import { render, screen, fireEvent } from '@testing-library/react';

import ProductList from '@/components/ProductList';
import { Is_enabledType } from '@/types/productsType';

const mockProduct = {
  category: '熱門',
  content: '混合了異國情調的香料，甜味和蒸牛奶，可達到辛辣和甜味的完美平衡。',
  description: '混合了異國情調的香料，甜味和蒸牛奶，可達到辛辣和甜味的完美平衡。',
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
describe('ProductList 元件', () => {
  const mockSetDetailProduct = jest.fn(); // 模擬 `setDetailProduct` 函數

  it('正確呈現產品詳細信息', () => {
    render(
      <table>
        <tbody>
          <ProductList products={mockProduct} setDetailProduct={mockSetDetailProduct} />
        </tbody>
      </table>,
    );

    // 測試每個欄位的渲染
    expect(screen.getByText('柴茶拿鐵')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
    expect(screen.getByText('150')).toBeInTheDocument();
    expect(screen.getByText('啟用')).toBeInTheDocument();
  });

  it('為已禁用的產品提供正確的狀態', () => {
    const disabledProduct = {
      ...mockProduct,
      is_enabled: 0 as Is_enabledType,
    }; // 設置為未啟用
    render(
      <table>
        <tbody>
          <ProductList products={disabledProduct} setDetailProduct={mockSetDetailProduct} />
        </tbody>
      </table>,
    );

    expect(screen.getByText('未啟用')).toBeInTheDocument(); // 確保狀態正確渲染
  });

  it('當按鈕被點選時，使用正確的產品呼叫 setDetailProduct', () => {
    render(
      <table>
        <tbody>
          <ProductList products={mockProduct} setDetailProduct={mockSetDetailProduct} />
        </tbody>
      </table>,
    );

    // 找到按鈕並模擬點擊
    const button = screen.getByRole('button', { name: /查看細節/i });
    fireEvent.click(button);

    // 確保 `setDetailProduct` 被正確呼叫
    expect(mockSetDetailProduct).toHaveBeenCalledTimes(1);
    expect(mockSetDetailProduct).toHaveBeenCalledWith(mockProduct);
  });
});
