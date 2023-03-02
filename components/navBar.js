import { Link } from 'react-scroll'
import { useState, useEffect } from 'react'
import logo from 'public/images/Logo.png'
import basket from 'public/icons/basket.png'
import mobileBasket from 'public/icons/mobileBasket.png'
import hamburger from 'public/icons/hamburger.png'

export default function NavBar() {
    const [activeItem, setActiveItem] = useState('home')

    const onWindowScroll = () => {
        let activeItem = 'home';

        if (window.scrollY >= 0 && window.scrollY <= 900) {
            activeItem = 'home';
        } else if (window.scrollY > 900 && window.scrollY <= 2000) {
            activeItem = 'menu';
        } else if (window.scrollY > 2000 && window.scrollY <= 2400) {
            activeItem = 'about';
        } else {
            activeItem = 'contact';
        }
        
        setActiveItem(activeItem);
    }
    
    useEffect(() => {
        window.addEventListener('scroll', onWindowScroll)

        return () => {
            window.removeEventListener('scroll', onWindowScroll)
        }
    }, []);
    

    return (
        <div className='header navbar-header'>
            <div className='container is-fluid navbar-container'>
                <div className='columns navbar-columns'>
                    <div className='column navbar-logo'>
                        <img src={logo.src} alt='logo'></img>
                    </div> 
                    <div className='column navbar-options'>
                        <ul className='options'>
                            <Link to='titleBanner-hero' smooth offset={0} duration={500}>
                                <li className={`option ${activeItem === 'home' ? 'active' : ''} `}>HEM</li>
                            </Link>
                            <Link to='menu-section' smooth offset={0} duration={500}>
                                <li className={`option ${activeItem === 'menu' ? 'active' : ''} `}>MENY</li>
                            </Link>
                            <Link to='aboutus-section' smooth offset={-50} duration={500}>
                                <li className={`option ${activeItem === 'about' ? 'active' : ''} `}>OM OSS</li>
                            </Link>
                            <Link to='info-section' smooth offset={0} duration={500}>
                                <li className={`option ${activeItem === 'contact' ? 'active' : ''} `}>KONTAKT</li>
                            </Link>
                        </ul>
                    </div> 
                    <div className='column navbar-button'>
                        <a href='https://www.foodora.se/en/restaurant/wuvx/hornet-vasteras' target={'_blank'}>
                            <button className='button navbar-orderButton'>
                                <img src={basket.src} alt='basket'></img>
                                <p className='button-label'>BESTÄLL TAKEAWAY</p>
                            </button>
                        </a> 
                    </div> 
                    <div className='column navbar-mobile-buttons'>
                    <a href='https://www.foodora.se/en/restaurant/wuvx/hornet-vasteras' target={'_blank'}><img src={mobileBasket.src}/></a>
                        <img src={hamburger.src}/>
                    </div>
                </div>
            </div>
        </div>
    )
}