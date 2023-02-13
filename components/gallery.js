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
        <>
            <section class="hero is-small">
                <div class="hero-body px-0 py-0">
                    <div class='container is-fluid m-0 p-0'>
                        <div class='columns is-gapless'>
                            <div class='column'>
                                <img src={img1.src}></img>
                            </div> 
                            <div class='column'>
                                <img src={img2.src}></img>
                            </div>
                            <div class='column'>
                                <img src={img3.src}></img>
                            </div>
                            <div class='column'>
                                <img src={img4.src}></img>
                            </div>
                            <div class='column'>
                                <img src={img5.src}></img>
                            </div>
                            <div class='column'>
                                <img src={img6.src}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}