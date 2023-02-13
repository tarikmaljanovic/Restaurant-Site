import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from 'styles/workingHours.module.scss'
import alert from 'public/icons/alert.png'

export default function WorkingHours() {
    return(
        <>
                <div class="dropdown-content">
                <div class="dropdown-item">
                    <p>ORDINARIE ÖPPETTIDER</p>
                </div>
                <hr class="dropdown-divider"/>
                <div class="dropdown-item">
                <p>ORDINARIE ÖPPETTIDER</p>
                </div>
                <hr class="dropdown-divider"/>
                <p>ORDINARIE ÖPPETTIDER</p>
                </div>
        </>
    )
}