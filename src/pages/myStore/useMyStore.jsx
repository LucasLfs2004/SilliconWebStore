import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  deleteProduct,
  getSellerData,
  patchDescriptionProduct,
  postDescriptionProduct,
  setOfferProduct as setOfferProductRequest,
} from '../../services/Requests';

const UseMyStore = () => {
  const user = useSelector(state => state.user);

  const [productActive, setProductActive] = useState(undefined);
  const [detailModal, setDetailModal] = useState(false);
  const [offerModal, setOfferModal] = useState(false);
  const [descriptionModal, setDescriptionModal] = useState(false);
  const [editor, setEditor] = useState('');

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

  useEffect(() => {
    console.log('product on useEffect of editor: ', productActive);
    setEditor(
      productActive?.description?.desc_html
        ? productActive?.description?.desc_html
        : '',
    );
  }, [productActive]);

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
      const retorno = await setOfferProductRequest(user.access_token, params);
      retorno && (await refetch());
      setOfferModal(prev => false);
    }
  };

  const handleOpenOfferModal = product => {
    setOfferModal(true);
    setProductActive(product);
  };

  const handleChangeDescriptionProduct = async () => {
    const params = {
      id_product: productActive?.id,
      description: editor,
    };
    if (productActive?.description?.desc_html === null) {
      const retorno = await postDescriptionProduct(user.access_token, params);
      retorno && (await refetch());
    } else {
      const retorno = await patchDescriptionProduct(user.access_token, params);
      retorno && (await refetch());
    }
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
    descriptionModal,
    setDescriptionModal,
    handleChangeDescriptionProduct,
    editor,
    setEditor,
  };
};

export default UseMyStore;
