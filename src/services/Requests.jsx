import { Api } from './Api';

export const createAccount = async (
  name,
  cpf,
  email,
  birth,
  phone,
  password,
) => {
  try {
    const response = await Api.post(
      '/create-account',
      {
        name,
        cpf,
        email,
        birth,
        phone,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const effectLogin = async (email, password) => {
  console.log(email, password);
  try {
    const response = await Api.post(
      '/login',
      {
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = response.data;
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

export const testRequest = async formData => {
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
    return error;
  }
};

export const fetchNowPlaying = async () => {
  try {
    return (await Api.get('/movies/now_playing')).data;
  } catch (error) {
    return error;
  }
};

export const fetchOnTheAir = async () => {
  try {
    return (await Api.get('/series/on_the_air')).data;
  } catch (error) {
    return error;
  }
};
