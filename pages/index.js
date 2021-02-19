import { useState, useEffect } from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useCookies } from "react-cookie"
export default function Home() {
  const token = "36beb28052fa27ba685e891e385a4b";
  const [lights, setLights] = useState((lights) => {return false}); // by default lights are off
  useEffect(() => {
    fetch(
        'https://graphql.datocms.com/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({
            query: `{ 
                allLights {
                  boolean
                }
              }`
          }),
        } 
    )
    .then(res => res.json())
    .then((res) => {
        console.log(res.data["allLights"][0]["boolean"])
        setLights(res.data["allLights"][0]["boolean"])
    })
    .catch((error) => {
        console.log(error);
    });
}, [])

const SiteClient = require("datocms-client").SiteClient;
const client = new SiteClient(token);
const itemId = "21519068";
client.items
  .update(itemId, {
    boolean: lights,
  })
  .then((item) => {
    console.log(item);
  })
  .catch((error) => {
    console.error(error);
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Team Electron</title>
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
