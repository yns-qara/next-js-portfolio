import styles from '../styles/sidebar.module.css'
import Link from 'next/link'
import Home from './SVGs/HomeSvg'
import User from './SVGs/User'
import Ham from './SVGs/Ham'
import Bag from './SVGs/Bag'
import Message from './SVGs/Message'


/*

home , about , servecies , portfolio , contact
are components not pages.
they are gonna be swithced using a function that will be trigered onclick

primary color : #02393e
secondary color : #0d484e
inBetween color : #045b62


*/

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