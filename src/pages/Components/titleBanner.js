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
import arrow from '@/styles/Images/arrow.png'

export default function TitleBanner() {
    const [menuState, setMenuState] = useState(false);

    return(
        <>
        <div class="hero-body p-0">
            <img src={backgroundImg.src} alt='background' class='background'></img>
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
        </>
    )
}