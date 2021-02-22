import Head from 'next/head'
import Nav from "../components/nav"
import NewsData from "../components/newsData"
import styles from '../styles/Home.module.css'

export default function News() {
  return (
      <>
        <Head>
          <title>InfoCov | News</title>
          <link rel="icon" href="/electron-03_result.png" />
          <link rel="manifest" href="manifest.json" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
          <link rel="manifest" href="/icons/site.webmanifest" />
        </Head>
        <Nav />
        <div className={styles.container}>
        <NewsData />
        </div>
      </>
  )
}