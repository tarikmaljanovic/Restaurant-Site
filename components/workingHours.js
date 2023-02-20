import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from 'styles/workingHours.module.scss'
import alert from 'public/icons/alert.png'

export default function WorkingHours() {
    return(
        <div className="dropdown-content workhours-dropdown-content">
            <div className="dropdown-item ordinary-workhours">
                <h4 className='ordinary-workhours-label'>ORDINARIE ÖPPETTIDER</h4>
            </div>
            <hr className="dropdown-divider"/>
            <div className="dropdown-item workinghours">
                <div className='rows day-rows'>
                    <div className='row day-row'>
                        <h4 className='day'>Måndag:</h4>
                        <h4 className='time'>08:00 - 16:00</h4>
                    </div>
                    <div className='row day-row'>
                        <h4 className='day'>Tisdag:</h4>
                        <h4 className='time'>08:00 - 16:00</h4>
                    </div>
                    <div className='row day-row'>
                        <h4 className='day'>Onsdag:</h4>
                        <h4 className='time'>08:00 - 16:00</h4>  
                    </div>
                    <div className='row day-row'>
                        <h4 className='day'>Torsdag:</h4>
                        <h4 className='time'>08:00 - 16:00</h4>
                    </div>
                    <div className='row day-row'>
                        <h4 className='day'>Fredag:</h4>
                        <h4 className='time'>08:00 - 16:00</h4>
                    </div>
                    <div className='row day-row'>
                        <h4 className='day'>Lördag:</h4>
                        <h4 className='time'>08:00 - 16:00</h4>
                    </div>
                    <div className='row day-row'>
                        <h4 className='day'>Söndag::</h4>
                        <h4 className='time'>08:00 - 16:00</h4>
                    </div>
                </div>
            </div>
            <hr className="dropdown-divider"/>
            <div className='dropdown-item dropdown-alert'>
                <img src={alert.src} className='alert-icon'></img>
                <h4 className='alert-label'>AVVIKANDE ÖPPETTIDER</h4>
            </div>
            <hr className='dropdown-divider'></hr>
            <div className='dropdown-item special-workhours'>
                <h4 className='special-workhours-label'><span className='date'>20/01/2021</span><span className='time'> - 08:00 -16:00</span></h4>
            </div>
        </div>
    )
}