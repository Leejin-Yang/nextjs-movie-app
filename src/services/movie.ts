import axios from 'axios';

import { MovieAPIRes, MovieList } from '@/types/movie';
import { MovieDetailApiRes } from '@/types/movieDetail';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';

export const getMovieListApi = (page: number = 1) =>
  axios.get<MovieAPIRes>(`${BASE_URL}popular`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_API_KEY,
      page,
    },
  });

export const getMovieDetailApi = (id: MovieList['id']) =>
  axios.get<MovieDetailApiRes>(`${BASE_URL}${id}`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_API_KEY,
    },
  });
