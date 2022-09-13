// styles
import './_index.scss'

// videos
import backgroundVideo from '../../Assets/Videos/bgHome.mp4'
import backgroundVideo2 from '../../Assets/Videos/bgServices.mp4'
import backgroundVideo3 from '../../Assets/Videos/bgPortFolio.mp4'

// components
import NavBar from '../../Components/NavBar/NavBar'
import Info from '../../Components/Info/Info'
import Description from '../../Components/Description/Description'
import ServicesDescription from '../../Components/ServicesDescription/ServicesDescription'
import PortFolioDescription from '../../Components/PortFolioDescription/PortFolioDescription'
import Carousel from '../../Components/Carousel/Carousel'

export default function Index() {
  return (
    <div className="indexWrapper">
      <div className="navWrapper">
        <NavBar />
      </div>
      <Info />
      <div className="descriptionWrapper">
        <Description />
      </div>
      <div className="servicesDescriptionWrapper">
        <ServicesDescription />
      </div>
      <div className="portFolioDescriptionWrapper">
        <PortFolioDescription />
      </div>
      <div className="carouselWrapper">
        <Carousel />
      </div>
      {
        // ********** VIDEOS SECTION **********
      }
      <div className="homeVideoContainer">
        <video
          className="homeContainer__videoContainer__video"
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
      <div className="servicesVideoContainer">
        <video
          className="servicesContainer__videoContainer__video"
          autoPlay
          loop
          muted
        >
          <source
            className="videoBackground__src"
            src={backgroundVideo2}
            type="video/mp4"
          />
        </video>
      </div>
      <div className="portFolioVideoContainer">
        <video
          className="servicesContainer__videoContainer__video"
          autoPlay
          loop
          muted
        >
          <source
            className="videoBackground__src"
            src={backgroundVideo3}
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  )
}
