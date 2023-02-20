import { Inter } from '@next/font/google'
import styles from 'styles/navbar.module.scss'
import { render } from 'react-dom'
import { Link } from 'react-scroll'
import { useState, useEffect } from 'react'
import logo from 'public/images/Logo.png'
import basket from 'public/icons/basket.png'

export default function NavBar() {
    const [hem, setHem] = useState(false);
    const [meny, setMeny] = useState(false);
    const [omoss, setOmoss] = useState(false);
    const [kontakt, setKontakt] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setHem(window.scrollY >= 0 && window.scrollY <= 900);
            setMeny(window.scrollY > 900 && window.scrollY <= 2200);
            setOmoss(window.scrollY > 2200 && window.scrollY <= 2700);
            setKontakt(window.scrollY > 2700);
        })
    },[]);
    

    return (
        <div className='header navbar-header'>
            <div className='container is-fluid navbar-container p-0'>
                <div className='columns navbar-columns'>
                    <div className='column is-4 navbar-logo'>
                        <img src={logo.src} alt='logo'></img>
                    </div> 
                    <div className='column is-4 navbar-options'>
                        <ul className='options'>
                            <Link to='titleBanner-hero' smooth={true} offset={0} duration={500}>
                                <li className={`hem ${hem ? '-active' : '-inactive'}`}>HEM</li>
                            </Link>
                            <Link to='menu-section' smooth={true} offset={0} duration={500}>
                                <li className={`meny ${meny ? '-active' : '-inactive' }`}>MENY</li>
                            </Link>
                            <Link to='aboutus-section' smooth={true} offset={-50} duration={500}>
                                <li className={`om-oss ${omoss ? '-active' : '-inactive'}`}>OM OSS</li>
                            </Link>
                            <Link to='info-section' smooth={true} offset={0} duration={500}>
                                <li className={`kontakt ${kontakt ? '-active' : '-inactive'}`}>KONTAKT</li>
                            </Link>
                        </ul>
                    </div> 
                    <div className='column is-4 navbar-button'>
                        <a href='https://www.foodora.se/en/restaurant/wuvx/hornet-vasteras'>
                            <button className='button navbar-orderButton'>
                                <img src={basket.src} alt='basket'></img>
                                <p className='button-label'>BESTÄLL TAKEAWAY</p>
                            </button>
                        </a> 
                    </div> 
                </div>
            </div>
        </div>
    )
}