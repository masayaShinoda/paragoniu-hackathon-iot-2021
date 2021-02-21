import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from "../components/nav"
export default function Emergency() {
    return (
        <> 
            <Head>
                <title>Team Electron</title>
                <link rel="icon" href="/electron-03_result.png" />
            </Head>
            <Nav />
        </>
    )
}