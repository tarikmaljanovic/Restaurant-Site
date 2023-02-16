import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import { Link } from 'react-scroll'
import styles from 'styles/footer.module.scss'
import footerImg from 'public/images/footer/footerImg.png'
import instagram from 'public/icons/instagram.png'
import facebook from 'public/icons/facebook.png'
import findie from 'public/icons/findie.png'
import logo from 'public/images/Logo.png'
import toTop from 'public/icons/toTop.png'

export default function Footer() {
    return (
        <>
       <div class="footer">
            <div class='container is-fluid footer-container px-7'>
                <div class='columns is-fluid footer-columns'>
                    <div class='column footer-socials'>
                        <div class='footer-inner'>
                            <div class='footer-inner-content'>
                                <img src={instagram.src} class='footer-icon'></img>
                                <img src={facebook.src} class='footer-icon'></img>
                                <p class='copyright'>© Hörnet Västerås 2020 • All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                    <div class='column footer-logo'>
                        <img src={logo.src} alt='logo' class='footer-logo-img'></img>
                    </div>
                    <div class='column footer-toTop'>
                        <div class='footer-toTop-inner'>
                            <Link to='titleBanner-hero' smooth={true} offset={0} duration={500}>
                                <img src={toTop.src} class='toTop'></img>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}