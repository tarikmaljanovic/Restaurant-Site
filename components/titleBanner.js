import { render } from 'react-dom'
import { Inter } from '@next/font/google'
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
        <>
        <div class="hero-body p-0">
        <img src={backgroundImg.src} alt='background' class='background'></img>
            <div class='rows'>
                <div class='row'>
                        <div class='container is-fluid p-0'>
                            <div class='columns'>
                                <div class='column'>
                                    <p class='bannerTitle'>Hörnet & <br/>Västerås</p>
                                </div>
                                <div class='column'>
                                    <img src={titleBannerImg.src} alt='bannerImg' class='bannerImg'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='row info-cards-row'>
                        <div class='columns info-cards'>
                            <div class='column'>
                                <div class='notification hours'>
                                    <img src={clock.src} alt='clock' class='clock-icon'></img>
                                    <p>Öppettider</p>
                                    <div className={`dropdown ${visibilityCheck}`}>
                                    <div class="dropdown-trigger">
                                        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu2" onClick={() => setMenuState(!menuState)}>
                                        <span class='button-content'>IDAG: 08:00 - 16:00</span>
                                        <span class="icon is-small">
                                            <img src={arrow.src} alt='arrow-icon'></img>
                                        </span>
                                        </button>
                                    </div>
                                        <WorkingHours />
                                    </div>
                                </div>
                            </div>
                            <div class='column'>
                                <div class='notification location'>
                                    <img src={location.src} alt='location'></img>
                                    <p class='address-label'>ADRESS</p>
                                    <p className='address'>Krankroksgatan 7, 721 38</p>
                                </div>
                            </div>
                            <div class='column'>
                                <div class='notification phone'>
                                    <img src={phone.src} alt='phone'></img>
                                    <p class='phonenumber-label'>TELEFONNUMMER</p>
                                    <p class='phonenumber'>076 027 41 51</p>
                                </div>
                            </div>
                            <div class='column'>
                                <div class='notification takeaway'>
                                    <p class='takeaway-label'>TAKEAWAY?</p>
                                    <p class='order-takeaway'>Beställ takeaway från oss!</p>
                                    <button class='button'>
                                        <img src={basket.src} alt='basket'></img>
                                        <p class='order-button-label'>BESTÄLL TAKEAWAY</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}