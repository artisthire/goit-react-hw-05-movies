import axios from 'axios';

const axiosInstance = axios.create({
  method: 'get',
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'c4ff5df06d9c3bc212d0ff99e5222626',
    params: { page: 1 },
  },
});

export async function fetchAllMovies() {
  const { data } = await axiosInstance({
    url: '/trending/movie/day',
  });

  return data.results;
}

export async function fetchFilteredMovies(query) {
  const { data } = await axiosInstance({
    url: '/search/movie',
    params: {
      query,
    },
  });
  return data.results;
}

export async function fetchMovieDetails(moveID) {
  const { data } = await axiosInstance({
    url: `/movie/${moveID}`,
  });
  return data;
}

export async function fetchMovieCredits(moveID) {
  const { data } = await axiosInstance({
    url: `/movie/${moveID}/credits`,
  });
  return data.cast.slice(0, 15);
}

export async function fetchMovieReviews(moveID) {
  const { data } = await axiosInstance({
    url: `/movie/${moveID}/reviews`,
  });
  return data.results;
}

export function transfromResponse(items, baseURL = '') {
  return items.map(item => ({
    key: item.id,
    label: item.title,
    toLink: `${baseURL}${item.id}`,
  }));
}
