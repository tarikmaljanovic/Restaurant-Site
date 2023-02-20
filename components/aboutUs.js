import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from 'styles/aboutUs.module.scss'
import aboutUsImg from 'public/images/aboutUs/aboutUsImg.png'

export default function AboutUs() {
    return(
        <section className="section is-large aboutus-section p-0">
            <div className='container aboutus-container is-fluid m-0 p-0'>
                <div className='columns aboutus-columns'>
                    <div className='column aboutus-left'>
                        <div className='inner-left'>
                            <div className='aboutus-label'>
                                <h3 className='aboutus-label-front'>Om Oss</h3>
                                <h2 className='aboutus-label-back'>Om Oss</h2>
                            </div>
                            <h3 className='aboutus-title'>Hörnet Västerås </h3>
                            <p className='aboutus-description'>Leo donec morbi amet consequat massa mauris<br/> volutpat. Magna nisl facilisi turpis amet at dictum<br/> justo interdum. Ipsum a nunc</p>
                        </div>
                    </div>
                    <div className='column aboutus-right p-0'>
                        <img src={aboutUsImg.src} alt='about us' class='aboutus-img'></img>
                    </div>
                </div>
            </div>
        </section>
    )
}