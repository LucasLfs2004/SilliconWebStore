import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { regionList } from '../../../../constants/list_ship';
import { getCep, setShipInfo } from '../../../../services/Requests';
import { initializeCart } from '../../../../store/actions/cartActions';

export const useCepCard = () => {
  const payment = useSelector(state => state.payment);
  const user = useSelector(state => state.user);
  const [cep, setCep] = useState('');
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const searchCep = async () => {
    console.log('cep', cep);
    if (cep !== '' && cep !== undefined) {
      const response = await getCep(cep);
      // dispatch(setShipInfos(response));
      return response;
    }
    return null;
  };

  const findRegion = sigla => {
    for (const [regiao, estados] of Object.entries(regionList)) {
      if (estados.includes(sigla)) {
        return regiao;
      }
    }
    return null;
  };

  const calcShip = async () => {
    const uf = await searchCep();

    if (user.access_token && uf !== null) {
      const region = findRegion(uf.uf);

      console.log(region);

      const cartData = await setShipInfo(user.access_token, {
        region: region,
        cep: uf.cep,
        street: uf.logradouro + ' - ' + uf.bairro,
      });
      dispatch(initializeCart(cartData));
    }
  };

  return { payment, cep, setCep, searchCep, findRegion, calcShip, cart };
};
