import axios from 'axios'

import { MovieAPIRes, MovieList } from '@/types/movie'
import { MovieDetailApiRes } from '@/types/movieDetail'

const BASE_URL = 'https://api.themoviedb.org/3/movie/'

interface GetMovieListApiParams {
  page: number
}

export const getMovieListApi = (params: GetMovieListApiParams) =>
  axios.get<MovieAPIRes>(`${BASE_URL}popular`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_API_KEY,
      ...params,
    },
  })

export const getMovieDetailApi = (id: MovieList['id']) =>
  axios.get<MovieDetailApiRes>(`${BASE_URL}${id}`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_API_KEY,
    },
  })
