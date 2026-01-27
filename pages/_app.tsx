import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/accessoryShop/favicon.svg" />
        <link rel="icon" href="/accessoryShop/favicon.ico" />
        <link rel="apple-touch-icon" href="/accessoryShop/favicon.svg" />
        <meta name="theme-color" content="#C4BDB6" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jewelry Collection" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
