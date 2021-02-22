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
        <title>Team Electron</title>
        <link rel="icon" href="/electron-03_result.png" />
      </Head>
      <Nav />
      <div className={contentStyles.contentContainer}>
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
