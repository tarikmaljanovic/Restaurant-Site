import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from 'styles/informationSection.module.scss'
import map from 'public/images/map.png'

export default function InformationSection() {
    return (
        <section className="section is-medium info-section">
            <div className='container is-fluid info-container'>
                <div className='columns info-columns'>
                    <div className='column info-left'>
                        <div className=' info-label-container'>
                            <h3 className='info-label m-3'>Adress:</h3>
                            <p className='info-content m-3'>Krankroksgatan 7, 721 38</p>
                        </div>
                        <div className='info-label-container'>
                            <h3 className='info-label m-3'>Mailadress:</h3>
                            <p className='info-content m-3'>info@hornetvasteras.se</p>
                        </div>
                        <div className='info-label-container'>
                            <h3 className='info-label m-3'>Telefonnummer:</h3>
                            <p className='info-content m-3'>+64 56 641 23 45</p>
                        </div>
                        <div className='workinghours'>
                            <h3 className='workinghours-label m-2'>Ordinarie öppettider:</h3>
                            <div className='days m-3'>
                                <div className='day'>
                                    <p className='day-label'>Måndag</p>
                                    <p className='day-time'>10:00 - 19:00</p>
                                </div>
                                <div className='day'>
                                    <p className='day-label'>Tisdag</p>
                                    <p className='day-time'>10:00 - 19:00</p>
                                </div>
                                <div className='day'>
                                    <p className='day-label'>Onsdag</p>
                                    <p className='day-time'>10:00 - 19:00</p>
                                </div>
                                <div className='day'>
                                    <p className='day-label'>Torsdag</p>
                                    <p className='day-time'>10:00 - 19:00</p>
                                </div>
                                <div className='day'>
                                    <p className='day-label'>Fredag</p>
                                    <p className='day-time'>10:00 - 19:00</p>
                                </div>
                                <div className='day'>
                                    <p className='day-label'>Lördag</p>
                                    <p className='day-time'>11:00 - 17:00</p>
                                </div>
                                <div className='day'>
                                    <p className='day-label'>Söndag</p>
                                    <p className='day-time'>11:00 - 17:00</p>
                                </div>
                            </div>
                        </div>
                        <div className='special-workinghours'>
                            <h3 className='special-label m-3'>Avvikande öppettider</h3>
                            <p className='special-date m-3'>29/08/2020</p>
                            <p className='special-time m-3'>09:00-14:00</p>
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