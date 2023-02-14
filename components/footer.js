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
            <div class="hero-body footer-hero p-0">
                <div class='container is-fluid footer-container'>
                    <img src={footerImg.src} class='footer-background'></img>
                    <div class='columns footer-columns'>
                        <div class='column footer-socials'>
                            <div class='footer-socials-icons'>
                                <img src={instagram.src} class='footer-instagram'></img>
                                <img src={facebook.src} class='footer-facebook'></img>
                            </div>
                        </div>
                        <div class='column'>
                            <div class='notification is-primary'></div>
                        </div>
                        <div class='column'>
                            <div class='notification is-primary'></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}