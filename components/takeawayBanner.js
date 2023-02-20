import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from 'styles/takeawayBanner.module.scss'
import background from 'public/images/takeawayBanner/takeawayBannerBackground.png'
import basket from 'public/icons/basket.png'

export default function TakeawayBanner() {
    return (
        <section className="section is-small takeawayBanner-section p-0">
                <div className='container takeawayBanner-container is-fluid'>
                    <h2 className='takeaway-title m-2'>Beställ takeaway från oss!</h2>
                    <p className='takeaway-subtitle m-2'>Välj vad du vill köpa och när det passar för dig att hämta upp - vi gör resten.</p>
                    <a href='https://www.foodora.se/en/restaurant/wuvx/hornet-vasteras' target={'_blank'}>
                        <button className='button takeaway-button m-2'>
                            <img src={basket.src} alt='basket'></img>
                            <p className='button-label'>BESTÄLL TAKEAWAY</p>
                        </button>
                    </a>
                </div>
        </section>
    )
}