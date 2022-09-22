// styles
import './_background.scss'

// images
import background from '../../Assets/Images/bg.webp'

export default function Background() {
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
