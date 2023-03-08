import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from 'styles/workingHours.module.scss'
import alert from 'public/icons/alert.png'

export default function WorkingHours() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const workingHours = [{time : '08:00 - 19:00', closed : 0}, 
                        {time : '08:00 - 19:00', closed : 0},
                        {time : '08:00 - 19:00', closed : 0},
                        {time : '08:00 - 19:00', closed : 0},
                        {time : '08:00 - 19:00', closed : 0},
                        {time : '08:00 - 19:00', closed : 0},
                        {time : '', closed : 1} ];
    

    const custom_working_time_default = [{closed: 1, date: '01-01-2023', end: '08:00:00', start: '19:00:00'},
                                        {closed: 1, date: '01-01-2023', end: '08:00:00', start: '19:00:00'},
                                        {closed: 1, date: '01-01-2023', end: '08:00:00', start: '19:00:00'},
                                        {closed: 1, date: '01-01-2023', end: '08:00:00', start: '19:00:00'},
                                        {closed: 1, date: '01-01-2023', end: '08:00:00', start: '19:00:00'}];

    return(
        <div className="dropdown-content workhours-dropdown-content">
            <div className="dropdown-item ordinary-workhours">
                <h4 className='ordinary-workhours-label'>WORKING HOURS</h4>
            </div>
            <hr className="dropdown-divider"/>
            <div className="dropdown-item workinghours">
                <div className='rows day-rows'>
                    {workingHours.map((item, index) => {
                        if(item.closed == 0) {
                            return (
                                <div key={`work-time-dropdown-item-${index}`} className='row day-row'>
                                    <h4 className='day'>{days[index]}</h4>
                                    <h4 className='time'>{item.time}</h4>
                                </div>
                            )
                        } else {
                            return (
                                <div key={`work-time-open-${index}`} className='row day-row'>
                                    <h4 className='day'>{days[index]}</h4>
                                    <h4 className='time'>Closed</h4>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
            <hr className="dropdown-divider"/>
            <div className='dropdown-item dropdown-alert'>
                <img src={alert.src} className='alert-icon'></img>
                <h4 className='alert-label'>SPECIAL WORKING DAYS</h4>
            </div>
            <hr className='dropdown-divider'></hr>
            <div className='dropdown-item special-workhours'>
                {custom_working_time_default.map((item, index) => {
                    if(item.closed == 1) {
                        return (
                            <h4 key={`work-time-def-${index}`} className='special-workhours-label'><span className='date'>{item.date.split('-').join('/')}</span><span className='time'>Closed</span></h4>
                        )
                    }
                })}
            </div>
        </div>
    )
}