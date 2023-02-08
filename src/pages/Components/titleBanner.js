import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import { useState } from 'react'
import styles from '@/styles/TitleBanner.module.scss'
import titleBannerImg from '@/styles/Images/titleBannerImg.png'
import clock from '@/styles/Images/clock.png'
import location from '@/styles/Images/location.png'
import backgroundImg from '@/styles/Images/background.png'
import phone from '@/styles/Images/phone.png'
import basket from '@/styles/Images/Vector.png'
import WorkingHours from './workingHours'

export default function TitleBanner() {
    const [menuState, setMenuState] = useState(false);

    return(
            <div class="hero-body p-0">
                <div class='container is-fluid px-0'>
                        <div class='columns'>
                            <div class='column is-6 has-text-centered'>
                                Hörnet & <br/>Västerås
                            </div>
                            <div class='column is-6 is-centered has-img'>
                                <img src={titleBannerImg.src} alt='Banner Img'></img>
                            </div>
                            <img src={backgroundImg.src} className={styles.backgroundImg}></img>
                        </div>
                </div>
                <div class="foot">
                    <div class="content has-text-centered">
                        <div class='columns'>
                            <div class='column'>
                                <div class='notification notification_1'>
                                    <img src={clock.src} alt='Clock'></img>
                                    <br/>ÖPPETTIDER
                                    <br/>
                                    <div class={`dropdown${menuState ? ' is-active' : ''}`}>
                                        <div class="dropdown-trigger">
                                            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu2" onClick={() => setMenuState(!menuState)}>
                                            <span>IDAG: 08:00-16:00</span>
                                            <span class="icon is-small">
                                                <i class="fas fa-angle-down"></i>
                                            </span>
                                            </button>
                                        </div>
                                        <div class="dropdown-menu" id="dropdown-menu2" role="menu">
                                            <div class="dropdown-content">
                                                <WorkingHours />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='column'>
                                <div class='notification notification_2'>
                                    <img src={location.src} alt='Location' className={styles.location}></img>
                                    <br/>ADRESS
                                    <p className={styles.n2paragraph}>Krankroksgatan 7, 721 38</p>
                                </div>
                            </div>
                            <div class='column'>
                                <div class='notification notification_3'>
                                    <img src={phone.src} alt='Phone' className={styles.phone}></img>
                                    <br/>TELEFONNUMMER
                                    <p className={styles.n3paragraph}>076 027 41 51</p>
                                </div>
                            </div>
                            <div class='column'>
                                <div class='notification notification_4'>
                                    <p className={styles.n4paragraph}>TAKEAWAY?</p>
                                    <p className={styles.n4paragraph}>Beställ takeaway från oss!</p>
                                    <button class="button"><img src={basket.src}></img>BESTÄLL TAKEAWAY</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}