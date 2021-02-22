import Head from 'next/head'
import styles from '../styles/Content.module.css'
import Nav from "../components/nav"
export default function Emergency() {
    return (
        <> 
            <Head>
                <title>Team Electron</title>
                <link rel="icon" href="/electron-03_result.png" />
            </Head>
            <Nav />
            <div className={styles.contentContainer} style={{marginTop: `25vh`}}>
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
                        <a href="tel:0977780002">
                          097 778 0002 
                        </a>
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