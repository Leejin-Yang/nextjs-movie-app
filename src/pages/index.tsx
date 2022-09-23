import type { GetServerSideProps } from 'next';
import Link from 'next/link';

import Seo from '@/components/Seo';
import { getMovieListApi } from '@/services/movie';
import { MovieList } from '@/types/movie';

import styles from './index.module.scss';

interface Props {
  results: MovieList[];
}

const Home = ({ results }: Props) => {
  return (
    <>
      <Seo title='Home' />
      <ul className={styles.movieList}>
        {results?.map((movie) => (
          <li key={movie.id}>
            <Link href={`movies/${movie.title}/${movie.id}`}>
              <a>{movie.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await getMovieListApi({ page: 1 });
  const { results } = response.data;

  return {
    props: { results },
  };
};
