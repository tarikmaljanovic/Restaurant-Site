import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from 'styles/gallery.module.scss'
import Image from 'next/image';

export default function Galery(props) {
    const gallery = props.gallery;

    return(
        <section className="section gallery-section is-small p-0">
            <div className='container is-fluid m-0 p-0 gallery-container'>
                <div className='columns is-gapless gallery-columns is-flex'>
                    {gallery[1].images.map((item, index) => {
                        return (
                            <div className="column is-2-desktop is-6-mobile" key={index}>
                                <figure className='image is-square'>
                                    <Image src={item.image} alt="Om oss_Galleri" width={1000} height={1000} className='img-column'/>
                                </figure>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}