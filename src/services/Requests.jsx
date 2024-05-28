import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { clearUser } from '../store/actions/userActions';
import { Api } from './Api';

export const createAccount = async user => {
  try {
    const response = await Api.post('/create-account', user, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const effectLogin = async dataLogin => {
  console.log(dataLogin);
  try {
    const response = await Api.post('/login', dataLogin, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = response;
    return data;
  } catch (error) {
    return error;
  }
};

export const uploadImages = async files => {
  try {
    const response = await Api.post(`/product/image`, files, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const patchImages = async files => {
  try {
    const response = await Api.patch(`/product/image`, files, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const createProduct = async (token, formData) => {
  try {
    const response = await Api.post(
      `/product`,

      formData,

      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const updateProduct = async (token, params) => {
  try {
    console.log(token);
    const response = await Api.put('/product', params, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    // console.log('return of setVoucher', response);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getProducts = async () => {
  try {
    const response = await Api.get(`/product/40`);
    // console.log('products request', response);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getProductsOfBrand = async brand => {
  try {
    const response = await Api.get(`/product/brand/${brand}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getProduct = async id => {
  try {
    console.log(id);
    const response = await Api.get(`/product/id/${id}`);
    // console.log('products request', response);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const searchProducts = async name_search => {
  try {
    const response = await Api.get(`/product/name/${name_search}`);
    console.log(response);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getBrands = async () => {
  try {
    const response = await Api.get(`/brand`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const postBrand = async (data, token) => {
  try {
    const response = await Api.post('/brand', data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const patchBrand = async (data, token) => {
  try {
    const response = await Api.patch('/brand', data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteBrand = async (data, token) => {
  try {
    const response = await Api.delete(`/brand/${data}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getCategorys = async () => {
  try {
    const response = await Api.get('/category');
    return response.data;
  } catch (error) {
    return error;
  }
};

export const postCategory = async (data, token) => {
  try {
    const response = await Api.post('/category', data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const patchCategory = async (data, token) => {
  try {
    const response = await Api.patch('/category', data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteCategory = async (data, token) => {
  try {
    const response = await Api.delete(`/category/${data}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getProfile = async token => {
  try {
    const response = await Api.get('/person/me', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('user request', response);
    return response.data;
  } catch (error) {
    console.log(error);

    // if (error?.response?.status === 401) {
    //   UserExpired();
    // }
    return error.response;
  }
};
export const setPrincipalShipUser = async (id, token) => {
  try {
    const response = await Api.post(
      '/principal-ship',
      { id: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    console.log('return of setPrincipalShip', response);
    return response.data;
  } catch (error) {
    console.log(error);

    // if (error?.response?.status === 401) {
    //   UserExpired();
    // }
    return error.response;
  }
};

export const getSellerData = async token => {
  try {
    const response = await Api.get('/seller/me', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    // console.log('user request', response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const getCart = async token => {
  try {
    const response = await Api.get('/cart', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('cart request with token', response);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const clearCartUser = async token => {
  try {
    const response = await Api.delete('/cart', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('cart delete', response);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const setShipInfo = async (token, params) => {
  try {
    console.log(params);
    const response = await Api.post('/cart-ship', params, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('cart request with token', response);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const setVoucher = async (token, code) => {
  try {
    console.log(code);
    console.log(token);
    const response = await Api.post('/cart-discount', code, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('return of setVoucher', response);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const clearVoucher = async token => {
  try {
    const response = await Api.delete('/cart-discount', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const addCartItem = async (token, params) => {
  try {
    const response = await Api.post('/cart-item', params, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const updateCartItem = async (token, params) => {
  try {
    const response = await Api.patch('/cart-item', params, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const removeCartItem = async (token, params) => {
  try {
    const response = await Api.delete(`/cart-item/${params}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getShipValue = async region => {
  try {
    const response = await Api.get(`/ship-value/${region}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getShipInfo = async token => {
  try {
    const response = await Api.get('/ship-info', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const postShipInfo = async (token, params) => {
  try {
    const response = await Api.post('/ship-info', params, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
export const patchShipInfo = async (token, params) => {
  try {
    const response = await Api.patch('/ship-info', params, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteProduct = async (token, id_product) => {
  try {
    const response = await Api.delete(`/product/${id_product}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const setOfferProduct = async (token, params) => {
  try {
    console.log('parametros de postOfferProduct', params);
    const response = await Api.patch(`/seller/product/offer`, params, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const postDescriptionProduct = async (token, params) => {
  try {
    console.log('parametros de postOfferProduct', params);
    const response = await Api.post(`/seller/product/description`, params, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const patchDescriptionProduct = async (token, params) => {
  try {
    const response = await Api.patch(`/seller/product/description`, params, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getBanners = async () => {
  try {
    const response = await Api.get(`/banner`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const postBanner = async (data, token) => {
  try {
    const response = await Api.post('/banner', data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const patchBanner = async (data, token) => {
  try {
    const response = await Api.patch('/banner', data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteBanner = async (id, token) => {
  try {
    const response = await Api.delete(`/banner/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getVouchers = async token => {
  try {
    const response = await Api.get(`/voucher`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const postVoucher = async (data, token) => {
  try {
    console.log({ data, token });
    const response = await Api.post(`/voucher`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteVoucher = async (code, token) => {
  try {
    const response = await Api.delete(`/voucher/${code}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getOrders = async token => {
  try {
    const response = await Api.get(`/purchase-orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getOrder = async (id, token) => {
  try {
    const response = await Api.get(`/purchase-orders/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getCep = async cep => {
  try {
    if (cep !== undefined && cep !== null && cep !== '') {
      return (
        await axios.get(`https://viacep.com.br/ws/${cep}/json/`, {
          headers: {},
        })
      ).data;
    }
  } catch (error) {
    return error;
  }
};

export const UserExpired = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  localStorage.removeItem('user');
  dispatch(clearUser());
  navigate('signin', 'Sua sessão expirou, por favor realize um novo login');
};
