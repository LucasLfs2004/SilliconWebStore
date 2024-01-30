import axios from 'axios';
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
    const response = await Api.post(`/upload`, files, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const createProduct = async formData => {
  try {
    const response = await Api.post(
      `/product`,

      formData,

      {
        headers: {
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

export const getProducts = async () => {
  try {
    const response = await Api.get(`/product/40`);
    // console.log('products request', response);
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
    console.log(response);
    return response.data;
  } catch (error) {
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
    // console.log('user request', response);
    return response.data;
  } catch (error) {
    return error;
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

// export const testRequest = async formData => {
//   try {
//     const response = await Api.post(
//       `/product`,

//       formData,

//       {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       },
//     );
//     return response;
//   } catch (error) {
//     return error;
//   }
// };

// export const fetchNowPlaying = async () => {
//   try {
//     return (await Api.get('/movies/now_playing')).data;
//   } catch (error) {
//     return error;
//   }
// };

// export const fetchOnTheAir = async () => {
//   try {
//     return (await Api.get('/series/on_the_air')).data;
//   } catch (error) {
//     return error;
//   }
// };

export const getCep = async cep => {
  try {
    return (await axios.get(`https://viacep.com.br/ws/${cep}/json/`)).data;
  } catch (error) {
    return error;
  }
};
