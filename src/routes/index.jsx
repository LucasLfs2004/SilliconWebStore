import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import AddImage from '../pages/AddImage';
import AddProduct from '../pages/AddProduct';
import CreateAccount from '../pages/createAccount';
import Home from '../pages/home';
import Login from '../pages/login';
import Product from '../pages/product';

const Content = props => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    {
      path: '/create-account',
      element: <CreateAccount />,
    },
    {
      path: '/add-product',
      element: <AddProduct />,
    },
    { path: '/upload', element: <AddImage /> },
    { path: '/product', element: <Product /> },
  ]);

  return <Suspense>{routes}</Suspense>;
};

export default Content;
