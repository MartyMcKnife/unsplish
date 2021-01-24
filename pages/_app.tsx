import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Unsplish</title>
        <link rel="icon" href="/unplash_logo.svg"></link>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="Unsplish" />
        <meta
          name="description"
          content="Free image hosting, with a masonary display"
        />
        <meta
          name="keywords"
          content="photo, image, devchallenges, react, project, hosting"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default App;
