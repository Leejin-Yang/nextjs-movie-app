import { GetServerSideProps } from 'next';

import Seo from '@/components/Seo';

// type Variables = MovieList['id'] | MovieList['title']

interface Props {
  variables: string[];
}

const MovieDetail = ({ variables }: Props) => {
  const [title] = variables;

  return (
    <>
      <Seo title={title} />
      <h1>{title}</h1>
    </>
  );
};

export default MovieDetail;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const variables = params?.params;

  return {
    props: { variables },
  };
};
