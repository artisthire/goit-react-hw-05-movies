import axios from 'axios';

const axiosInstance = axios.create({
  method: 'get',
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '157707c22d4cc8eeebe0477c49922db6',
    page: 1,
  },
});

export async function fetchAllMovies() {
  try {
    const { data } = await axiosInstance({
      url: '/trending/movie/day',
    });

    return data.results;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}

export async function fetchFilteredMovies(query) {
  try {
    const { data } = await axiosInstance({
      url: '/search/movie',
      params: {
        query,
      },
    });

    if (data.results.length === 0) {
      throw new Error(`Not found for request: "${query}"`);
    }

    return data.results;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}

export async function fetchMovieDetails(moveID) {
  try {
    const { data } = await axiosInstance({
      url: `/movie/${moveID}`,
    });
    return data;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}

export async function fetchMovieCredits(moveID) {
  try {
    const { data } = await axiosInstance({
      url: `/movie/${moveID}/credits`,
    });
    return data.cast.slice(0, 15);
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}

export async function fetchMovieReviews(moveID) {
  try {
    const { data } = await axiosInstance({
      url: `/movie/${moveID}/reviews`,
    });

    if (data.results.length === 0) {
      throw new Error('We don`t have any reviews for this movie');
    }

    return data.results;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}

export function transformResponse(items, baseURL = '') {
  return items.map(item => ({
    key: item.id,
    label: item.title,
    toLink: `${baseURL}${item.id}`,
  }));
}

export const IMG_URL_BASE = 'https://image.tmdb.org/t/p/w500';
