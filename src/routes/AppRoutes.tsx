import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import ProductManagement from '@/pages/ProductManagement';
import Week1 from '@/pages/Week1';
import Week2 from '@/pages/Week2';
import Week3 from '@/pages/Week3';
import Week4 from '@/pages/Week4';
import Week5 from '@/pages/Week5';
import Checkout from '@/pages/Week5/Checkout';
import DetailProduct from '@/pages/Week5/DetailProduct';
import ProductsList from '@/pages/Week5/ProductsList';
import ShoppingCart from '@/pages/Week5/ShoppingCart';

import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/week1" element={<Week1 />} />
          <Route path="/week2" element={<Week2 />} />
          <Route element={<PrivateRoute />}>
            <Route path="/week3" element={<Week3 />}>
              <Route path="products" element={<ProductManagement />} />
              <Route index element={<Navigate to="products" />} />
            </Route>
            <Route path="/week4" element={<Week4 />}>
              <Route path="products" element={<ProductManagement />} />
              <Route index element={<Navigate to="products" />} />
            </Route>
          </Route>
          <Route path="/week5" element={<Week5 />}>
            <Route index element={<Navigate to="ProductsList" />} />
            <Route path="ProductsList" element={<ProductsList />} />
            <Route path="ShoppingCart" element={<ShoppingCart />} />
            <Route path="Checkout" element={<Checkout />} />
            <Route path="ProductsList/DetailProduct/:id" element={<DetailProduct />} />
          </Route>
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default AppRoutes;
