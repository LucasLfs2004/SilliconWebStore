import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { Spinner } from '../components/spinner/index';
import CreateAccount from '../pages/createAccount';
import Login from '../pages/login';

const Content = (props: any) => {
  const routes = useRoutes([
    { path: '/', element: <Login /> },
    {
      path: '/create-account',
      element: <CreateAccount />,
    },
  ]);

  return <Suspense fallback={<Spinner />}>{routes}</Suspense>;
};

export default Content;
