import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import { Link } from 'react-scroll'
import { useState } from 'react'
import styles from 'styles/titleBanner.module.scss'
import WorkingHours from 'components/workingHours.js'
import titleBannerImg from 'public/images/titleBanner/titleBannerImg.png'
import backgroundImg from 'public/images/titleBanner/background.png'
import clock from 'public/icons/clock.png'
import location from 'public/icons/location.png'
import phone from 'public/icons/phone.png'
import basket from 'public/icons/basket.png'
import arrow from 'public/icons/arrow.png'

export default function TitleBanner() {
    const [menuState, setMenuState] = useState(false);
    let visibilityCheck = menuState ? 'is-active' : '';

    return(
        <section className="hero is-large">
            <div className="hero-body titleBanner-hero p-0">
                <div className='rows titleBanner-rows'>
                    <div className='row titleBanner-head'>
                    <img src={backgroundImg.src} className='titleBanner-background'></img>
                        <div className='container px-0 is-fluid titleBanner-head-container'>
                            <div className='columns titleBanner-head-columns'>
                                <div className='column p-0 titleBanner-head-column'>
                                    <p className='bannerTitle'>Hörnet & <br/>Västerås</p>
                                </div>
                                <div className='column p-0 titleBanner-head-column'>
                                    <img src={titleBannerImg.src} alt='bannerImg' className='bannerImg'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row infocards-row'>
                        <div className='columns infocards-columns'>
                            <div className='column infocard-hours'>
                                <div className='notification hours p-5'>
                                    <img src={clock.src} alt='clock' className='clock-icon'></img>
                                    <p>Öppettider</p>
                                    <div className={`dropdown ${visibilityCheck}`}>
                                    <div className="dropdown-trigger">
                                        <button className="button " aria-haspopup="true" aria-controls="dropdown-menu2" onClick={() => setMenuState(!menuState)}>
                                        <span className='button-content'>IDAG: 08:00 - 16:00</span>
                                        <span className="icon is-small">
                                            <img src={arrow.src} alt='arrow-icon' className={`arrow-${visibilityCheck}`}></img>
                                        </span>
                                        </button>
                                    </div>
                                    <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                                        <WorkingHours />
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className='column'>
                                <div className='notification location p-5'>
                                    <img src={location.src} alt='location'></img>
                                    <p className='address-label'>ADRESS</p>
                                    <a href='https://goo.gl/maps/Z43GxJEqsvNWvLTVA' target={'_blank'}><p className='address'>Krankroksgatan 7, 721 38</p></a>
                                </div>
                            </div>
                            <div className='column'>
                                <div className='notification phone p5'>
                                    <img src={phone.src} alt='phone'></img>
                                    <p className='phonenumber-label'>TELEFONNUMMER</p>
                                    <a href={`tel:${'076 027 41 51'}`}><p className='phonenumber'>076 027 41 51</p></a>
                                </div>
                            </div>
                            <div className='column'>
                                <div className='notification takeaway p-5'>
                                    <p className='takeaway-label'>TAKEAWAY?</p>
                                    <p className='order-takeaway'>Beställ takeaway från oss!</p>
                                    <a href='https://www.foodora.se/en/restaurant/wuvx/hornet-vasteras' target={'_blank'}>
                                        <button className='button takeaway-button'>
                                            <img src={basket.src} alt='basket'></img>
                                            <p className='order-button-label'>BESTÄLL TAKEAWAY</p>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
        