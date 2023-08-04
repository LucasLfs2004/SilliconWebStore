import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { Spinner } from '../components/Spinner/index';
import AddProduct from '../pages/AddProduct';
import CreateAccount from '../pages/createAccount';
import Home from '../pages/home';
import Login from '../pages/login';
import SideMenu from '../pages/sideMenu';

const Content = props => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/', element: <SideMenu /> },
    { path: '/login', element: <Login /> },
    {
      path: '/create-account',
      element: <CreateAccount />,
    },
    {
      path: '/add-product',
      element: <AddProduct />,
    },
  ]);

  return <Suspense fallback={<Spinner />}>{routes}</Suspense>;
};

export default Content;
