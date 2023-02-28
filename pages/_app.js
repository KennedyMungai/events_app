import Footer from '@/src/components/footer/footer'
import Header from '@/src/components/header/header'
import '@/styles/globals.css'

export default function App({ Component, pageProps })
{
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
