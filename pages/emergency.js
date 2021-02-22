import Head from 'next/head'
import styles from '../styles/Content.module.css'
import Nav from "../components/nav"
export default function Emergency() {
    return (
        <> 
        <Head>
            <title>InfoCov | Emergency Contacts</title>
            {/* <link rel="icon" href="/electron-03_result.png" /> */}
            <link rel="manifest" href="manifest.json" />
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
            <link rel="manifest" href="/icons/site.webmanifest" />
        </Head>
            <Nav />
            <div className={styles.contentContainer} style={{marginTop: `25vh`}}>
            <h1 style={{fontSize: `3.25rem`, margin: `1.1rem auto`, maxWidth: `fit-content`}}>Emergency Contacts</h1>

                <table className={styles.emergencyContainer}>
                <thead>
                    <tr>
                    <th>Contact</th>
                    <th>Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Hospital</td>
                    <td>
                        <a href="tel:115">
                        115&nbsp;
                        </a>
                        <a href="tel:012825424">
                        &nbsp;012 825 424&nbsp;
                            </a>
                        <a href="tel:012488868">
                        &nbsp;012 488 868&nbsp;    
                        </a>
                    </td>
                    </tr>
                    <tr>
                    <td>Police</td>
                    <td>
                        <a href="tel:0977780002">
                        097 778 0002 (ស្នងការរដ្ឋាននគរបាលរាជធានីភ្នំពេញ) 
                        </a>
                    </td>
                    </tr>
                </tbody>
                </table>
                <div className={styles.mobileEmergency}>
                    <span>
                        <img src="/logo_150dp_embossi.png" alt="police-logo"/>
                        <span>
                            
                            <a href="tel:0977780002">
                        <img src="/—Pngtree—phone icon in solid circle_5552270.png" />
                            097 778 0002 
                            </a>

                        </span>
                    </span>
                    <span>
                        <img src="/MOH_logo.png" alt="moh-logo"/>
                        <span>
                            <a href="tel:115">
                            <img src="/—Pngtree—phone icon in solid circle_5552270.png" />
                            115
                            </a>
                            <a href="tel:012825424">
                            <img src="/—Pngtree—phone icon in solid circle_5552270.png" />
                            012 825 424
                            </a>
                            <a href="tel:012488868">
                            <img src="/—Pngtree—phone icon in solid circle_5552270.png" />
                            012 488 868    
                            </a>
                        </span>
                    </span>
                    
                </div>
            </div>
        </>
    )
}