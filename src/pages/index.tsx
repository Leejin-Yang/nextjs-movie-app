import type { NextPage } from 'next'
import { useCallback, useState } from 'react'
import { useMount } from 'react-use'

import Seo from '@/components/Seo'
import { getMovieListApi } from '@/services/movie'
import { MovieList } from '@/types/movie'

const Home: NextPage = () => {
  const [movies, setMovies] = useState<MovieList[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  const getMovieList = useCallback(async () => {
    const response = await getMovieListApi({ page: currentPage })
    const { results } = response.data

    setMovies(results)
  }, [currentPage])

  useMount(() => {
    getMovieList()
  })

  return (
    <>
      <Seo title='Home' />
      {movies.length === 0 && <h4>Loading...</h4>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  )
}

export default Home
