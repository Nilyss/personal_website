// styles
import './_background.scss'

// video
import backgroundVideo from '../../Assets/Videos/bgServices.mp4'

export default function FirstBackground() {
  return (
    <div className="secondBackgroundVideoContainer">
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
