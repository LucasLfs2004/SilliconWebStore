import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toastErr, toastSuc } from '../../components/ToastComponent';
import {
  getCart,
  getProfile,
  getShipInfo,
  postPurchaseOrder,
  setPrincipalShipUser,
  setShipIdCart,
} from '../../services/Requests';
import { setCart } from '../../store/actions/cartActions';
import { setShipSelected } from '../../store/actions/shipActions';
import { initializeUser } from '../../store/actions/userActions';
import useCep from '../product/components/shipCalc/useCep';

const usePayment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const payment = useSelector(state => state.payment);
  const user = useSelector(state => state.user);
  const { shipSelected } = useSelector(state => state.ship);

  const { calcShipCep, findRegion } = useCep();

  const [shipIdSelected, setShipIdSelected] = useState(null);
  const [shipValue, setShipValue] = useState();
  const [modalShipVisible, setModalShipVisible] = useState(false);
  const [modalViewShipVisible, setModalViewShipVisible] = useState(false);
  const [modalProfile, setModalProfile] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
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

  const { refetch: refetchShipIdCart } = useQuery({
    queryKey: ['ship-id-cart', shipSelected],
    queryFn: async () => {
      if (user.access_token) {
        if (shipSelected !== null && shipSelected !== undefined) {
          const region = findRegion(shipSelected.state);

          if (region !== null && region !== '') {
            const response = await setShipIdCart(
              { region: region, id: shipSelected.ship_id },
              user.access_token,
            );
            if (response) {
              console.log('DEU CERTO O SET DO ID DO CART: ', response);
            }
          }
        }
      }
      return null;
    },
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

  const handlePrincipalShip = async id => {
    const success = await setPrincipalShipUser(id, user.access_token);
    if (success) {
      await refetch();
      setModalViewShipVisible(false);
    }
  };

  const finishOrder = async () => {
    if (
      payment?.payForm?.method !== null &&
      payment?.payForm?.method !== undefined &&
      user.access_token
    ) {
      const dataOrder = {
        payment_method: payment?.payForm?.method,
        often: payment?.payForm?.portion?.often,
        id_often: payment?.payForm?.portion?.id,
      };
      await refetchShipIdCart();
      const response = await postPurchaseOrder(dataOrder, user.access_token);
      toastSuc('Compra realizada com sucesso!!');
      setTimeout(() => navigate(`/profile/order/${response.id_order}`), 1500);
    } else {
      toastErr('Por favor selecione um método de pagamento');
    }
    console.log('Carrinho: ', payment);
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
    modalSuccess,
    setModalSuccess,
    finishOrder,
  };
};

export default usePayment;
