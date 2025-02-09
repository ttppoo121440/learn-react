import { NavLink, Outlet } from 'react-router';

const Week6 = () => {
  return (
    <div className=" mt-10">
      <nav className="container">
        <ul className="flex justify-between text-2xl">
          <li>
            <NavLink to="ProductsList">產品列表</NavLink>
          </li>
          <li>
            <NavLink to="ShoppingCart">購物車</NavLink>
          </li>
          <li>
            <NavLink to="/login">登入</NavLink>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Week6;
