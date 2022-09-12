// styles
import './_services.scss'

// asset
import backgroundVideo from '../../Assets/Videos/bgServices.mp4'

// components
import NavBar from '../../Components/NavBar/NavBar'
import Info from '../../Components/Info/Info'
import ServicesDescription from '../../Components/ServicesDescription/ServicesDescription'

// init page
export default function Services() {
  // render the function in dom
  return (
    <div className="servicesContainer">
      <div className="servicesContainer__videoContainer">
        <video
          className="servicesContainer__videoContainer__video"
          autoPlay
          loop
          muted
        >
          <source
            className="videoBackground__src"
            src={backgroundVideo}
            type="video/mp4"
          />
        </video>
      </div>
      <header></header>
      <main className="servicesMain">
        <NavBar />
        <Info />
        <ServicesDescription />
      </main>
      <footer></footer>
    </div>
  )
}
