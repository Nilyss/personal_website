// styles
import './_home.scss'

// nav components
import NavBar from '../../Components/NavBar/NavBar'
import Info from '../../Components/Info/Info'

// sections components
import Profile from '../../Components/Profile/Profile'
import Services from '../../Components/Services/Services'
import PortFolio from '../../Components/PortFolio/PortFolio'
import Education from '../../Components/Education/Education'
import Contact from '../../Components/Contact/Contact'

export default function Home() {
  return (
    <>
      <main className="main scrollContainer">
        <Info />
        <NavBar />
        <div id="containerId" className="main__sections ">
          <Profile />
          <Services />
          <PortFolio />
          <Education />
          <Contact />
        </div>
      </main>
    </>
  )
}
