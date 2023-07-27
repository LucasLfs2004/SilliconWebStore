import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { Spinner } from '../components/spinner/index';
import CreateAccount from '../pages/createAccount';
import Home from '../pages/home';
import Login from '../pages/login';

const Content = props => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    {
      path: '/create-account',
      element: <CreateAccount />,
    },
  ]);

  return <Suspense fallback={<Spinner />}>{routes}</Suspense>;
};

export default Content;
