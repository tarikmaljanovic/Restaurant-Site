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
        <>
        <section class="section is-fullheight menu-section">
            <div class="container menu-container">
                <div class='rows menu-rows'>
                    <div class='row menu-label'>
                        <p class='menu-label-back'>Meny</p>
                        <p class='menu-label-front'>Meny</p>
                    </div>
                    <div class='row menu-navbar'>
                        <div class='menu-navbar-option-active'>
                            <p class='menu-option-label'>Salader</p>
                        </div>
                        <div class='menu-navbar-option-inactive'>
                            <p class='menu-option-label'>Pasta</p>
                        </div>
                        <div class='menu-navbar-option-inactive'>
                            <p class='menu-option-label'>Wraps</p>
                        </div>
                        <div class='menu-navbar-option-inactive'>
                            <div class='menu-option-label'>Toast</div>
                        </div>
                        <div class='menu-navbar-option-inactive'>
                            <div class='menu-option-label'>Juicer</div>
                        </div>
                        <div class='menu-navbar-option-inactive'>
                            <div class='menu-option-label'>Dryck</div>
                        </div>
                    </div>
                    <div class='row divider'>
                        <hr class='dopdown divider'/>
                    </div>
                    <div class='row category'>
                        <p class='category-label'>Category</p>
                    </div>
                    <div class='row menu-body'>
                        <div class='columns menu-row'>
                            <div class='column item-wimg'>
                                <img src={img1.src} class='menu-item-img'></img>
                                <div class='menu-item-description'>
                                    <p class='item-title'>In fusce eget.</p>
                                    <p class='item-description'>Facilisis purus eu velit vitae tristique pulvinar in aliquam. </p>
                                    <p class='item-price'>160 SEK</p>
                                    <div class='item-tags'>
                                        <p class='item-tag'>Laktosfritt</p>
                                        <p class='item-tag'>Vetefritt</p>
                                    </div>
                                </div>
                            </div>
                            <div class='column item-noimg'>
                                <div class='menu-item-description'>
                                    <p class='item-title'>Mi velit.</p>
                                    <p class='item-description'>Dictum sed scelerisque vitae scelerisque enim, dictumst. Ornare tempor duis tortor id convallis proin. Viverra risus quis convallis volutpat diam sed sit.</p>
                                    <p class='item-price'>160 SEK</p>
                                    <div class='item-tags'>
                                        <p class='item-tag'>Laktosfritt</p>
                                        <p class='item-tag'>Vetefritt</p>
                                    </div>
                                </div>
                            </div>
                            <div class='column item-wimg'>
                                <img src={img5.src} class='menu-item-img'></img>
                                <div class='menu-item-description'>
                                    <p class='item-title'>In fusce eget.</p>
                                    <p class='item-description'>Facilisis purus eu velit vitae tristique pulvinar in aliquam. </p>
                                    <p class='item-price'>160 SEK</p>
                                    <div class='item-tags'>
                                        <p class='item-tag'>Laktosfritt</p>
                                        <p class='item-tag'>Vetefritt</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='columns menu-row'>
                            <div class='column item-wimg'>
                                <img src={img2.src} class='menu-item-img'></img>
                                <div class='menu-item-description'>
                                    <p class='item-title'>In fusce eget.</p>
                                    <p class='item-description'>Facilisis purus eu velit vitae tristique pulvinar in aliquam. </p>
                                </div>
                            </div>
                            <div class='column item-wimg'>
                                <img src={img4.src} class='menu-item-img'></img>
                                <div class='menu-item-description'>
                                    <p class='item-title'>In fusce eget.</p>
                                    <p class='item-description'>Facilisis purus eu velit vitae tristique pulvinar in aliquam. </p>
                                    <p class='item-price'>160 SEK</p>
                                    <div class='item-tags'>
                                        <p class='item-tag'>Laktosfritt</p>
                                        <p class='item-tag'>Vetefritt</p>
                                    </div>
                                </div>
                            </div>
                            <div class='column item-wimg'>
                                <img src={img4.src} class='menu-item-img'></img>
                                <div class='menu-item-description'>
                                    <p class='item-title'>In fusce eget.</p>
                                    <p class='item-description'>Facilisis purus eu velit vitae tristique pulvinar in aliquam. </p>
                                    <p class='item-price'>160 SEK</p>
                                    <div class='item-tags'>
                                        <p class='item-tag'>Laktosfritt</p>
                                        <p class='item-tag'>Vetefritt</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='columns menu-row'>
                            <div class='column item-wimg'>
                                <img src={img3.src} class='menu-item-img'></img>
                                <div class='menu-item-description'>
                                    <p class='item-title'>In fusce eget.</p>
                                    <p class='item-description'>Facilisis purus eu velit vitae tristique pulvinar in aliquam. </p>
                                </div>
                            </div>
                            <div class='column item-noimg'>
                                <div class='menu-item-description'>
                                    <p class='item-title'>Mi velit.</p>
                                    <p class='item-description'>Dictum sed scelerisque vitae scelerisque enim, dictumst. Ornare tempor duis tortor id convallis proin. Viverra risus quis convallis volutpat diam sed sit.</p>
                                    <p class='item-price'>160 SEK</p>
                                    <div class='item-tags'>
                                        <p class='item-tag'>Laktosfritt</p>
                                        <p class='item-tag'>Vetefritt</p>
                                    </div>
                                </div>
                            </div>
                            <div class='column item-noimg'>
                                <div class='menu-item-description'>
                                    <p class='item-title'>Mi velit.</p>
                                    <p class='item-description'>Dictum sed scelerisque vitae scelerisque enim, dictumst. Ornare tempor duis tortor id convallis proin. Viverra risus quis convallis volutpat diam sed sit.</p>
                                    <p class='item-price'>160 SEK</p>
                                    <div class='item-tags'>
                                        <p class='item-tag'>Laktosfritt</p>
                                        <p class='item-tag'>Vetefritt</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}