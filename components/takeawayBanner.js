import styles from 'styles/takeawayBanner.module.scss'
import background from 'public/images/takeawayBanner/takeawayBannerBackground.png'
import basket from 'public/icons/basket.png'

export default function TakeawayBanner() {
    return (
        <section className="section is-small takeawayBanner-section p-0">
                <div className='container takeawayBanner-container is-fluid'>
                    <h3 className='takeaway-label'>TAKEAWAY?</h3>
                    <h2 className='takeaway-title m-2'>Order Takeaway from us!</h2>
                    <p className='takeaway-subtitle m-2'>Choose what you want to buy and when it's convenient for you to pick up</p>
                    <a href='https://www.google.com' target={'_blank'}>
                        <button className='button takeaway-button m-2'>
                            <img src={basket.src} alt='basket'></img>
                            <p className='button-label'>ORDER TAKEAWAY</p>
                        </button>
                    </a>
                </div>
        </section>
    )
}