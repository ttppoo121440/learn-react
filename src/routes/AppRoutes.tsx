import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import Layout from '@/components/Layout';
import Checkout from '@/pages/Checkout';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import ProductManagement from '@/pages/ProductManagement';
import ProductsList from '@/pages/ProductsList';
import DetailProduct from '@/pages/ProductsList/DetailProduct';
import ShoppingCart from '@/pages/ShoppingCart';
import Week1 from '@/pages/Week1';
import Week2 from '@/pages/Week2';
import Week3 from '@/pages/Week3';
import Week4 from '@/pages/Week4';
import Week5 from '@/pages/Week5';
import Week6 from '@/pages/Week6';

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
            <Route path="ProductsList">
              <Route index element={<ProductsList />} />
              <Route path=":id" element={<DetailProduct />} />
            </Route>
            <Route path="ShoppingCart" element={<ShoppingCart />} />
            <Route path="ShoppingCart/Checkout" element={<Checkout />} />
          </Route>
          <Route path="/week6" element={<Week6 />}>
            <Route index element={<Navigate to="ProductsList" />} />
            <Route path="ProductsList">
              <Route index element={<ProductsList />} />
              <Route path=":id" element={<DetailProduct />} />
            </Route>
            <Route path="ShoppingCart" element={<ShoppingCart />} />
            <Route path="ShoppingCart/Checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default AppRoutes;
