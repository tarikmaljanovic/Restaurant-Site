import Image from 'next/image'
import styles from 'styles/aboutUs.module.scss'
import aboutUsImg from 'public/images/aboutUs/aboutUsImg.jpeg'

export default function AboutUs() {
    return(
        <section className="section is-large aboutus-section p-0">
            <div className='container aboutus-container is-fluid m-0 p-0'>
                <div className='columns aboutus-columns'>
                    <div className='column aboutus-left'>
                        <div className='inner-left'>
                            <div className='aboutus-label'>
                                <h3 className='aboutus-label-front'>AboutUs</h3>
                                <h2 className='aboutus-label-back'>AboutUs</h2>
                            </div>
                            <h3 className='aboutus-title'>Restaurant</h3>
                            <p className='aboutus-description'>Restaurant description<br/></p>
                        </div>
                    </div>
                    <div className='column aboutus-right p-0'>
                        <Image src={aboutUsImg.src} width={1000} height={1000} className='aboutus-img'></Image>
                    </div>
                </div>
            </div>
        </section>
    )
}