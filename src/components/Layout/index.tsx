import { ProviderProps } from '@/types/ProviderType';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }: ProviderProps) => {
  return (
    <>
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
