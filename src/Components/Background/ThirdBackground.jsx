// styles
import './_background.scss'

// video
import backgroundVideo from '../../Assets/Videos/bgPortFolio.webm'

export default function ThirdBackground() {
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
