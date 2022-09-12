// styles
import './_servicesDescription.scss'

export default function ServicesDescription() {
  return (
    <section className="sectionServicesDescription">
      <article className="servicesDescriptionContainer">
        <div className="servicesDescriptionContainer__intro">
          <h1 className="servicesDescriptionContainer__title">Services</h1>
        </div>
        <div className="servicesDescriptionContainer__info">
          <h2 className="servicesDescriptionContainer__">Développement Web</h2>
        </div>
        <div className="servicesDescriptionContainer__card">
          <div className="servicesDescriptionContainer__card__titleContainer">
            <h3 className="servicesDescriptionContainer__card__titleContainer__title">
              Front-End
            </h3>
            <span className="servicesDescriptionContainer__card__titleContainer__icons material-symbols-outlined">
              code
            </span>
          </div>
          <div className="servicesDescriptionContainer__card__container">
            <p className="servicesDescriptionContainer__card__container__text">
              Création de site web statique et dynamique grace à html5, css3, et
              Javascript ECMAScript 6, ainsi que de Framework front-end comme
              React.js.
            </p>
          </div>
        </div>
        <div className="servicesDescriptionContainer__card">
          <div className="servicesDescriptionContainer__card__titleContainer">
            <h3 className="servicesDescriptionContainer__card__titleContainer__title">
              Back-End
            </h3>
            <span className="servicesDescriptionContainer__card__titleContainer__icons material-symbols-outlined">
              dns
            </span>
          </div>
          <div className="servicesDescriptionContainer__card__container">
            <p className="servicesDescriptionContainer__card__container__text">
              Création d'API REST grace au technologie Node.js, au framework
              Express.js, ainsi que d'utilisation de base de donnée non
              relationnel comme mongoDB et l'ODM Mongoose.
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}
