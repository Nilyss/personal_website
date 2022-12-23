// components
import Cards from '../Cards/Cards'
import Carousel from '../Carousel/Carousel'

// styles
import './_portFolio.scss'

export default function PortFolio() {
  return (
    <section id="portFolio" className="sectionPortFolioDescription">
      <article className="sectionPortFolioDescription__container">
        <div className="sectionPortFolioDescription__container__intro">
          <h2 className="sectionPortFolioDescription__container__intro__title">
            <span className="material-symbols-outlined ecoIcon">eco</span>
            Porte-Folio
          </h2>
          <h3 className="sectionPortFolioDescription__container__intro__subtitle">
            Projets réalisés
          </h3>
        </div>
        <Cards />
        {/*<Carousel />*/}
      </article>
    </section>
  )
}
