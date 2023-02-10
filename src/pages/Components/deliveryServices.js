import { render } from 'react-dom'
import { Inter } from '@next/font/google'
import styles from '@/styles/DeliveryServices.module.scss'
import wolt from '@/styles/Images/wolt.png'
import foodora from '@/styles/Images/foodora.png'
import waytogo from '@/styles/Images/waytogo.png'

export default function DeliveryServices() {
    return (
        <section class="hero is-medium">
            <div class="hero-body">
                <div class='container'>
                    <div class='columns'>
                        <div class='column left-title'>
                            <h3>Beställ hemkörning</h3>
                            <p>Du kan beställa vår mat för hemkörning genom följande tjänster.</p>
                        </div>
                        <div class='column'>
                            <div class='columns right-links'>
                                <div class='column'>
                                    <div class='notification wolt'>
                                        <img src={wolt.src} alt='wolt'></img>
                                    </div>
                                </div>
                                <div class='column'>
                                    <div class='notification foodora'>
                                        <img src={foodora.src} alt='foodora'></img>
                                    </div>
                                </div>
                                <div class='column'>
                                    <div class='notification waytogo'>
                                        <img src={waytogo.src} alt='waytogo'></img>
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