import type { GetServerSideProps } from 'next';
import Link from 'next/link';
import { dehydrate, QueryClient, useQuery } from 'react-query';

import Seo from '@/components/Seo';
import { getMovieListApi } from '@/services/movie';

import styles from './index.module.scss';

const Home = () => {
  const { data } = useQuery('movies', () => getMovieListApi().then((res) => res.data));

  return (
    <>
      <Seo title='Home' />
      <ul className={styles.movieList}>
        {data?.results?.map((movie) => (
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
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('movies', () => getMovieListApi().then((res) => res.data));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
