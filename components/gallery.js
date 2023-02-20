import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from 'styles/gallery.module.scss'
import Image from 'next/image';

export default function Galery(props) {
    const gallery = props.gallery;

    return(
        <section className="gallery-section is-small">
            <div className='container is-fluid m-0 p-0 gallery-container'>
                <div className='columns is-gapless gallery-columns'>
                    {gallery[1].images.map((item, index) => {
                        return (
                            <div className="column is-2 p-0" key={index}>
                                <Image src={item.image} alt="Om oss_Galleri" width={1000} height={1000} className='img-column'/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}