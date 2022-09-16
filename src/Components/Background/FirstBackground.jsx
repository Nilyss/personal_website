// styles
import './_background.scss'

// video
import backgroundVideo from '../../Assets/Videos/bgHome.webm'

export default function FirstBackground() {
  return (
    <div className="firstBackgroundVideoContainer">
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
