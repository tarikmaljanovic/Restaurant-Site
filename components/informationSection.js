import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from 'styles/informationSection.module.scss'
import Map from './map'
import { Fragment } from 'react';

export default function InformationSection(props) {
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

    return (
        <section className="section is-medium info-section py-6">
            <div className='container is-fluid info-container'>
                <div className='columns info-columns'>
                    <div className='column info-left'>
                        <div className=' info-label-container m-2'>
                            <h3 className='info-label m-2'>Address:</h3>
                            <a href={`https://www.google.com/maps`} target={'_blank'}><p className='info-content m-2'>Address</p></a>
                        </div>
                        <div className='info-label-container m-2'>
                            <h3 className='info-label m-2'>Email:</h3>
                            <a href={`mailto:${'restaurant@mail.com'}`}><p className='info-content m-2'>restaurant@mail.com</p></a>
                        </div>
                        <div className='info-label-container m-2'>
                            <h3 className='info-label m-2'>Phone number:</h3>
                            <a href={`tel:${123456789}`}><p className='info-content m-2'>123 456 789</p></a>
                        </div>
                        <div className='workinghours m-2'>
                            <h3 className='workinghours-label m-2'>Working Hours:</h3>
                            <div className='days m-2'>
                                {workingHours.map((item, index) => {
                                    if(item.closed == 0) {
                                        return (
                                            <div key={`working-time-${index}`} className='day'>
                                                <p className='day-label'>{days[index]}</p>
                                                <p className='day-time'>{item.time}</p>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div key={`working-time-info-${index}`} className='day'>
                                                <p className='day-label'>{days[index]}</p>
                                                <p className='day-time'>Closed</p>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                        <div className='special-workinghours m-2'>
                            <h3 className='special-label m-2'>Special Working Hours</h3>
                            {custom_working_time_default.map((item, index) => {
                                if(item.closed == 1) {
                                    return (
                                        <Fragment key={`working-time-def-${index}`}>
                                            <p className='special-date m-2'>{item.date.split('-').join('/')}</p>
                                            <p className='special-time m-2'>Closed</p>
                                        </Fragment>
                                    )
                                }
                            })}
                        </div>
                    </div>
                    <div className='column info-right'>
                        <Map className='info-map' />
                    </div>
                </div>
            </div>
        </section>
    )
}