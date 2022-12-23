import { useEffect, useState } from 'react'

import HttpService from '../../data/data.service.js'
// styles
import './_cards.scss'
const http = new HttpService()

export default function Cards() {
  const [projects, setProjects] = useState([])

  // put the data in the state from the HTTP request
  useEffect(() => {
    http.getProjects().then((data) => {
      setProjects(data)
    })
  }, [])

  return (
    <div className="sectionPortFolioDescription__container__cards">
      {projects &&
        projects.map((project, index) => (
          <div
            key={index}
            className="sectionPortFolioDescription__container__cards__card"
          >
            <div className="sectionPortFolioDescription__container__cards__card__header">
              <h3 className="sectionPortFolioDescription__container__cards__card__header__title">
                {project.name}
              </h3>
              <p className="sectionPortFolioDescription__container__cards__card__header__date">
                {project.stack}
              </p>
            </div>
            <div className="sectionPortFolioDescription__container__cards__card__content">
              <p className="sectionPortFolioDescription__container__cards__card__content__description">
                {project.overview}
              </p>
              <div className="sectionPortFolioDescription__container__cards__card__content__technos">
                <span className="sectionPortFolioDescription__container__cards__card__content__technos__techno">
                  {project.image}
                </span>
              </div>
            </div>
            <div className="sectionPortFolioDescription__container__cards__card__footer">
              <a
                href={project.url}
                className="sectionPortFolioDescription__container__cards__card__footer__link"
              >
                <span className="material-symbols-outlined linkIcon">link</span>
                Lien
              </a>
            </div>
          </div>
        ))}
    </div>
  )
}
