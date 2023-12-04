import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCep } from '../../../../services/Requests';
import { setShipInfos } from '../../../../store/actions/paymentActions';

export const useCepCard = () => {
  const payment = useSelector(state => state.payment);
  const [cep, setCep] = useState('');
  const dispatch = useDispatch();

  const searchCep = async () => {
    const response = await getCep(cep);
    dispatch(setShipInfos(response));
    console.log(payment);
    console.log(response);
  };

  return { payment, cep, setCep, searchCep };
};
