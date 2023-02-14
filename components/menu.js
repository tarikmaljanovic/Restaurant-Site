import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from 'styles/menu.module.scss'

export default function Menu() {
    return(
        <>
        <section class="hero is-fullheight">
            <div class="hero-body menu-hero-body">
                <div class='container menu'>
                    <div class='menu-section-title'>
                        <h2 class='back-title'>Meny</h2>
                        <h3 class='front-title'>Meny</h3>
                    </div>
                    <div class='menu-section-navbar m-5'>
                        <div class='menu-section-option-active'>
                            <p class='navbar-label-active'>Salader</p>
                        </div>
                        <div class='menu-section-option-inactive'>
                            <p class='navbar-label-inactive'>Pasta</p>
                        </div>
                        <div class='menu-section-option-inactive'>
                            <p class='navbar-label-inactive'>Wraps</p>
                        </div>
                        <div class='menu-section-option-inactive'>
                            <p class='navbar-label-inactive'>Toast</p>
                        </div>
                        <div class='menu-section-option-inactive'>
                            <p class='navbar-label-inactive'>Juicer</p>
                        </div>
                        <div class='menu-section-option-inactive'>
                            <p class='navbar-label-inactive'>Dryck</p>
                        </div>
                        <hr class='navbar-divider'/>
                    </div>
                    <h2 class='menu-section-category-label'>Category</h2>
                    <div class='columns menu-section-body'>
                       
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}