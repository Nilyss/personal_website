// components
import Cards from '../Cards/Cards'

// styles
import './_portFolio.scss'

export default function PortFolio() {
  return (
    <section id="portFolio" className="sectionPortFolioDescription">
      <article className="sectionPortFolioDescription__container">
        <div className="sectionPortFolioDescription__container__intro">
          <h2 className="sectionPortFolioDescription__container__intro__title">
            Projets réalisés
          </h2>
        </div>
        <Cards />
      </article>
    </section>
  )
}
