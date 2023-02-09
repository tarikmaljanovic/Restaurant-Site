import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from '@/styles/WorkingHours.module.scss'
import alert from '@/styles/Images/alert.png'

export default function WorkingHours() {
    return(
        <>
            <div class="dropdown-item section_1">
                <p>ORDINARIE ÖPPETTIDER</p>
            </div>
            <hr className={styles.dropdownDivider}/>
            <div class="dropdown-item">

            </div>
            <hr className={styles.dropdownDivider}/>
            <div class="dropdown-item section_3">
                <img src={alert.src} alt='Alert icon' className={styles.alert}></img>
                <p>AVVIKANDE ÖPPETTIDER</p>
            </div>
            <hr className={styles.dropdownDivider}/>
            <div class="dropdown-item">
                <p>20/01/2021 - 08:00 -16:00</p>
            </div>
        </>
    )
}