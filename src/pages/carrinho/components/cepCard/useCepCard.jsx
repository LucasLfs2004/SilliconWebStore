import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { regionList } from '../../../../constants/list_ship';
import { getCep, setShipInfo } from '../../../../services/Requests';
import { setCart } from '../../../../store/actions/cartActions';

export const useCepCard = () => {
  const user = useSelector(state => state.user);
  const cart = useSelector(state => state.cart);
  const [cep, setCep] = useState(cart.ship_cep ? cart.ship_cep : '');
  const dispatch = useDispatch();

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

      const cartData = await setShipInfo(user.access_token, {
        region: region,
        cep: uf.cep,
        street: uf.logradouro + ' - ' + uf.bairro,
      });
      dispatch(setCart(cartData));
    }
  };

  return { cep, setCep, calcShip, cart };
};
