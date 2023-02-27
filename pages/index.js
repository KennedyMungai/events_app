import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home()
{
  const year = new Date().getFullYear().toString()

  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <img src="" alt="" />
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/about-us">About</a>
        </nav>
      </header>

      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>
        <p>@ {year} Some Dumbass Project</p>
      </footer>
    </>
  )
}
