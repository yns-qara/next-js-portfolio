import styles from '../styles/sidebar.module.css'
import Link from 'next/link'
import Home from '../components/SVGs/Home'
import User from './SVGs/User'
import Ham from './SVGs/Ham'
import Bag from './SVGs/Bag'
import Message from './SVGs/Message'
const Sidebar = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.container}>
                <div className={styles.logo}>LOGO</div>

                <div className={styles.navigation}>
                    <div>
                        <div> <Home /> </div>
                        <Link href="#">Home</Link>
                    </div>
                    <div>
                        <div> <User /> </div>
                        <Link href="#">About</Link>
                    </div>
                    <div>
                        <div> <Ham /> </div>
                        <Link href="#">Services</Link>
                    </div>
                    <div>
                        <div> <Bag /></div>
                        <Link href="#">Portfolio</Link>
                    </div>
                    <div>
                        <div> <Message /> </div>
                        <Link href="#">Contact</Link>
                    </div>
                </div>

                <div className={styles.footer}>
                    this is the mini footer for this single page app
                </div>
            </div>
        </div>
    )
}

export default Sidebar