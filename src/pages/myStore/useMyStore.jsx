import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  deleteProduct,
  getSellerData,
  postOfferProduct,
} from '../../services/Requests';

const UseMyStore = () => {
  const user = useSelector(state => state.user);

  const [productActive, setProductActive] = useState(undefined);
  const [detailModal, setDetailModal] = useState(false);
  const [offerModal, setOfferModal] = useState(false);

  //   const [principalShip, setPrincipalShip] = useState({});
  useEffect(() => {
    if (
      user?.access_token === null ||
      user?.access_token === undefined ||
      user === undefined
    ) {
      window.location.href = '/signin';
    }
  }, [user]);

  const { data: sellerData, refetch } = useQuery({
    queryKey: ['seller-data'],
    queryFn: async () => {
      if (user.access_token) {
        const response = await getSellerData(user.access_token);
        return response;
      }
    },
  });

  const handleDeleteProduct = async id_product => {
    if (user.access_token) {
      const retorno = await deleteProduct(user.access_token, id_product);
      retorno && (await refetch());
    }
  };

  const setOfferProduct = async params => {
    if (user.access_token) {
      const retorno = await postOfferProduct(user.access_token, {
        ...params,
        id_seller: sellerData?.id_seller,
      });
      retorno && (await refetch());
      setOfferModal(prev => false);
    }
  };

  const handleOpenOfferModal = product => {
    setOfferModal(true);
    setProductActive(product);
  };

  return {
    sellerData,
    handleDeleteProduct,
    offerModal,
    setOfferModal,
    handleOpenOfferModal,
    productActive,
    setProductActive,
    detailModal,
    setDetailModal,
    setOfferProduct,
  };
};

export default UseMyStore;
