import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import { Link } from 'react-scroll'
import styles from 'styles/footer.module.scss'
import instagram from 'public/icons/instagram.png'
import facebook from 'public/icons/facebook.png'
import logo from 'public/images/Logo.png'
import toTop from 'public/icons/toTop.png'

export default function Footer(props) {
    const profile = props.profile;

    return (
       <div className="footer">
            <div className='container is-fluid footer-container px-7'>
                <div className='columns is-fluid footer-columns'>
                    <div className='column footer-socials'>
                        <div className='footer-inner'>
                            <div className='footer-inner-content'>
                                <div class='icons'>
                                    <a href={profile.instagram} target={'_blank'}><img src={instagram.src} className='footer-icon'></img></a>
                                    <a href={profile.instagram} target={'_blank'}><img src={facebook.src} className='footer-icon'></img></a>
                                </div>
                                <p className='copyright'>© Hörnet Västerås 2020 • All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                    <div className='column footer-logo'>
                        <img src={logo.src} alt='logo' className='footer-logo-img'></img>
                    </div>
                    <div className='column footer-toTop'>
                        <div className='footer-toTop-inner'>
                            <Link to='titleBanner-hero' smooth={true} offset={0} duration={500}>
                                <img src={toTop.src} className='toTop'></img>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}