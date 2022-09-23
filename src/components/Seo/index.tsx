import Head from 'next/head';

interface Props {
  title: string;
}

const Seo = ({ title }: Props) => {
  return (
    <Head>
      <title>{title} | Next Movies</title>
      <meta name='description' content='Next Movie App' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default Seo;
