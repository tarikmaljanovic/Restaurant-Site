import { Inter } from '@next/font/google'
import styles from '@/styles/Navbar.module.scss'
import { render } from 'react-dom'
import logo from '@/styles/Images/Logo.png'
import basket from '@/styles/Images/Vector.png'

export default function NavBar() {
    return (
        <div className='header'>
            <div class='container is-fluid px-0'>
                <div class='columns'>
                     <div class='column is-4 has-text-centered'>
                        <img src={logo.src} alt='Logo'></img>
                    </div>
                    <div class='column is-4 has-text-centered'>
                         <ul className={styles.options}>
                            <li className={styles.activeOpt}>HEM</li>
                            <li>MENY</li>
                            <li>OM OSS</li>
                            <li>KONTAKT</li>
                         </ul>
                    </div>
                    <div class='column is-4 has-text-centered'>
                        <div class="button"><img src={basket.src} alt='Basket' className={styles.basket}></img>BESTÄLL TAKEAWAY</div>
                    </div>
                </div>
            </div>
        </div>
    )
}