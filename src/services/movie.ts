import axios from 'axios'
import { MovieAPIRes } from '@/types/movie'

const BASE_URL = 'https://api.themoviedb.org/3/movie/popular'

interface Params {
  page: number
}

export const getMovieListApi = (params: Params) =>
  axios.get<MovieAPIRes>(`${BASE_URL}`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_API_KEY,
      ...params,
    },
  })
