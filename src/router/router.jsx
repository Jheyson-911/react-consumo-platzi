import { createBrowserRouter } from 'react-router-dom';
import { PublicLayout } from '../layout/PublicLayout';
import { Products } from '../components/product/Products';
import { Home } from '../components/home/Home';
import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';
import { Cart } from '../components/cart/Cart';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);
