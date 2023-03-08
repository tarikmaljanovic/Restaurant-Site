import { useState } from 'react'
import Image from 'next/image'
import styles from 'styles/titleBanner.module.scss'
import WorkingHours from 'components/workingHours.js'
import titleBannerImg from 'public/images/titleBanner/titleBannerImg.jpeg'
import backgroundImg from 'public/images/titleBanner/background.png'
import clock from 'public/icons/clock.png'
import location from 'public/icons/location.png'
import phone from 'public/icons/phone.png'
import basket from 'public/icons/basket.png'
import arrow from 'public/icons/arrow.png'
import mobileOvalBasket from 'public/icons/mobileOvalBasket.png'

export default function TitleBanner() {
    const [menuState, setMenuState] = useState(false);
    let visibilityCheck = menuState ? 'is-active' : '';

    const today = (new Date()).getDay();
    const workingHours = [{time : '08:00 - 19:00', closed : 0}, 
                        {time : '08:00 - 19:00', closed : 0},
                        {time : '08:00 - 19:00', closed : 0},
                        {time : '08:00 - 19:00', closed : 0},
                        {time : '08:00 - 19:00', closed : 0},
                        {time : '08:00 - 19:00', closed : 0},
                        {time : '', closed : 1} ];
    
    return(
        <section className="hero is-large">
            <div className="hero-body titleBanner-hero p-0">
                <div className='rows titleBanner-rows'>
                    <div className='row titleBanner-head'>
                    <img src={backgroundImg.src} className='titleBanner-background'></img>
                        <div className='container px-0 is-fluid titleBanner-head-container'>
                            <div className='columns titleBanner-head-columns'>
                                <div className='column p-0 titleBanner-head-column title-column'>
                                    <p className='bannerTitle'>Restaurant & <br/>Caffe</p>
                                </div>
                                <div className='column p-0 titleBanner-head-column'>
                                    <Image src={titleBannerImg.src} alt='bannerImg' className='bannerImg' width={1000} height={1000}></Image>
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
                                        <p>Working Hours</p>
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
                                                <WorkingHours />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='column'>
                                <div className='notification location p-5'>
                                    <img src={location.src} alt='location'></img>
                                    <div className='mobile-container'>
                                        <p className='address-label'>ADDRESS</p>
                                        <a href={`https://www.google.com/maps`} target={'_blank'}><p className='address'>STREET NAME</p></a>
                                    </div>
                                </div>
                            </div>
                            <div className='column'>
                                <div className='notification phone p-5'>
                                    <img src={phone.src} alt='phone'></img>
                                    <div className='mobile-container'>
                                        <p className='phonenumber-label'>PHONE NUMBER</p>
                                        <a href={`tel:${123456789}`}><p className='phonenumber'>123 456 789</p></a>
                                    </div>
                                </div>
                            </div>
                            <div className='column'>
                                <div className='notification takeaway p-0'>
                                <a href='https://www.google.com' target={'_blank'}>
                                    <div className='mobile-container'>
                                            <img src={mobileOvalBasket.src}></img>
                                            <div className='inner'>
                                                <p className='takeaway-label'>ORDER TAKEAWAY</p>
                                                < p className='order-takeaway'>Order Takeawy from us!</p>
                                            </div>
                                        </div>
                                    </a>
                                    <div className='desktop-container'>
                                        <p className='takeaway-label'>TAKEAWAY?</p>
                                        <p className='order-takeaway'>Order Takeawy from us!</p>
                                        <a href='https://www.google.com' target={'_blank'}>
                                            <button className='button takeaway-button'>
                                                <img src={basket.src} alt='basket'></img>
                                                <p className='order-button-label'>ORDER TAKEAWAY</p>
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
        