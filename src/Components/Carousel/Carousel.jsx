// dependencies
import Carousel from 'nuka-carousel' // https://www.npmjs.com/package/nuka-carousel

// styles
import './_carousel.scss'

// images
import Groupomania from '../../Assets/Images/groupomania.webp'
import OhMyFood from '../../Assets/Images/ohmyfood.webp'

export default function portFolioCarousel() {
  return (
    <div className="carousel">
      <Carousel className="carouselContainer">
        <img
          className="carouselPicture"
          src={Groupomania}
          alt="projet réseau social Groupomania"
        />
        <img
          className="carouselPicture"
          src={OhMyFood}
          alt="projet SCSS OhMyFood"
        />
      </Carousel>
    </div>
  )
}
