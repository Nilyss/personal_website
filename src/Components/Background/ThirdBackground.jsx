// styles
import './_background.scss'

// video
import backgroundVideo from '../../Assets/Videos/bgPortFolio.mp4'

export default function FirstBackground() {
  return (
    <div className="thirdBackgroundVideoContainer">
      <video className="video" autoPlay loop muted>
        <source
          className="video__source"
          src={backgroundVideo}
          type="video/mp4"
        />
      </video>
    </div>
  )
}
