import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from 'styles/takeawayBanner.module.scss'
import background from 'public/images/takeawayBanner/takeawayBannerBackground.png'
import basket from 'public/icons/basket.png'

export default function TakeawayBanner() {
    return (
        <>
        <section class="hero is-small takeawayBanner-hero">
            <div class="hero-body takeawayBanner p-0">
                <div class='container takeawayBanner-container is-fluid p-6'>
                    <img src={background.src} alt='background' class='takeaway-background' layout='fill'></img>
                    <p class='takeaway-label m-1'>TAKEAWAY?</p>
                    <h2 class='takeaway-title m-2'>Beställ takeaway från oss!</h2>
                    <p class='takeaway-subtitle m-2'>Välj vad du vill köpa och när det passar för dig att hämta upp - vi gör resten.</p>
                    <button class='button takeaway-button m-2'>
                        <img src={basket.src} alt='basket'></img>
                        <p class='button-label'>BESTÄLL TAKEAWAY</p>
                    </button>
                </div>
            </div>
        </section>
        {/* <section className="section takeaway">
            <div className="container is-fluid">
                <div className="inner">
                <p class='takeaway-label m-1'>TAKEAWAY?</p>
                    <h2 class='takeaway-title m-2'>Beställ takeaway från oss!</h2>
                    <p class='takeaway-subtitle m-2'>Välj vad du vill köpa och när det passar för dig att hämta upp - vi gör resten.</p>
                    <button class='button takeaway-button m-2'>
                        <img src={basket.src} alt='basket'></img>
                        <p class='button-label'>BESTÄLL TAKEAWAY</p>
                    </button>
                </div>
            </div>
        </section> */}
        </>
    )
}