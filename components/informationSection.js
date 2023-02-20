import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from 'styles/informationSection.module.scss'
import map from 'public/images/map.png'

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
                            <p className='info-content m-2'>{profile.address}</p>
                        </div>
                        <div className='info-label-container m-2'>
                            <h3 className='info-label m-2'>Mailadress:</h3>
                            <p className='info-content m-2'>{profile.email}</p>
                        </div>
                        <div className='info-label-container m-2'>
                            <h3 className='info-label m-2'>Telefonnummer:</h3>
                            <p className='info-content m-2'>{profile.phone}</p>
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
                                if(item.start == null && item.start == null) {
                                    return (
                                        <p className='special-date m-2'>{item.date.split('-').join('/')}</p>
                                    )
                                } else {
                                    return (
                                        <>
                                            <p className='special-date m-2'>{item.date.split('-').join('/')}</p>
                                            <p className='special-time m-2'>{item.start.slice(0,5)} - {item.end.slice(0,5)}</p>
                                        </>
                                    )
                                }
                            })}
                        </div>
                    </div>
                    <div className='column info-right'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2018.2749631647566!2d16.544188215999284!3d59.611784195385354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465e613929ab4357%3A0x248200d783233e34!2sSmedjegatan%204%2C%2014z%2C%20722%2013%20V%C3%A4ster%C3%A5s%2C%20Sweden!5e0!3m2!1sen!2sba!4v1676931217556!5m2!1sen!2sba" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='info-map'></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}