import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from 'styles/workingHours.module.scss'
import alert from 'public/icons/alert.png'

export default function WorkingHours(props) {
    const profile = props.profile;
    const days = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'];
    return(
        <div className="dropdown-content workhours-dropdown-content">
            <div className="dropdown-item ordinary-workhours">
                <h4 className='ordinary-workhours-label'>ORDINARIE ÖPPETTIDER</h4>
            </div>
            <hr className="dropdown-divider"/>
            <div className="dropdown-item workinghours">
                <div className='rows day-rows'>
                    {profile.working_time.map((item, index) => {
                        if(item.closed == 0) {
                            return (
                                <div className='row day-row'>
                                    <h4 className='day'>{days[index]}</h4>
                                    <h4 className='time'>{item.time}</h4>
                                </div>
                            )
                        } else {
                            return (
                                <div className='row day-row'>
                                    <h4 className='day'>{days[index]}</h4>
                                    <h4 className='time'>Stängd</h4>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
            <hr className="dropdown-divider"/>
            <div className='dropdown-item dropdown-alert'>
                <img src={alert.src} className='alert-icon'></img>
                <h4 className='alert-label'>AVVIKANDE ÖPPETTIDER</h4>
            </div>
            <hr className='dropdown-divider'></hr>
            <div className='dropdown-item special-workhours'>
                {profile.custom_working_time_default.map((item, index) => {
                    if(item.closed == 1) {
                        return (
                            <h4 className='special-workhours-label'><span className='date'>{item.date.split('-').join('/')}</span><span className='time'>Stängd</span></h4>
                        )
                    }
                })}
            </div>
        </div>
    )
}