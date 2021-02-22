import Head from 'next/head'
import Nav from "../components/nav"
import CovidData from "../components/covidData"
import contentStyles from "../styles/Content.module.css"
import styles from '../styles/Home.module.css'
import { useCookies } from "react-cookie"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>InfoCov | Home</title>
        {/* <link rel="icon" href="/electron-03_result.png" /> */}
        <link rel="manifest" href="manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
      </Head>
      <Nav />
      <div className={contentStyles.contentContainer}>
        <img src="/logo-12_result.png"></img>
        <h1 style={{marginTop: 0}}>Information you can trust.</h1>
        <CovidData />
        
      </div>
      <footer className={styles.footer}>
        <span style={{display: `flex`, alignItems: `center`}}>
          A project by{' '}
          <img src="/electron-03_result.png" alt="Team Electron" className={styles.logo} />
        </span>

      </footer>
    </div>
  )
}
