import { Inter } from '@next/font/google'
import styles from 'styles/navbar.module.scss'
import { render } from 'react-dom'
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
                            <li class='hem'>HEM</li>
                            <li class='meny'>MENY</li>
                            <li class='om-oss'>OM OSS</li>
                            <li class='kontakt'>KONTAKT</li>
                        </ul>
                    </div> 
                    <div class='column is-4 navbar-button'>
                        <button class='button navbar-orderButton'>
                            <img src={basket.src} alt='basket'></img>
                            <p>BESTÄLL TAKEAWAY</p>
                        </button>
                    </div> 
                </div>
            </div>
        </div>
        </>
    )
}