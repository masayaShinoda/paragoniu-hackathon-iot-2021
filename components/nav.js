import styles from "../styles/Nav.module.css"

export default function Nav() {
    return (
        <nav className={styles.navBar}>
            <img src="/logo-12_result.png" alt="InfoCov"/>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/emergency">Emergency</a></li>                
            </ul>
        </nav>
    )
}