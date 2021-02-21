import Head from 'next/head'
import Nav from "../components/nav"
import NewsData from "../components/newsData"
import styles from '../styles/Home.module.css'

export default function News() {
  return (
      <>
        <Head>
            <title>Team Electron</title>
            <link rel="icon" href="/electron-03_result.png" />
        </Head>
        <Nav />
        <div className={styles.container}>
        <NewsData />
        </div>
      </>
  )
}