import { Api } from './Api';

const headers = {
  'Content-Type': 'application/json',
};

export const createAccount = async (
  name,
  cpf,
  email,
  birth,
  phone,
  password,
) => {
  try {
    const response = await Api.post('/create-account', {
      name,
      cpf,
      email,
      birth,
      phone,
      password,
    });
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const effectLogin = async (email, pass) => {
  try {
    const response = await Api.post('/login', {
      email,
      pass,
    });
    const data = response.data;
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchPopularMovies = async page => {
  try {
    return (await Api.get(`/movies/popular?page=${page}`)).data;
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

export const getProviders = async () => {
  const [movieProviders, seriesProviders] = await Promise.all([
    Api.get('/movies/providers', { headers: headers }),
    Api.get('/series/providers', { headers: headers }),
  ]);

  return [
    {
      movieProviders,
      seriesProviders,
    },
  ];
};

export const getRecommendations = async () => {
  try {
    const [firstRecommendations, secondRecommendations, thirdRecommendations] =
      await Promise.all([
        Api.get('/recommendations', { headers: headers }),
        Api.get('/recommendations', { headers: headers }),
        Api.get('/recommendations', { headers: headers }),
      ]);
    return [
      {
        firstRecommendations,
        secondRecommendations,
        thirdRecommendations,
      },
    ];
  } catch (error) {
    return null;
  }
};

export const fetchRecommendationsPaginate = async () => {
  try {
    return (await Api.get('/recommendations')).data;
  } catch (error) {
    return error;
  }
};

export const getGenres = async () => {
  const genres = await Api.get('/movies/genres', { headers: headers });
  return genres.data;
};

export const getMoviesGenreId = async (id, page) => {
  const genres = await Api.get(`/movies/genre/${id}?page=${page}`, {
    headers: headers,
  });
  return genres.data;
};

export const getSeriesGenreId = async (id, page) => {
  const genres = await Api.get(`/series/genre/${id}?page=${page}`, {
    headers: headers,
  });
  return genres.data;
};

export const getProviderInfo = async (id, page, endpoint) => {
  try {
    return (
      await Api.get(`/${endpoint}/provider/${id}?page=${page}`, {
        headers: headers,
      })
    ).data;
  } catch (error) {
    console.error(error);
  }
};

export const getDiscoverMovie = async (genreId, providerId, page) => {
  try {
    return (
      await Api.get(
        `/movies/discover?genre_ids=${genreId}&provider_ids=${providerId}&page=${page}`,
        { headers: headers },
      )
    ).data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieInfo = async movieId => {
  try {
    return (await Api.get(`/movies/${movieId}`, headers)).data;
  } catch (error) {
    console.error(error.message);
  }
};

// export const getPopularMoviesAndSeries = async () => {
//   const [movies, series, releases] = await Promise.all([
//     Api.get('/movies/popular'),
//     Api.get('/series/popular'),
//     Api.get('/movies/now_playing'),
//   ]);

//   return {
//     movies,
//     series,
//     releases,
//   };
// };
