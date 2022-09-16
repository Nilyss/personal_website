// styles
import './_portFolio.scss'
import Carousel from '../Carousel/Carousel'

export default function PortFolio() {
  return (
    <section id="portFolio" className="sectionPortFolioDescription">
      <article className="sectionPortFolioDescription__container">
        <div className="sectionPortFolioDescription__container__intro">
          <h2 className="sectionPortFolioDescription__container__intro__title">
            Porte-Folio
          </h2>
          <h3 className="sectionPortFolioDescription__container__intro__subtitle">
            Projets réalisés
          </h3>
        </div>
        <Carousel />
      </article>
    </section>
  )
}
