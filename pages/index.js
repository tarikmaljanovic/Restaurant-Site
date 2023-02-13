import { Inter } from '@next/font/google'
import NavBar from 'components/navBar.js'
import TitleBanner from 'components/titleBanner.js'
import DeliveryServices from 'components/deliveryServices.js'
import Gallery from 'components/gallery.js'
import Menu from 'components/menu.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='view'>
        <NavBar />
        <TitleBanner />
        <DeliveryServices />
        <Gallery />
    </div>
  )
}
