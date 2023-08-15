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

export const effectLogin = async (email, senha) => {
  console.log(email, senha);
  try {
    const response = await Api.post(
      '/login',
      {
        email,
        senha,
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
    return error;
  }
};

export const fetchPopularSeries = async page => {
  try {
    return (await Api.get(`/series/popular?page=${page}`)).data;
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
