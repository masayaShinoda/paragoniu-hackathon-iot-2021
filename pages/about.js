import Head from 'next/head'
import styles from '../styles/Content.module.css'
import Nav from "../components/nav"

export default function Store() {

    return (
        <>         
        <Head>
            <title>InfoCov | About</title>
            {/* <link rel="icon" href="/electron-03_result.png" /> */}
            <link rel="manifest" href="manifest.json" />
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
            <link rel="manifest" href="/icons/site.webmanifest" />
        </Head>
            <Nav />
            <div className={styles.contentContainer} style={{marginTop: `25vh`}}>
                <h1 style={{fontSize: `3.25rem`, margin: `1.1rem auto`, maxWidth: `fit-content`}}>About Us</h1>
                <span style={{display: `flex`, flexDirection: `column`,alignItems: `center`}}>

                <img width="250px" src="/widescreenlogo.png"></img>
                {/* <h2>Team Members:</h2> */}
                <span style={{display: `flex`, flexWrap: `wrap`, justifyContent: `space-evenly`, paddingBottom: `1.25rem`}}>
                    <p style={{fontSize: `1.5rem`, margin:`0 1.1rem`}}>Masaya Shida</p>
                    <p style={{fontSize: `1.5rem`, margin:`0 1.1rem`}}>Sou Sathya Kim</p>
                    <p style={{fontSize: `1.5rem`, margin:`0 1.1rem`}}>Chakriya Sroy</p>
                    <p style={{fontSize: `1.5rem`, margin:`0 1.1rem`}}>Porchou Sok</p>
                    <p style={{fontSize: `1.5rem`, margin:`0 1.1rem`}}>Somavutey Um</p>
                </span>
                <p style={{textAlign: `center`,  paddingBottom: `2.5rem`}}>We are a team of freshment students working together to prove that we can all utilize our own unique skills and abilities to help in this global pandemic.</p>
                </span>
            </div>
        </>
    )
}