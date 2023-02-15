import { render } from 'react-dom'
import { Inter } from '@next/font/google'
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
       <section class="hero">
       <img src={footerImg.src} class='footer-background'></img>
            <div class="hero-body footer-hero">
                <div class='container is-fluid footer-container px-7'>
                    <div class='columns footer-columns'>
                        <div class='column footer-socials'>
                            <div class='footer-socials-icons'>
                                <img src={instagram.src} class='footer-icon'></img>
                                <img src={facebook.src} class='footer-icon'></img>
                            </div>
                            <p class='copyright'>© Hörnet Västerås 2020 • All rights reserved.</p>
                        </div>
                        <div class='column footer-logo'>
                            <img src={logo.src} alt='logo' class='footer-logo-img'></img>
                        </div>
                        <div class='column footer-findie'>
                            <div class='footer-toTop'>
                                <img src={toTop.src} class='toTop'></img>
                            </div>
                            <div class='footer-findie-description'>
                                <p class='findie-label'>Denna hemsida är skapad med hjälp av Findie</p>
                                <img src={findie.src} alt='findie' class='findie-logo'></img>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}