// styles
import './_home.scss'

// asset
import backgroundVideo from '../../Assets/Videos/bgHome.mp4'

// components
import NavBar from '../../Components/NavBar/NavBar'
import Info from '../../Components/Info/Info'
import Description from '../../Components/Description/Description'

// init Page
export default function Home() {
  // render the function in dom
  return (
    <div className="homeContainer">
      <div className="homeContainer__videoContainer">
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
      <header></header>
      <main className="homeMain">
        <NavBar />
        <Info />
        <Description />
      </main>
      <footer></footer>
    </div>
  )
}
