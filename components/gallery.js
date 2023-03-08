import styles from 'styles/gallery.module.scss'
import Image from 'next/image';

export default function Galery(props) {
    const gallery = [{images : [{image: ''},
                    {image: ''},
                    {image: ''},
                    {image: ''},
                    {image: ''},
                    {image: ''},
                    {image: ''}]}];

    return(
        <section className="section gallery-section is-small p-0">
            <div className='container is-fluid m-0 p-0 gallery-container'>
                <div className='columns is-gapless gallery-columns is-flex'>
                    {gallery[0].images.map((item, index) => {
                        return (
                            <div key={`gallery-item-${index}`} className="column is-2 is-6-mobile">
                                <figure className='image is-square'>
                                    <Image src={item.image} alt="image" width={1000} height={1000} className='img-column'/>
                                </figure>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}