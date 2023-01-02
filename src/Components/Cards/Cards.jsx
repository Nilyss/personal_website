import { useContext, useState } from 'react'
import { DataContext } from '../../Context/DataContext'
import CardsDetails from '../CardsDetails/CardsDetails'

// librairies
import { Carousel } from 'react-responsive-carousel' // https://www.npmjs.com/package/react-responsive-carousel
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

// styles
import './_cards.scss'

export default function Cards() {
  const { projects } = useContext(DataContext)
  const [showDetails, setShowDetails] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const goToDetails = (id) => {
    setSelectedProject(id)
    setShowDetails(true)
  }

  return (
    <div className="sectionPortFolioDescription__container__cards">
      <div className="sectionPortFolioDescription__container__cards__details">
        {showDetails && (
          <CardsDetails id={selectedProject} setShowDetails={setShowDetails} />
        )}
      </div>
      <Carousel
        className="sectionPortFolioDescription__container__cards__carousel"
        showThumbs={false}
        autoPlay={true}
        interval={6000}
        infiniteLoop={true}
        axis={'horizontal'}
        showArrows={true}
        showStatus={false}
        autoFocus={true}
        emulateTouch={true}
      >
        {projects &&
          projects.map((project, index) => (
            <div
              className="sectionPortFolioDescription__container__cards__wrapper"
              key={index}
              onClick={() => goToDetails(project.id)}
            >
              <div className="sectionPortFolioDescription__container__cards__wrapper__header">
                <h3 className="sectionPortFolioDescription__container__cards__wrapper__header__title">
                  {project.name}
                </h3>
              </div>
              <div className="sectionPortFolioDescription__container__cards__wrapper__body">
                <figure className="sectionPortFolioDescription__container__cards__wrapper__body__figure">
                  <img
                    className="sectionPortFolioDescription__container__cards__wrapper__body__figure__picture"
                    src={project.thumbnail}
                    alt="Preview of the project"
                  />
                </figure>
              </div>
              <p className="sectionPortFolioDescription__container__cards__wrapper__overview">
                {project.overview}
              </p>
              <div className="sectionPortFolioDescription__container__cards__wrapper__footer">
                <button
                  onClick={() => goToDetails(project.id)}
                  className="sectionPortFolioDescription__container__cards__wrapper__footer__button"
                >
                  Détails du projet
                  <span className="material-symbols-outlined sectionPortFolioDescription__container__cards__wrapper__footer__icons">
                    arrow_forward_ios
                  </span>
                </button>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  )
}
