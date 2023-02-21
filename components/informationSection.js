import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from 'styles/informationSection.module.scss'
import Map from './map'

export default function InformationSection(props) {
    const profile = props.profile;
    const days = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'];

    return (
        <section className="section is-medium info-section py-6">
            <div className='container is-fluid info-container'>
                <div className='columns info-columns'>
                    <div className='column info-left'>
                        <div className=' info-label-container m-2'>
                            <h3 className='info-label m-2'>Adress:</h3>
                            <a href={`https://www.google.com/maps/place/${profile.address}14z`} target={'_blank'}><p className='info-content m-2'>{profile.address}</p></a>
                        </div>
                        <div className='info-label-container m-2'>
                            <h3 className='info-label m-2'>Mailadress:</h3>
                            <a href={`mailto:${profile.email}`}><p className='info-content m-2'>{profile.email}</p></a>
                        </div>
                        <div className='info-label-container m-2'>
                            <h3 className='info-label m-2'>Telefonnummer:</h3>
                            <a href={`tel:${profile.phone}`}><p className='info-content m-2'>{profile.phone}</p></a>
                        </div>
                        <div className='workinghours m-2'>
                            <h3 className='workinghours-label m-2'>Ordinarie öppettider:</h3>
                            <div className='days m-2'>
                                {profile.working_time.map((item, index) => {
                                    if(item.closed == 0) {
                                        return (
                                            <div className='day'>
                                                <p className='day-label'>{days[index]}</p>
                                                <p className='day-time'>{item.time}</p>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className='day'>
                                                <p className='day-label'>{days[index]}</p>
                                                <p className='day-time'>Stängd</p>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                        <div className='special-workinghours m-2'>
                            <h3 className='special-label m-2'>Avvikande öppettider</h3>
                            {profile.custom_working_time_default.map((item, index) => {
                                if(item.closed == 1) {
                                    return (
                                        <>
                                            <p className='special-date m-2'>{item.date.split('-').join('/')}</p>
                                            <p className='special-time m-2'>Stängd</p>
                                        </>
                                    )
                                }
                            })}
                        </div>
                    </div>
                    <div className='column info-right'>
                        <Map profile={profile} className='info-map' />
                    </div>
                </div>
            </div>
        </section>
    )
}