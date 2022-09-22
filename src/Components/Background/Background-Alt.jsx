// styles
import './_background.scss'

// images
import background from '../../Assets/Images/bg2.webp'

export default function BackgroundAlt() {
  return (
    <figure className="background__fig">
      <img
        className="background__fig__img"
        src={background}
        alt="website background"
      />
    </figure>
  )
}
