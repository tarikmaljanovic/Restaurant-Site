import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import { Link } from 'react-scroll'
import { useState } from 'react'
import Image from 'next/image'
import styles from 'styles/titleBanner.module.scss'
import WorkingHours from 'components/workingHours.js'
import titleBannerImg from 'public/images/titleBanner/titleBannerImg.png'
import backgroundImg from 'public/images/titleBanner/background.png'
import clock from 'public/icons/clock.png'
import location from 'public/icons/location.png'
import phone from 'public/icons/phone.png'
import basket from 'public/icons/basket.png'
import arrow from 'public/icons/arrow.png'
import mobileOvalBasket from 'public/icons/mobileOvalBasket.png'

export default function TitleBanner(props) {
    const profile = props.profile;
    const gallery = props.gallery;
    const [menuState, setMenuState] = useState(false);
    let visibilityCheck = menuState ? 'is-active' : '';

    const today = (new Date()).getDay();
    const workingHours = profile.working_time;
    
    return(
        <section className="hero is-large">
            <div className="hero-body titleBanner-hero p-0">
                <div className='rows titleBanner-rows'>
                    <div className='row titleBanner-head'>
                    <img src={backgroundImg.src} className='titleBanner-background'></img>
                        <div className='container px-0 is-fluid titleBanner-head-container'>
                            <div className='columns titleBanner-head-columns'>
                                <div className='column p-0 titleBanner-head-column title-column'>
                                    <p className='bannerTitle'>Hörnet & <br/>Västerås</p>
                                </div>
                                <div className='column p-0 titleBanner-head-column'>
                                    <Image src={gallery[0].images[0].image} alt='bannerImg' className='bannerImg' width={1000} height={1000}></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row infocards-row'>
                        <div className='columns infocards-columns'>
                            <div className='column infocard-hours'>
                                <div className='notification hours p-5'>
                                    <img src={clock.src} alt='clock' className='clock-icon'></img>
                                    <div className='mobile-container'>
                                        <p>Öppettider</p>
                                        <div className={`dropdown ${visibilityCheck}`}>
                                            <div className="dropdown-trigger">
                                                <button className="button " aria-haspopup="true" aria-controls="dropdown-menu2" onClick={() => setMenuState(!menuState)}>
                                                    <span className='button-content'>IDAG: {(today == 6 || today == 7 ? 'Stängd' : workingHours[today-1].time)}</span>
                                                    <span className="icon is-small">
                                                        <img src={arrow.src} alt='arrow-icon' className={`arrow-${visibilityCheck}`}></img>
                                                    </span>
                                                </button>
                                            </div>
                                            <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                                                <WorkingHours profile={profile} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='column'>
                                <div className='notification location p-5'>
                                    <img src={location.src} alt='location'></img>
                                    <div className='mobile-container'>
                                        <p className='address-label'>ADRESS</p>
                                        <a href={`https://www.google.com/maps/place/${profile.address}14z`} target={'_blank'}><p className='address'>{profile.address}</p></a>
                                    </div>
                                </div>
                            </div>
                            <div className='column'>
                                <div className='notification phone p-5'>
                                    <img src={phone.src} alt='phone'></img>
                                    <div className='mobile-container'>
                                        <p className='phonenumber-label'>TELEFONNUMMER</p>
                                        <a href={`tel:${profile.phone}`}><p className='phonenumber'>{profile.phone}</p></a>
                                    </div>
                                </div>
                            </div>
                            <div className='column'>
                                <div className='notification takeaway p-0'>
                                <a href='https://www.foodora.se/en/restaurant/wuvx/hornet-vasteras' target={'_blank'}>
                                    <div className='mobile-container'>
                                        
                                            <img src={mobileOvalBasket.src}></img>
                                            <div class='inner'>
                                                <p className='takeaway-label'>BESTÄLL TAKEAWAY</p>
                                                < p className='order-takeaway'>Beställ takeaway från oss!</p>
                                            </div>
                                        
                                    </div>
                                    </a>
                                    <div className='desktop-container'>
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
            </div>
        </section>
    )
}
        