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


original : 	hsl(185, 94%, 13%)
tested : 	hsl(184, 72%, 13%)


new color pallete:

primary : 	hsl(186, 71%, 18%)
darker : 	hsl(184, 72%, 13%)
neutral : 	hsl(183, 100%, 90%)
beight blue : hsl(184, 100%, 79%)


*/

const Sidebar = ({about, setAbout ,home, setHome}) => {


    const toggle = () =>{
        setAbout(!about);
        setHome(!home);
    }


    return (
        <div className={styles.parent}>
            <div className={styles.container}>
                <div className={styles.logo}>LOGO</div>

                <div className={styles.navigation}>
                    <div onClick={toggle}>
                        <div> <Home /> </div>
                        <Link href="#">Home</Link>
                    </div>
                    <div onClick={toggle}>
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
                    <Link href="#">privacy</Link>
                    <Link href="#">ad choices</Link>
                    <Link href="#">advertising</Link>
                    <Link href="#">terms</Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar