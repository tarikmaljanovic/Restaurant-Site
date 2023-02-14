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
        <section class="hero is-large">
            <div class="hero-body titleBanner-hero p-0">
                <div class='rows titleBanner-rows'>
                    <div class='row titleBanner-head'>
                    <img src={backgroundImg.src} class='titleBanner-background'></img>
                        <div class='container px-0 is-fluid titleBanner-head-container'>
                            <div class='columns titleBanner-head-columns'>
                                <div class='column p-0 titleBanner-head-column'>
                                    <p class='bannerTitle'>Hörnet & <br/>Västerås</p>
                                </div>
                                <div class='column p-0 titleBanner-head-column'>
                                    <img src={titleBannerImg.src} alt='bannerImg' class='bannerImg'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='row infocards-row'>
                        <div class='columns infocards-columns'>
                            <div class='column infocard-hours'>
                                <div class='notification hours'>
                                    <img src={clock.src} alt='clock' class='clock-icon'></img>
                                    <p>Öppettider</p>
                                    <div className={`dropdown ${visibilityCheck}`}>
                                    <div class="dropdown-trigger">
                                        <button class="button " aria-haspopup="true" aria-controls="dropdown-menu2" onClick={() => setMenuState(!menuState)}>
                                        <span class='button-content'>IDAG: 08:00 - 16:00</span>
                                        <span class="icon is-small">
                                            <img src={arrow.src} alt='arrow-icon' className={`arrow-${visibilityCheck}`}></img>
                                        </span>
                                        </button>
                                    </div>
                                    <div class="dropdown-menu" id="dropdown-menu2" role="menu">
                                        <WorkingHours />
                                    </div>
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
                                    <button class='button takeaway-button'>
                                        <img src={basket.src} alt='basket'></img>
                                        <p class='order-button-label'>BESTÄLL TAKEAWAY</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
        