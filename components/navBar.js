import { Inter } from '@next/font/google'
import styles from 'styles/navbar.module.scss'
import { render } from 'react-dom'
import { Link } from 'react-scroll'
import logo from 'public/images/Logo.png'
import basket from 'public/icons/basket.png'

export default function NavBar() {
    return (
        <>
        <div class='header navbar-header'>
            <div class='container is-fluid navbar-container p-0'>
                <div class='columns navbar-columns'>
                    <div class='column is-4 navbar-logo'>
                        <img src={logo.src} alt='logo'></img>
                    </div> 
                    <div class='column is-4 navbar-options'>
                        <ul class='options'>
                            <Link to='titleBanner-hero' smooth={true} offset={0} duration={500}>
                                <li class='hem'>HEM</li>
                            </Link>
                            <Link to='menu-section' smooth={true} offset={0} duration={500}>
                                <li class='meny'>MENY</li>
                            </Link>
                            <Link to='aboutus-section' smooth={true} offset={-50} duration={500}>
                                <li class='om-oss'>OM OSS</li>
                            </Link>
                            <Link to='info-section' smooth={true} offset={0} duration={500}>
                                <li class='kontakt'>KONTAKT</li>
                            </Link>
                        </ul>
                    </div> 
                    <div class='column is-4 navbar-button'>
                        <a href='https://www.foodora.se/en/restaurant/wuvx/hornet-vasteras'>
                            <button class='button navbar-orderButton'>
                                <img src={basket.src} alt='basket'></img>
                                <p class='button-label'>BESTÄLL TAKEAWAY</p>
                            </button>
                        </a> 
                    </div> 
                </div>
            </div>
        </div>
        </>
    )
}