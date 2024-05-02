import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getShipInfo } from '../../services/Requests';
import useCep from '../product/components/shipCalc/useCep';

const usePayment = () => {
  const cart = useSelector(state => state.cart);
  const user = useSelector(state => state.user);

  const { calcShipCep } = useCep();

  const [shipSelected, setShipSelected] = useState(null);
  const [shipValue, setShipValue] = useState();

  const { data: shipInfo } = useQuery({
    queryKey: ['ship-info-payment'],
    queryFn: async () =>
      user.access_token && (await getShipInfo(user.access_token)),
  });

  useEffect(() => {
    shipInfo?.ship_info?.map(item => {
      item.ship_id === shipInfo.principal_ship && setShipSelected(item);
    });
  }, [shipInfo]);

  useEffect(() => {
    getShipValue();
  }, [shipSelected]);

  const getShipValue = async () => {
    if (shipSelected) {
      const response = await calcShipCep(shipSelected?.cep);
      setShipValue(response);
    }
  };

  console.log('Ship value: ', shipValue);
  console.log('cart', cart);

  return { shipValue, shipSelected, user, cart };
};

export default usePayment;
