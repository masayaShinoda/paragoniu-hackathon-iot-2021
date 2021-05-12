import styles from "../styles/Nav.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
// import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'


export default function Nav() {
    function openNav() {
        document.getElementById("nav").style.display = "flex"
        document.getElementById("openNavBtn").style.display = "none"
        document.getElementById("closeNavBtn").style.display = "block"        
    }
    function closeNav() {
        document.getElementById("nav").style.display = "none"
        document.getElementById("closeNavBtn").style.display = "none"
        document.getElementById("openNavBtn").style.display = "block"
    }
    
    return (
        <>
        <button id="openNavBtn" onClick={openNav} className={styles.openNavBtn}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <button id="closeNavBtn" onClick={closeNav} className={styles.closeNavBtn} style={{display: `none`}}>
                <div>
                    <span></span>
                    <span></span>
                </div>
            </button>
        <div className={styles.navContainer} id="nav">            
            <a className={styles.logoBtn} href="/">
                <img className={styles.logo} src="/logo-12_result.png" alt="Logo" />
                {/* <img className={styles.logo} src="/428w/yeaksa-monochrome-06_result.png" alt="Logo" /> */}
            </a>
            <nav>
                <a href="/" id="homeBtn"><FontAwesomeIcon icon={faHome} />Home</a>
                {/* <a href="/news"><FontAwesomeIcon icon={faNewspaper} />News</a> */}
                {/* <a href="/store"><FontAwesomeIcon icon={faShoppingCart} />Store</a>     */}
                <a href="/emergency"><FontAwesomeIcon icon={faExclamationTriangle} />Emergency</a>
                <a href="/about"><FontAwesomeIcon icon={faQuestionCircle} />About</a>
            </nav>
        </div>

        </>
    )
}