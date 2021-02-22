import styles from "../styles/Nav.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
    return (
        <nav className={styles.navBar}>
            <a href="/">
                <img src="/logo-12_result.png" alt="InfoCov"/>            
            </a>
            <ul>                
                
                <li><a href="/news"><FontAwesomeIcon icon={faNewspaper} />News</a></li>
                <li><a href="/store"><FontAwesomeIcon icon={faShoppingCart} />Store</a></li>
                <li><a href="/emergency"><FontAwesomeIcon icon={faExclamationTriangle} />Emergency</a></li>
                {/* <li><a href="/emergency">លេខ​ទំនាក់ទំនង​បន្ទាន់</a></li>                
                {/* <li><a href="/">ទំព័រដើម</a></li> */}
            </ul>
        </nav>
    )
}