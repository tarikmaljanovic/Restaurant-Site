import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from 'styles/gallery.module.scss'
import img1 from 'public/images/galleryImages/img1.png'
import img2 from 'public/images/galleryImages/img2.png'
import img3 from 'public/images/galleryImages/img3.png'
import img4 from 'public/images/galleryImages/img4.png'
import img5 from 'public/images/galleryImages/img5.png'
import img6 from 'public/images/galleryImages/img6.png'
import Image from 'next/image';

export default function Galery(props) {
    const gallery = props.gallery;
    return(
        <section className="gallery-section is-small">
            <div className='container is-fluid m-0 p-0 gallery-container'>
                <div className='columns is-gapless gallery-columns'>
                {gallery[1].images.map((item, index) => {
                    return (
                        <div className="column is-2" key={index}>
                            <Image src={item.image} alt="Om oss_Galleri" width={1000} height={1000} className='img-column'/>
                        </div>
                    );
                })}
                </div>
            </div>
        </section>
    )
}