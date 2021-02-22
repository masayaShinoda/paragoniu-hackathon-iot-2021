import styles from "../styles/Nav.module.css"

export default function Nav() {
    return (
        <nav className={styles.navBar}>
            <a href="/">
                <img src="/logo-12_result.png" alt="InfoCov"/>            
            </a>
            <ul>                
                
                <li><a href="/news">News</a></li>
                <li><a href="/">Store</a></li>
                <li><a href="/emergency">Emergency</a></li>
                {/* <li><a href="/emergency">លេខ​ទំនាក់ទំនង​បន្ទាន់</a></li>                
                {/* <li><a href="/">ទំព័រដើម</a></li> */}
            </ul>
        </nav>
    )
}