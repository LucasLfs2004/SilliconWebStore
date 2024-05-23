import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCart, getShipInfo } from '../../services/Requests';
import useCep from '../product/components/shipCalc/useCep';

import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { getProfile, setPrincipalShipUser } from '../../services/Requests';
import { setCart } from '../../store/actions/cartActions';
import { setShipSelected } from '../../store/actions/shipActions';
import { initializeUser } from '../../store/actions/userActions';

const usePayment = () => {
  const { calcShipCep } = useCep();

  const cart = useSelector(state => state.cart);
  const user = useSelector(state => state.user);
  const { shipSelected } = useSelector(state => state.ship);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [shipIdSelected, setShipIdSelected] = useState(null);
  // const [shipSelected, setShipSelected] = useState(null);
  const [shipValue, setShipValue] = useState();
  const [modalShipVisible, setModalShipVisible] = useState(false);
  const [modalViewShipVisible, setModalViewShipVisible] = useState(false);
  const [modalProfile, setModalProfile] = useState(false);
  const [principalShip, setPrincipalShip] = useState({});
  const [shipEditObject, setShipEditObject] = useState(null);

  const { data: shipInfo, refetch: refetchShipInfo } = useQuery({
    queryKey: ['ship-info-payment'],
    queryFn: async () =>
      user.access_token && (await getShipInfo(user.access_token)),
  });

  const { data: cartRequest, refetch: refetchCartRequest } = useQuery({
    queryKey: ['cart-data'],
    queryFn: async () =>
      user.access_token && (await getCart(user.access_token)),
  });

  useEffect(() => {
    dispatch(setCart(cartRequest));
  }, [cartRequest]);

  const getShipSelected = id => {
    console.log(shipInfo);
    const ship = shipInfo?.ship_info?.filter(item => item.ship_id === id);
    console.log(ship);
    ship?.length > 0 && dispatch(setShipSelected(ship[0]));
  };

  useEffect(() => {
    if (shipIdSelected !== null) {
      getShipSelected(shipIdSelected);
    } else {
      getShipSelected(shipInfo?.principal_ship);
    }
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

  useEffect(() => {
    if (
      user?.access_token === null ||
      user?.access_token === undefined ||
      user === undefined
    ) {
      window.location.href = '/signin';
    }
  }, [user]);

  useEffect(() => {
    console.log('SHIPIDSELECTED mudou: ', shipIdSelected);
    refetchShipInfo();
  }, [shipIdSelected, modalShipVisible]);

  const { data: profile, refetch } = useQuery({
    queryKey: ['profile-data'],
    queryFn: async () => {
      if (user.access_token) {
        const response = await getProfile(user.access_token);
        // console.log('profile user', response);

        if (response?.status && response.status === 401) {
          dispatch(initializeUser());
          localStorage.removeItem('user');
          navigate('/signin', {
            state: {
              message: 'Sua sessão expirou, realize o login novamente',
            },
          });
        }

        response.birthday = moment(response.birthday)
          .locale('pt-br')
          .format('DD/MM/YYYY');
        return response;
      }
    },
  });

  // useEffect(() => {
  //   console.log('executando verificação do endereço principal');
  //   if (profile?.ship_info) {
  //     profile.ship_info.forEach(function (item) {
  //       console.log(item);
  //       if (profile.principal_ship === item.ship_id) {
  //         setPrincipalShip(item);
  //       }
  //     });
  //   }
  // }, [profile]);

  const handlePrincipalShip = async id => {
    const success = await setPrincipalShipUser(id, user.access_token);
    if (success) {
      await refetch();
      setModalViewShipVisible(false);
    }
  };

  return {
    shipValue,
    shipSelected,
    user,
    cart,
    modalViewShipVisible,
    setModalViewShipVisible,
    modalShipVisible,
    setModalShipVisible,
    profile,
    principalShip,
    modalProfile,
    setModalProfile,
    handlePrincipalShip,
    shipEditObject,
    refetch,
    setShipEditObject,
    setShipIdSelected,
    shipSelected,
  };
};

export default usePayment;
