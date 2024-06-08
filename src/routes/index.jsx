import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import AddImage from '../pages/AddImage';
import AddProduct from '../pages/AddProduct';
import CarouselTeste from '../pages/CarouselTeste';
import Faq from '../pages/Faq';
import PrivacyTerms from '../pages/PrivacyTerms';
import AdminScreen from '../pages/admin';
import Brand from '../pages/brand';
import Carrinho from '../pages/carrinho';
import Home from '../pages/home';
import PurchaseOrders from '../pages/listOrders';
import MyStore from '../pages/myStore';
import OrderDetailed from '../pages/order';
import Payment from '../pages/payment';
import Product from '../pages/product';
import Profile from '../pages/profile';
import Login from '../pages/signIn';
import CreateAccount from '../pages/signUp';
import RateProduct from '../pages/rateProduct';

const Content = props => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/signin', element: <Login /> },
    {
      path: '/signup',
      element: <CreateAccount />,
    },
    {
      path: '/add-product',
      element: <AddProduct />,
    },
    { path: '/upload', element: <AddImage /> },
    { path: '/product/:id', element: <Product /> },
    {
      path: '/brand/:id',
      element: <Brand />,
    },
    {
      path: '/carrinho',
      element: <Carrinho />,
    },
    {
      path: '/payment',
      element: <Payment />,
    },
    {
      path: '/carousel-teste',
      element: <CarouselTeste />,
    },
    {
      path: '/profile',
      element: <Profile />,
    },
    {
      path: '/profile/my-store',
      element: <MyStore />,
    },
    { path: '/admin', element: <AdminScreen /> },
    { path: '/terms-privacy', element: <PrivacyTerms /> },
    { path: '/faq', element: <Faq /> },
    { path: '/profile/order', element: <PurchaseOrders /> },
    { path: '/profile/order/:id', element: <OrderDetailed /> },
    { path: '/profile/rate-product/:id/:id_order', element: <RateProduct /> },
  ]);

  return <Suspense>{routes}</Suspense>;
};

export default Content;
