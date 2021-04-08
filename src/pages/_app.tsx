import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Shelter Buddy | Animal Shelter Database System, Animal Shelter, Animal
          System, Shelter Software, Shelter Management
        </title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="##F6F7FA" />
        <meta
          name="description"
          content="Shelter Management Software, track your animals, volunteers, donors and more."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
