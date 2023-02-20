import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from 'styles/deliveryServices.module.scss'
import wolt from 'public/images/delivery ServicesImages/wolt.png'
import foodora from 'public/images/delivery ServicesImages/foodora.png'
import waytogo from 'public/images/delivery ServicesImages/waytogo.png'

export default function DeliveryServices() {
    return (
        <section class="section deliveryServices-section is-small p-0">
                <div class='container deliveryServices-container'>
                    <div class='columns deliveryServices-columns'>
                        <div class='column left-title'>
                            <h3>Beställ hemkörning</h3>
                            <p>Du kan beställa vår mat för hemkörning genom följande tjänster.</p>
                        </div>
                        <div class='column'>
                            <div class='columns right-links'>
                                <div class='column'>
                                    <a href='https://wolt.com/sv/swe/vasteras/restaurant/hrnet'>
                                        <div class='notification wolt'>
                                            <img src={wolt.src} alt='wolt'></img>
                                        </div>
                                    </a>
                                </div>
                                <div class='column'>
                                    <a href='https://www.foodora.se/restaurant/wuvx/hornet-vasteras'>
                                        <div class='notification foodora'>
                                            <img src={foodora.src} alt='foodora'></img>
                                        </div>
                                    </a>
                                </div>
                                <div class='column'>
                                    <a href='https://waytogo.se/restauranger/mat/hornet-vasteras'>
                                        <div class='notification waytogo'>
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