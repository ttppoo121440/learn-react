import { ProviderProps } from '@/types/ProviderType';

import { ThemeProvider } from '../theme-provider';
import { Toaster } from '../ui/toaster';

import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }: ProviderProps) => {
  return (
    <>
      <Navbar />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex-1 bg-black">{children}</div>
      </ThemeProvider>
      <Toaster />
      <Footer />
    </>
  );
};

export default Layout;
