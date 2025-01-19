import { render, screen, waitFor } from '@testing-library/react';

import axiosClient from '@/api/axiosClient';
import Week2 from '@/pages/Week2';

// Mock axiosClient
jest.mock('@/api/axiosClient');

describe('Week2 頁面', () => {
  afterEach(() => {
    jest.clearAllMocks(); // 清除每次測試的 mock
  });

  it('如果使用者未通過身份驗證，則呈現 LoginForm', async () => {
    jest.spyOn(axiosClient, 'post').mockResolvedValueOnce({
      data: { success: false },
    });

    jest.spyOn(axiosClient, 'get').mockResolvedValueOnce({
      data: { products: [] },
    });

    render(<Week2 />);

    await waitFor(() => {
      const loginElements = screen.getAllByText(/登入/i);
      expect(loginElements.length).toBeGreaterThan(0);
    });
  });
});
