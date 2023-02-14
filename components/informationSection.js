import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from 'styles/informationSection.module.scss'
import map from 'public/images/map.png'

export default function InformationSection() {
    return (
        <>
            <section class="hero is-large">
                <div class="hero-body info-hero">
                    <div class='container is-fluid m-0 p-0 info-container'>
                        <div class='columns info-columns'>
                            <div class='column info-left'>
                                <h3 class='info-label m-3'>Adress:</h3>
                                <p class='info-content m-3'>Krankroksgatan 7, 721 38</p>
                                <h3 class='info-label m-3'>Mailadress:</h3>
                                <p class='info-content m-3'>info@hornetvasteras.se</p>
                                <h3 class='info-label m-3'>Telefonnummer:</h3>
                                <p class='info-content m-3'>+64 56 641 23 45</p>
                                <div class='workinghours'>
                                    <h3 class='workinghours-label m-2'>Ordinarie öppettider:</h3>
                                    <div class='days m-3'>
                                        <div class='day'>
                                            <p class='day-label'>Måndag</p>
                                            <p class='day-time'>10:00 - 19:00</p>
                                        </div>
                                        <div class='day'>
                                            <p class='day-label'>Tisdag</p>
                                            <p class='day-time'>10:00 - 19:00</p>
                                        </div>
                                        <div class='day'>
                                            <p class='day-label'>Onsdag</p>
                                            <p class='day-time'>10:00 - 19:00</p>
                                        </div>
                                        <div class='day'>
                                            <p class='day-label'>Torsdag</p>
                                            <p class='day-time'>10:00 - 19:00</p>
                                        </div>
                                        <div class='day'>
                                            <p class='day-label'>Fredag</p>
                                            <p class='day-time'>10:00 - 19:00</p>
                                        </div>
                                        <div class='day'>
                                            <p class='day-label'>Lördag</p>
                                            <p class='day-time'>11:00 - 17:00</p>
                                        </div>
                                        <div class='day'>
                                            <p class='day-label'>Söndag</p>
                                            <p class='day-time'>11:00 - 17:00</p>
                                        </div>
                                    </div>
                                </div>
                                <div class='special-workinghours'>
                                    <h3 class='special-label m-3'>Avvikande öppettider</h3>
                                    <p class='special-date m-3'>29/08/2020</p>
                                    <p class='special-time m-3'>09:00-14:00</p>
                                </div>
                            </div>
                            <div class='column info-right'>
                                <img src={map.src} alt='map' class='info-map'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}