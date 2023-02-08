import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import NavBar from './Components/navBar'
import TitleBanner from './Components/titleBanner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NavBar />
      <TitleBanner />
    </>
  )
}
