import React from 'react';
import * as C from './styles';

export const Spinner = () => {
  return (
    <C.Load className='spinner'>
      <div className='spinner1'></div>
    </C.Load>
  );
};
