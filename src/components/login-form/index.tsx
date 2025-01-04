import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import axiosClient from '@/api/axiosClient';
import { FormDataProps, LoginFormProps } from './types';
import Cookies from 'js-cookie';

export function LoginForm({ className, setIsAuth }: LoginFormProps) {
  const [formData, setFormData] = useState<FormDataProps>({
    username: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await axiosClient.post(`admin/signin`, formData);
    if (result.data.success) {
      setIsAuth(true);
    }
    Cookies.set('token', JSON.stringify(result.data));
  };

  return (
    <div className="container mx-auto flex h-screen items-center justify-center">
      <div className={cn('flex w-96 flex-col  gap-6', className)}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">登入</CardTitle>
            <CardDescription>
              在下面輸入您的電子郵件以登入您的帳戶
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="username">信箱</Label>
                  <Input
                    id="username"
                    type="email"
                    placeholder="m@example.com"
                    required
                    autoComplete="username"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">密碼</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    onChange={handleInputChange}
                  />
                </div>
                <Button type="submit" className="w-full">
                  登入
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
