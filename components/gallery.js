import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from 'styles/gallery.module.scss'
import img1 from 'public/images/galleryImages/img1.png'
import img2 from 'public/images/galleryImages/img2.png'
import img3 from 'public/images/galleryImages/img3.png'
import img4 from 'public/images/galleryImages/img4.png'
import img5 from 'public/images/galleryImages/img5.png'
import img6 from 'public/images/galleryImages/img6.png'

export default function Galery() {
    return(
        <section className="gallery-section is-small">
            <div className='container is-fluid m-0 p-0 gallery-container'>
                <div className='columns is-gapless gallery-columns'>
                    <div className='column'>
                        <img src={img1.src} className='img-column'></img>
                    </div> 
                    <div class='column'>
                        <img src={img2.src} className='img-column'></img>
                    </div>
                    <div class='column'>
                        <img src={img3.src} className='img-column'></img>
                    </div>
                    <div class='column'>
                        <img src={img4.src} className='img-column'></img>
                    </div>
                    <div class='column'>
                        <img src={img5.src} className='img-column'></img>
                    </div>
                    <div class='column'>
                        <img src={img6.src} className='img-column'></img>
                    </div>
                </div>
            </div>
        </section>
    )
}