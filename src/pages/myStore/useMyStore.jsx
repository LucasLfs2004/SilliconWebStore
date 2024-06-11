import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toastErr, toastSuc } from '../../components/ToastComponent';
import {
  deleteProduct,
  getSellerData,
  patchDescriptionProduct,
  postDescriptionProduct,
  setOfferProduct as setOfferProductRequest,
} from '../../services/Requests';
import { initializeUser } from '../../store/actions/userActions';

const UseMyStore = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [productActive, setProductActive] = useState(undefined);
  const [detailModal, setDetailModal] = useState(false);
  const [offerModal, setOfferModal] = useState(false);
  const [descriptionModal, setDescriptionModal] = useState(false);
  const [editProductModal, setEditProductModal] = useState(false);
  const [editImagesModal, setEditImagesModal] = useState(false);
  const [editor, setEditor] = useState('');

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
        if (response?.status && response.status === 401) {
          dispatch(initializeUser());
          localStorage.removeItem('user');
          navigate('/signin', {
            state: {
              message: 'Sua sessão expirou, realize o login novamente',
            },
          });
        }

        return response;
      }
    },
    staleTime: 0,
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
      if (retorno) {
        await refetch();
        toastSuc('Promoção aplicada!');
        setOfferModal(prev => false);
      } else {
        toastErr(
          'Não foi possível aplicar a promoção, por favor tente novamente.',
        );
      }
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
    editProductModal,
    setEditProductModal,
    refetch,
    editImagesModal,
    setEditImagesModal,
  };
};

export default UseMyStore;
