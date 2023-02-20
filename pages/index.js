import { Inter } from '@next/font/google'
import {getMenu, getProfile, getGallery} from 'utils/services.js'
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
export default function Home({gallery, profile, menu}) {

  return (
    <div className='view'>
        <NavBar />
        <TitleBanner profile={profile} gallery={gallery} />
        <DeliveryServices />
        <Gallery gallery={gallery} />
        <Menu menu={menu} />
        <TakeawayBanner />
        <AboutUs />
        <InformationSection profile={profile} />
        <Footer profile={profile} />
    </div>
  )
}

export async function getStaticProps(context) {
  const gallery = await getGallery(context);
  const profile = await getProfile(context);
  const menu = await getMenu(context);
  return {
    props: {
      gallery: gallery,
      profile: profile,
      menu: menu,
    },
    revalidate: 10,
  };
}
