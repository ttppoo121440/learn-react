import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Week1 from '@/pages/Week1';
import Week2 from '@/pages/Week2';
import Week3 from '@/pages/Week3';
import ProductManagement from '@/pages/Week3/components/ProductManagement';
import Week4 from '@/pages/Week4';

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
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default AppRoutes;
