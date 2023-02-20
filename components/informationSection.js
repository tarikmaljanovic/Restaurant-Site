import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from 'styles/informationSection.module.scss'
import map from 'public/images/map.png'

export default function InformationSection(props) {
    const profile = props.profile;
    const days = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'];

    return (
        <section className="section is-medium info-section">
            <div className='container is-fluid info-container'>
                <div className='columns info-columns'>
                    <div className='column info-left'>
                        <div className=' info-label-container'>
                            <h3 className='info-label m-3'>Adress:</h3>
                            <p className='info-content m-3'>{profile.address}</p>
                        </div>
                        <div className='info-label-container'>
                            <h3 className='info-label m-3'>Mailadress:</h3>
                            <p className='info-content m-3'>{profile.email}</p>
                        </div>
                        <div className='info-label-container'>
                            <h3 className='info-label m-3'>Telefonnummer:</h3>
                            <p className='info-content m-3'>{profile.phone}</p>
                        </div>
                        <div className='workinghours'>
                            <h3 className='workinghours-label m-2'>Ordinarie öppettider:</h3>
                            <div className='days m-3'>
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
                        <div className='special-workinghours'>
                            <h3 className='special-label m-3'>Avvikande öppettider</h3>
                            {profile.custom_working_time_default.map((item, index) => {
                                if(item.start == null && item.start == null) {
                                    return (
                                        <p className='special-date m-3'>{item.date.split('-').join('/')}</p>
                                    )
                                } else {
                                    return (
                                        <>
                                            <p className='special-date m-3'>{item.date.split('-').join('/')}</p>
                                            <p className='special-time m-3'>{item.start.slice(0,5)} - {item.end.slice(0,5)}</p>
                                        </>
                                    )
                                }
                            })}
                            {/*<p className='special-date m-3'>29/08/2020</p>
                            <p className='special-date m-3'>29/08/2020</p>*/}
                        </div>
                    </div>
                    <div className='column info-right'>
                        <img src={map.src} alt='map' className='info-map'></img>
                    </div>
                </div>
            </div>
        </section>
    )
}