// styles
import './_services.scss'
import BackgroundAlt from '../Background/Background-Alt'

export default function Services() {
  return (
    <section id="services" className="sectionServices">
      <BackgroundAlt />
      <article className="sectionServices__container">
        <div className="sectionServices__container__intro">
          <h2 className="sectionServices__container__intro__title">
            <span className="material-symbols-outlined ecoIcon">eco</span>
            Services
          </h2>
          <h3 className="sectionServices__container__intro__subtitle">
            Développement Web
          </h3>
        </div>
        <div className="cardWrapper">
          <div className="sectionServices__container__card">
            <div className="sectionServices__container__card__titleContainer">
              <h4 className="sectionServices__container__card__titleContainer__title">
                Front-End
              </h4>
              <span className="sectionServices__container__card__titleContainer__icons material-symbols-outlined">
                code
              </span>
            </div>
            <div className="sectionServices__container__card__body">
              <p className="sectionServices__container__card__body__text">
                Création de site web statique et dynamique grace à HTML5, CSS3,
                JavaScript ECMAScript 6, TypeScript 4.8 ainsi que de Framework
                front-end comme Angular 14 ou React.js 18 et React-native côté
                développement mobile.
              </p>
            </div>
          </div>
          <div className="sectionServices__container__card">
            <div className="sectionServices__container__card__titleContainer">
              <h4 className="sectionServices__container__card__titleContainer__title">
                Back-End
              </h4>
              <span className="sectionServices__container__card__titleContainer__icons material-symbols-outlined">
                dns
              </span>
            </div>
            <div className="sectionServices__container__card__body">
              <p className="sectionServices__container__card__body__text">
                Création d'API REST grace au technologie Node.js, au framework
                Express.js, ainsi que d'utilisation de base de donnée non
                relationnel comme mongoDB et l'ODM Mongoose.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
