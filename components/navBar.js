import { Inter } from '@next/font/google'
import styles from 'styles/navbar.module.scss'
import { render } from 'react-dom'
import logo from 'public/images/Logo.png'
import basket from 'public/icons/basket.png'

export default function NavBar() {
    return (
        <>
        <div class='header'>
            <div class='container is-fluid'>
                <div class='columns'>
                    <div class='column is-4'>
                        <img src={logo.src} alt='logo'></img>
                    </div> 
                    <div class='column is-4'>
                        <ul class='options'>
                            <li class='hem'>HEM</li>
                            <li class='meny'>MENY</li>
                            <li class='om-oss'>OM OSS</li>
                            <li class='kontakt'>KONTAKT</li>
                        </ul>
                    </div> 
                    <div class='column is-4'>
                        <button class='button'>
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