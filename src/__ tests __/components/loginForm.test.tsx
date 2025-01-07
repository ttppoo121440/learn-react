import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axiosClient from '@/api/axiosClient';
import Cookies from 'js-cookie';
import { LoginForm } from '@/components/loginForm';

jest.mock('js-cookie', () => ({
  set: jest.fn(),
}));

jest.mock('@/api/axiosClient', () => ({
  post: jest.fn().mockResolvedValue({
    data: { success: false }, // 模擬後端失敗回應
  }),
}));

describe('LoginForm 元件', () => {
  const mockedSetIsAuth = jest.fn(); // 模擬 setIsAuth 函數
  const mockedAxios = axiosClient as jest.Mocked<typeof axiosClient>;

  beforeEach(() => {
    mockedSetIsAuth.mockClear();
    mockedAxios.post.mockClear();
    (Cookies.set as jest.Mock).mockClear();
  });

  test('正確呈現UI', () => {
    render(<LoginForm setIsAuth={mockedSetIsAuth} className="test-class" />);

    // 測試標題和描述是否正確渲染
    expect(
      screen.getByRole('heading', { level: 1, name: /登入/i }),
    ).toBeInTheDocument(); // 尋找標題
    expect(
      screen.getByText(/在下面輸入您的電子郵件以登入您的帳戶/i),
    ).toBeInTheDocument(); // 尋找描述

    // 測試表單元素是否存在
    expect(screen.getByLabelText(/信箱/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/密碼/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /登入/i })).toBeInTheDocument();
  });

  test('成功登入後呼叫 setIsAuth 並設定 cookie', async () => {
    // 模擬 API 成功回應
    mockedAxios.post.mockResolvedValueOnce({
      data: { success: true, token: 'test-token' },
    });

    render(<LoginForm setIsAuth={mockedSetIsAuth} className="test-class" />);

    // 填寫表單
    fireEvent.change(screen.getByLabelText(/信箱/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/密碼/i), {
      target: { value: 'password123' },
    });

    // 提交表單
    fireEvent.click(screen.getByRole('button', { name: /登入/i }));

    // 檢查 API 是否被調用
    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith('admin/signin', {
        username: 'test@example.com',
        password: 'password123',
      });
    });

    // 檢查 setIsAuth 是否被調用
    expect(mockedSetIsAuth).toHaveBeenCalledWith(true);

    // 檢查 Cookie 是否被設定
    await waitFor(() => {
      expect(Cookies.set).toHaveBeenCalledWith(
        'token',
        expect.stringMatching(/test-token/),
      );
    });
  });

  test('登入失敗時不呼叫 setIsAuth 或設定 cookie', async () => {
    // 模擬 API 失敗回應
    mockedAxios.post.mockResolvedValueOnce({
      data: { success: false },
    });

    render(<LoginForm setIsAuth={mockedSetIsAuth} className="test-class" />);

    // 填寫表單
    fireEvent.change(screen.getByLabelText(/信箱/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/密碼/i), {
      target: { value: 'password123' },
    });

    // 提交表單
    fireEvent.click(screen.getByRole('button', { name: /登入/i }));

    // 檢查 API 是否被調用
    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith('admin/signin', {
        username: 'test@example.com',
        password: 'password123',
      });
    });

    // 檢查 setIsAuth 和 Cookie 是否未調用
    expect(mockedSetIsAuth).not.toHaveBeenCalled();
    expect(Cookies.set).not.toHaveBeenCalled();
  });
});
