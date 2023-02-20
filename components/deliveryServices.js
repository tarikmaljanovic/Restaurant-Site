import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from 'styles/deliveryServices.module.scss'
import wolt from 'public/images/delivery ServicesImages/wolt.png'
import foodora from 'public/images/delivery ServicesImages/foodora.png'
import waytogo from 'public/images/delivery ServicesImages/waytogo.png'

export default function DeliveryServices() {
    return (
        <section className="section deliveryServices-section is-small p-0">
                <div className='container deliveryServices-container'>
                    <div className='columns deliveryServices-columns'>
                        <div className='column left-title'>
                            <h3>Beställ hemkörning</h3>
                            <p>Du kan beställa vår mat för hemkörning genom följande tjänster.</p>
                        </div>
                        <div className='column'>
                            <div className='columns right-links'>
                                <div className='column'>
                                    <a href='https://wolt.com/sv/swe/vasteras/restaurant/hrnet'>
                                        <div className='notification wolt'>
                                            <img src={wolt.src} alt='wolt'></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='column'>
                                    <a href='https://www.foodora.se/restaurant/wuvx/hornet-vasteras'>
                                        <div className='notification foodora'>
                                            <img src={foodora.src} alt='foodora'></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='column'>
                                    <a href='https://waytogo.se/restauranger/mat/hornet-vasteras'>
                                        <div className='notification waytogo'>
                                            <img src={waytogo.src} alt='waytogo'></img>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}