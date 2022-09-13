// styles
import './_home.scss'

// ********** components **********
// nav components
import NavBar from '../../Components/NavBar/NavBar'
import Info from '../../Components/Info/Info'

// sections components
import Profile from '../../Components/Profile/Profile'
import Services from '../../Components/Services/Services'

// background components
import FirstBackground from '../../Components/Background/FirstBackground'
import SecondBackground from '../../Components/Background/SecondBackground'
import ThirdBackground from '../../Components/Background/ThirdBackground'
import PortFolio from '../../Components/PortFolio/PortFolio'

// carousel components
import Carousel from '../../Components/Carousel/Carousel'

export default function Home() {
  return (
    <main className="main">
      <Info />
      <NavBar />
      <div className="main__sections">
        <Profile />
        <Services />
        <PortFolio />
      </div>
      <div className="main__background">
        <FirstBackground />
        <SecondBackground />
        <ThirdBackground />
        <Carousel />
      </div>
    </main>
  )
}
