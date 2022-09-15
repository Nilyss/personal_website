// dependencies
import { Swiper, SwiperSlide } from 'swiper/react' //https://swiperjs.com/react
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css'

// styles
import './_carousel.scss'

// images
import OhMyFood from '../../Assets/Images/ohmyfood.webp'
import Kanap from '../../Assets/Images/kanap.webp'
import Piiquante from '../../Assets/Images/piiquante.webp'
import Groupomania from '../../Assets/Images/groupomania.webp'

export default function Carousel() {
  return (
    <div className="carousel">
      <Swiper
        modules={[Navigation, EffectFade]}
        navigation
        effect={'fade'}
        speed={800}
        slidesPerView={1}
        loop
        className="swiper"
      >
        <SwiperSlide className="swiper__slide">
          <p className="swiper__slide__description">
            <h4 className="swiper__slide__description__title">
              Groupomania - Réseau social :
            </h4>
            <h5 className="swiper__slide__description__subtitle">
              Front-end :
            </h5>
            <p className="swiper__slide__description__stack">React.js, Sass</p>
            <h5 className="swiper__slide__description__subtitle">Back-end :</h5>
            <p className="swiper__slide__description__stack">
              Node.js, Express.js, MongoDB (ODM Mongoose)
            </p>
          </p>
          <img
            className="swiper__slide__img"
            src={Groupomania}
            alt="Projet Groupomania"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <p className="swiper__slide__description">
            <h4 className="swiper__slide__description__title">
              OhMyFood - Intégration maquette :
            </h4>
            <h4 className="swiper__slide__description__subtitle">
              Front-end :
            </h4>
            <p className="swiper__slide__description__stack">
              HTML5, CSS3 (Sass)
            </p>
          </p>
          <img
            className="swiper__slide__img"
            src={OhMyFood}
            alt="Projet OhMyFood"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <p className="swiper__slide__description">
            <h4 className="swiper__slide__description__title">
              Piiquante - Application web
            </h4>
            <h5 className="swiper__slide__description__subtitle">Back-end :</h5>
            <p className="swiper__slide__description__stack">
              Node.js, Express.js, MongoDB (ODM Mongoose)
            </p>
          </p>
          <img
            className="swiper__slide__img"
            src={Piiquante}
            alt="Projet OhMyFood"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <p className="swiper__slide__description">
            <h4 className="swiper__slide__description__title">
              Kanap - Site e-commerce :
            </h4>
            <h5 className="swiper__slide__description__subtitle">
              Front-end :
            </h5>
            <p className="swiper__slide__description__stack">
              JavaScript ES6 - Connexion du front-end au back-end
            </p>
          </p>
          <img
            className="swiper__slide__img"
            src={Kanap}
            alt="Projet OhMyFood"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
