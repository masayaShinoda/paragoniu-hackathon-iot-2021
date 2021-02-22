import Head from 'next/head'
import styles from '../styles/Content.module.css'
import Nav from "../components/nav"
import StoreData from "../components/storeData"

export default function Store() {

    return (
        <>         
        <Head>
            <title>InfoCov | Store</title>
            <link rel="icon" href="/electron-03_result.png" />
            <link rel="manifest" href="manifest.json" />
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
            <link rel="manifest" href="/icons/site.webmanifest" />
        </Head>
            <Nav />
            <div className={styles.contentContainer} style={{marginTop: `25vh`}}>
            <h1 style={{fontSize: `3.25rem`, margin: `1.1rem auto`, maxWidth: `fit-content`}}>Store</h1>
                <StoreData />
            </div>
        </>
    )
}