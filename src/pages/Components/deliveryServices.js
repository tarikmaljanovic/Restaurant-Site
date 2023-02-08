import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from '@/styles/DeliveryServices.module.scss'
import wolt from '@/styles/Images/wolt.png'
import foodora from '@/styles/Images/foodora.png'
import waytogo from '@/styles/Images/waytogo.png'

export default function DeliveryServices() {
    return (
        <div class='container'>
            <div class='columns'>
                <div class='column title'>
                    <h3>Beställ hemkörning</h3>
                    <p>Du kan beställa vår mat för hemkörning genom följande tjänster.</p>
                </div>
                <div class='column'>
                    <div class='columns'>
                        <a href='https://wolt.com/sv/swe/vasteras/restaurant/hrnet'><div class='column'><div class='notification has-text-centered'><img src={wolt.src} alt='wold'></img></div></div></a>
                        <a href='https://www.foodora.se/restaurant/wuvx/hornet-vasteras'><div class='column'><div class='notification has-text-centered'><img src={foodora.src} alt='foodora'></img></div></div></a>
                        <a href='https://waytogo.se/restauranger/mat/hornet-vasteras'><div class='column'><div class='notification has-text-centered'><img src={waytogo.src} alt='way to go'></img></div></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}