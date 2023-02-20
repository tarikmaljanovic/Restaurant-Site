import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from 'styles/menu.module.scss'
import img1 from 'public/images/menu/img1.png'
import img2 from 'public/images/menu/img2.png'
import img3 from 'public/images/menu/img3.png'
import img4 from 'public/images/menu/img4.png'
import img5 from 'public/images/menu/img5.png'
import img6 from 'public/images/menu/img6.png'

export default function Menu() {
    return(
        <section className="section is-fullheight menu-section">
            <div className="container menu-container">
                <div className='rows menu-rows'>
                    <div className='row menu-label'>
                        <p className='menu-label-back'>Meny</p>
                        <p className='menu-label-front'>Meny</p>
                    </div>
                    <div className='row menu-navbar'>
                        <div className='menu-navbar-option-active'>
                            <p className='menu-option-label'>Salader</p>
                        </div>
                        <div className='menu-navbar-option-inactive'>
                            <p className='menu-option-label'>Pasta</p>
                        </div>
                        <div className='menu-navbar-option-inactive'>
                            <p className='menu-option-label'>Wraps</p>
                        </div>
                        <div className='menu-navbar-option-inactive'>
                            <div className='menu-option-label'>Toast</div>
                        </div>
                        <div className='menu-navbar-option-inactive'>
                            <div className='menu-option-label'>Juicer</div>
                        </div>
                        <div className='menu-navbar-option-inactive'>
                            <div className='menu-option-label'>Dryck</div>
                        </div>
                    </div>
                    <div className='row divider'>
                        <hr className='dopdown divider'/>
                    </div>
                    <div className='row category'>
                        <p className='category-label'>Category</p>
                    </div>
                    <div className='row menu-body'>
                        <div className='columns menu-row'>
                            <div className='column item-wimg'>
                                <img src={img1.src} className='menu-item-img'></img>
                                <div className='menu-item-description'>
                                    <p className='item-title'>In fusce eget.</p>
                                    <p className='item-description'>Facilisis purus eu velit vitae tristique pulvinar in aliquam. </p>
                                    <p className='item-price'>160 SEK</p>
                                    <div className='item-tags'>
                                        <p className='item-tag'>Laktosfritt</p>
                                        <p className='item-tag'>Vetefritt</p>
                                    </div>
                                </div>
                            </div>
                            <div className='column item-noimg'>
                                <div className='menu-item-description'>
                                    <p className='item-title'>Mi velit.</p>
                                    <p className='item-description'>Dictum sed scelerisque vitae scelerisque enim, dictumst. Ornare tempor duis tortor id convallis proin. Viverra risus quis convallis volutpat diam sed sit.</p>
                                    <p className='item-price'>160 SEK</p>
                                    <div className='item-tags'>
                                        <p className='item-tag'>Laktosfritt</p>
                                        <p className='item-tag'>Vetefritt</p>
                                    </div>
                                </div>
                            </div>
                            <div className='column item-wimg'>
                                <img src={img5.src} className='menu-item-img'></img>
                                <div className='menu-item-description'>
                                    <p className='item-title'>In fusce eget.</p>
                                    <p className='item-description'>Facilisis purus eu velit vitae tristique pulvinar in aliquam. </p>
                                    <p className='item-price'>160 SEK</p>
                                    <div className='item-tags'>
                                        <p className='item-tag'>Laktosfritt</p>
                                        <p className='item-tag'>Vetefritt</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='columns menu-row'>
                            <div className='column item-wimg'>
                                <img src={img2.src} className='menu-item-img'></img>
                                <div className='menu-item-description'>
                                    <p className='item-title'>In fusce eget.</p>
                                    <p className='item-description'>Facilisis purus eu velit vitae tristique pulvinar in aliquam. </p>
                                </div>
                            </div>
                            <div className='column item-wimg'>
                                <img src={img4.src} className='menu-item-img'></img>
                                <div className='menu-item-description'>
                                    <p className='item-title'>In fusce eget.</p>
                                    <p className='item-description'>Facilisis purus eu velit vitae tristique pulvinar in aliquam. </p>
                                    <p className='item-price'>160 SEK</p>
                                    <div className='item-tags'>
                                        <p className='item-tag'>Laktosfritt</p>
                                        <p className='item-tag'>Vetefritt</p>
                                    </div>
                                </div>
                            </div>
                            <div className='column item-wimg'>
                                <img src={img4.src} className='menu-item-img'></img>
                                <div className='menu-item-description'>
                                    <p className='item-title'>In fusce eget.</p>
                                    <p className='item-description'>Facilisis purus eu velit vitae tristique pulvinar in aliquam. </p>
                                    <p className='item-price'>160 SEK</p>
                                    <div className='item-tags'>
                                        <p className='item-tag'>Laktosfritt</p>
                                        <p className='item-tag'>Vetefritt</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='columns menu-row'>
                            <div className='column item-wimg'>
                                <img src={img3.src} className='menu-item-img'></img>
                                <div className='menu-item-description'>
                                    <p className='item-title'>In fusce eget.</p>
                                    <p className='item-description'>Facilisis purus eu velit vitae tristique pulvinar in aliquam. </p>
                                </div>
                            </div>
                            <div className='column item-noimg'>
                                <div className='menu-item-description'>
                                    <p className='item-title'>Mi velit.</p>
                                    <p className='item-description'>Dictum sed scelerisque vitae scelerisque enim, dictumst. Ornare tempor duis tortor id convallis proin. Viverra risus quis convallis volutpat diam sed sit.</p>
                                    <p className='item-price'>160 SEK</p>
                                    <div className='item-tags'>
                                        <p className='item-tag'>Laktosfritt</p>
                                        <p className='item-tag'>Vetefritt</p>
                                    </div>
                                </div>
                            </div>
                            <div className='column item-noimg'>
                                <div className='menu-item-description'>
                                    <p className='item-title'>Mi velit.</p>
                                    <p className='item-description'>Dictum sed scelerisque vitae scelerisque enim, dictumst. Ornare tempor duis tortor id convallis proin. Viverra risus quis convallis volutpat diam sed sit.</p>
                                    <p className='item-price'>160 SEK</p>
                                    <div className='item-tags'>
                                        <p className='item-tag'>Laktosfritt</p>
                                        <p className='item-tag'>Vetefritt</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}