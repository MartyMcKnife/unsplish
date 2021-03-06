import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import type { AppProps } from "next/app";
import Head from "next/head";

config.autoAddCss = false;

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
        <script src="https://kit.fontawesome.com/4dd695d5aa.js"></script>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default App;
