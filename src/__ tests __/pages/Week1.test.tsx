import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import { getProducts } from '@/mock/getProducts';
import Week1 from '@/pages/Week1';
import { ProductType } from '@/types/productsType';

const mockProducts: ProductType[] = [
  {
    category: '甜甜圈',
    content: '尺寸：14x14cm',
    description: '濃郁的草莓風味',
    id: '-L9tH8jxVb2Ka_DYPwng',
    is_enabled: 1,
    origin_price: 150,
    price: 99,
    title: '草莓莓果夾心圈',
    unit: '元',
    imageUrl: 'https://images.unsplash.com/photo-1583182332473-b31ba08929c8',
    imagesUrl: [
      'https://images.unsplash.com/photo-1583182332473-b31ba08929c8',
      'https://images.unsplash.com/photo-1626094309830-abbb0c99da4a',
      'https://images.unsplash.com/photo-1559656914-a30970c1affd',
    ],
  },
  {
    category: '蛋糕',
    content: '尺寸：6寸',
    description: '蜜蜂蜜蛋糕，夾層夾上酸酸甜甜的檸檬餡，清爽可口的滋味讓人口水直流！',
    id: '-McJ-VvcwfN1_Ye_NtVA',
    is_enabled: 1,
    origin_price: 1000,
    price: 900,
    title: '蜂蜜檸檬蛋糕',
    unit: '個',
    imageUrl: 'https://images.unsplash.com/photo-1627834377411-8da5f4f09de8',
    imagesUrl: [
      'https://images.unsplash.com/photo-1627834377411-8da5f4f09de8',
      'https://images.unsplash.com/photo-1618888007540-2bdead974bbb',
    ],
  },
];

jest.mock('@/mock/getProducts', () => ({
  getProducts: jest.fn(),
}));

describe('Week1 頁面', () => {
  beforeEach(() => {
    (getProducts as jest.Mock).mockResolvedValue(mockProducts);
  });

  it('應該正確呈現產品列表及其詳細資訊', async () => {
    render(<Week1 />);

    // 檢查頁面標題是否存在
    expect(screen.getByText('產品列表')).toBeInTheDocument();

    // 等待 API 資料載入
    await waitFor(() => expect(getProducts).toHaveBeenCalled());

    // 檢查每個產品名稱是否都有正確顯示
    mockProducts.forEach((product) => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
    });

    // 檢查表格標題列是否正確
    const headers = ['產品名稱', '原價', '售價', '是否啟用', '查看細節'];
    headers.forEach((header) => {
      expect(screen.getAllByText(header)[0]).toBeInTheDocument();
    });
  });

  it('點擊查看細節按鈕後應該顯示正確的產品資訊', async () => {
    render(<Week1 />);

    // 等待 API 資料載入
    await waitFor(() => expect(getProducts).toHaveBeenCalled());

    // 確認初始狀態有骨架屏
    const initialSkeletons = document.querySelectorAll('.animate-pulse');
    expect(initialSkeletons.length).toBeGreaterThan(0);

    // 點擊第一個產品的查看細節按鈕
    const detailButtons = screen.getAllByText('查看細節');
    fireEvent.click(detailButtons[0]);

    // 檢查產品資訊是否在表格中正確顯示
    const firstProduct = mockProducts[0];

    expect(screen.getByText(firstProduct.title)).toBeInTheDocument();
    // expect(screen.getByText(firstProduct.description)).toBeInTheDocument();
    expect(screen.getByText(firstProduct.origin_price.toString())).toBeInTheDocument();
    expect(screen.getByText(firstProduct.price.toString())).toBeInTheDocument();
  });

  it('初始狀態下應該顯示骨架屏', async () => {
    render(<Week1 />);

    // 等待 API 資料載入
    await waitFor(() => expect(getProducts).toHaveBeenCalled());

    // 檢查是否顯示選擇提示訊息
    expect(screen.getByText('請選擇一個商品查看')).toBeInTheDocument();

    // 檢查骨架屏元素
    const skeletonElements = document.querySelectorAll('.animate-pulse');
    expect(skeletonElements.length).toBeGreaterThan(0);

    // 檢查預設的圖片預留區域
    const imagePlaceholder = document.querySelector('.h-64.w-full.animate-pulse');
    expect(imagePlaceholder).toBeInTheDocument();
  });
});
