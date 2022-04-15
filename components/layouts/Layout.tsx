import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='author' content='Federico Jaeggi' />
        <meta name='description' content='Informacion sobre el pokemon XXXXX' />
        <meta name='keywords' content='XXXXX, pokemon, pokedex' />
        <meta property='og:title' content={`Informacion sobre ${title}`} />
        <meta
          property='og:description'
          content={`${title}, pokemon, pokedex`}
        />
        <meta property='og:image' content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main style={{ padding: '0 20px' }}>{children}</main>
    </>
  );
};
