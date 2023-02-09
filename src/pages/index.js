import { Inter } from '@next/font/google'
import NavBar from './Components/navBar'
import TitleBanner from './Components/titleBanner'
import DeliveryServices from './Components/deliveryServices'
import Gallery from './Components/gallery'
import Menu from './Components/menu'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='view'>
        <NavBar />
        <TitleBanner />
    </div>
  )
}
