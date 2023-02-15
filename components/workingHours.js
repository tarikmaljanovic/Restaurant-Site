import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from 'styles/workingHours.module.scss'
import alert from 'public/icons/alert.png'

export default function WorkingHours() {
    return(
        <>
        <div class="dropdown-content workhours-dropdown-content">
            <div class="dropdown-item ordinary-workhours">
                <h4 class='ordinary-workhours-label'>ORDINARIE ÖPPETTIDER</h4>
            </div>
            <hr class="dropdown-divider"/>
            <div class="dropdown-item workinghours">
                <div class='rows day-rows'>
                    <div class='row day-row'>
                        <h4 class='day'>Måndag:</h4>
                        <h4 class='time'>08:00 - 16:00</h4>
                    </div>
                    <div class='row day-row'>
                        <h4 class='day'>Tisdag:</h4>
                        <h4 class='time'>08:00 - 16:00</h4>
                    </div>
                    <div class='row day-row'>
                        <h4 class='day'>Onsdag:</h4>
                        <h4 class='time'>08:00 - 16:00</h4>  
                    </div>
                    <div class='row day-row'>
                        <h4 class='day'>Torsdag:</h4>
                        <h4 class='time'>08:00 - 16:00</h4>
                    </div>
                    <div class='row day-row'>
                        <h4 class='day'>Fredag:</h4>
                        <h4 class='time'>08:00 - 16:00</h4>
                    </div>
                    <div class='row day-row'>
                        <h4 class='day'>Lördag:</h4>
                        <h4 class='time'>08:00 - 16:00</h4>
                    </div>
                    <div class='row day-row'>
                        <h4 class='day'>Söndag::</h4>
                        <h4 class='time'>08:00 - 16:00</h4>
                    </div>
                </div>
            </div>
            <hr class="dropdown-divider"/>
            <div class='dropdown-item dropdown-alert'>
                <img src={alert.src} class='alert-icon'></img>
                <h4 class='alert-label'>AVVIKANDE ÖPPETTIDER</h4>
            </div>
            <hr class='dropdown-divider'></hr>
            <div class='dropdown-item special-workhours'>
                <h4 class='special-workhours-label'><span class='date'>20/01/2021</span><span class='time'> - 08:00 -16:00</span></h4>
            </div>
        </div>
        </>
    )
}