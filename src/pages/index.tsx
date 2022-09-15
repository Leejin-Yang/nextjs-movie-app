import type { GetServerSideProps } from 'next'

import Seo from '@/components/Seo'
import { getMovieListApi } from '@/services/movie'
import { MovieList } from '@/types/movie'

interface Props {
  results: MovieList[]
}

const Home = ({ results }: Props) => {
  return (
    <>
      <Seo title='Home' />
      <ul>
        {results?.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await getMovieListApi({ page: 1 })
  const { results } = response.data

  return {
    props: { results },
  }
}
