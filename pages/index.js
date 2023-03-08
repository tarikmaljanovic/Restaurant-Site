import { Inter } from '@next/font/google'
import NavBar from 'components/navBar.js'
import TitleBanner from 'components/titleBanner.js'
import DeliveryServices from 'components/deliveryServices.js'
import Gallery from 'components/gallery.js'
import Menu from 'components/menu.js'
import TakeawayBanner from 'components/takeawayBanner'
import AboutUs from 'components/aboutUs'
import InformationSection from 'components/informationSection'
import Footer from 'components/footer'


const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  //

  return (
    <div className='view'>
        <NavBar />
        <TitleBanner />
        <DeliveryServices />
        <Gallery />
        <Menu />
        <TakeawayBanner />
        <AboutUs />
        <InformationSection />
        <Footer />
    </div>
  )
}