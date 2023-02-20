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

export default function TitleBanner(props) {
    const profile = props.profile;
    const gallery = props.gallery;
    const [menuState, setMenuState] = useState(false);
    let visibilityCheck = menuState ? 'is-active' : '';

    const today = (new Date()).getDay();
    const workingHours = profile.working_time;
    console.log(workingHours);
    
    
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
                            <div className='column'>
                                <div className='notification location p-5'>
                                    <img src={location.src} alt='location'></img>
                                    <p className='address-label'>ADRESS</p>
                                    <a href='https://www.google.com/maps/place/Smedjegatan+4,+722+13+V%C3%A4ster%C3%A5s,+Sweden/@59.6117815,16.5463769,17z/data=!4m6!3m5!1s0x465e613929ab4357:0x4531e40ab5b69ad7!8m2!3d59.6117815!4d16.5463769!16s%2Fg%2F11c5fy4m5f' target={'_blank'}><p className='address'>{profile.address}</p></a>
                                </div>
                            </div>
                            <div className='column'>
                                <div className='notification phone p5'>
                                    <img src={phone.src} alt='phone'></img>
                                    <p className='phonenumber-label'>TELEFONNUMMER</p>
                                    <a href={`tel:${profile.phone}`}><p className='phonenumber'>{profile.phone}</p></a>
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
        