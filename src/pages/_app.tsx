import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Grupo Powertrend Boilerplate</title>
        <link rel="shortcut icon" href="/img/powertrend-favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/img/powertrend-favicon-32x32.png" />
        <meta
          name="description"
          content="Boilerplate Powertrend, React, NextJs e Styled Component"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
export default App
