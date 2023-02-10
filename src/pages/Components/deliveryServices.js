import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from '@/styles/DeliveryServices.module.scss'
import wolt from '@/styles/Images/wolt.png'
import foodora from '@/styles/Images/foodora.png'
import waytogo from '@/styles/Images/waytogo.png'

export default function DeliveryServices() {
    return (
        <section class="hero is-medium">
            <div class="hero-body">
                <div class='container'>
                    <div class='columns is-align-content-baseline'>
                        <div class='column left-title'>
                            <h3>Beställ hemkörning</h3>
                            <p>Du kan beställa vår mat för hemkörning genom följande tjänster.</p>
                        </div>
                        <div class='column is-justify-content-right'>
                            <div class='columns right-links'>
                                <div class='column'>
                                    <a href='https://wolt.com/sv/swe/vasteras/restaurant/hrnet'><div class='notification wolt'>
                                        <img src={wolt.src} alt='wolt'></img>
                                    </div></a>
                                </div>
                                <div class='column'>
                                    <a href='https://www.foodora.se/restaurant/wuvx/hornet-vasteras'><div class='notification foodora'>
                                        <img src={foodora.src} alt='foodora'></img>
                                    </div></a>
                                </div>
                                <div class='column'>
                                    <a href='https://waytogo.se/restauranger/mat/hornet-vasteras'><div class='notification waytogo'>
                                        <img src={waytogo.src} alt='waytogo'></img>
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}