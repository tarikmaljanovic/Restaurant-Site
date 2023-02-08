import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from '@/styles/WorkingHours.module.scss'
import alert from '@/styles/Images/alert.png'

export default function WorkingHours() {
    return(
        <>
        <div class="dropdown-item">
            <p>ORDINARIE ÖPPETTIDER</p>
        </div>
        <hr class="dropdown-divider"/>
        <div class="dropdown-item">

        </div>
        <hr class="dropdown-divider"/>
        <div class="dropdown-item">
            <img src={alert.src} alt='Alert'></img>
            <p>AVVIKANDE ÖPPETTIDER</p>
        </div>
        <hr class="dropdown-divider"/>
        <div class="dropdown-item">
            <p>20/01/2021 - 08:00 -16:00</p>
        </div>
        </>
    )
}