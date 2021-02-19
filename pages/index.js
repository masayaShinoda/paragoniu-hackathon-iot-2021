import { useState, useEffect } from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [lights, setLights] = useState((lights) => {return false}); // by default lights are off
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <button onClick={() => setLights(!lights)}>Switch!</button>
        {/* if state is true, lights on, and vice versa */}
        {
          lights ? <img id="house" src="/lights-on.png" alt=""/> : <img id="house" src="/lights-off.png" alt=""/>
        }
        
      </main>

      <footer className={styles.footer}>
        <span style={{display: `flex`, alignItems: `center`}}>
          A project by{' '}
          <img src="/electron-03_result.png" alt="Team Electron" className={styles.logo} />
        </span>
      </footer>
    </div>
  )
}
