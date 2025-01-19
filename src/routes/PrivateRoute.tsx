import cookies from 'js-cookie';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = cookies.get('react-token');

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
