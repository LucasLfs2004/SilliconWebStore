import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { Spinner } from '../components/spinner/index';
import Login from '../pages/login/Index';

const Content = props => (
  <Suspense fallback={<Spinner />}>
    <Routes>
      <Route path='/' element={<Login />} />
      {/* <Route exact path='/agents' element={<Agents />} /> */}
      {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
  </Suspense>
);

export default Content;
