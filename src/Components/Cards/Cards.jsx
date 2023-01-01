import { useContext, useState } from 'react'
import { DataContext } from '../../Context/DataContext'

// styles
import './_cards.scss'
import CardsDetails from '../CardsDetails/CardsDetails'
export default function Cards() {
  const { projects } = useContext(DataContext)
  const [showDetails, setShowDetails] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const goToDetails = (id) => {
    setSelectedProject(id)
    setShowDetails(true)
  }

  return (
    <ul className="sectionPortFolioDescription__container__cards">
      <div className="sectionPortFolioDescription__container__cards__details">
        {showDetails && (
          <CardsDetails id={selectedProject} setShowDetails={setShowDetails} />
        )}
      </div>
      {projects &&
        projects.map((project, index) => (
          <li
            className="sectionPortFolioDescription__container__cards__wrapper"
            key={index}
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
                  src={project.image}
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
                className="sectionPortFolioDescription__container__cards__wrapper__footer__details"
              >
                Détails du projet
                <span className="material-symbols-outlined sectionPortFolioDescription__container__cards__wrapper__footer__icons">
                  arrow_forward_ios
                </span>
              </button>
            </div>
          </li>
        ))}
    </ul>
  )
}
