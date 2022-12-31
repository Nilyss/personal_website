import { useEffect, useState } from 'react'

import HttpService from '../../data/data.service.js'
// styles
import './_cards.scss'
// services
const http = new HttpService()
export default function Cards() {
  const [projects, setProjects] = useState([])

  // put the data in the state from the HTTP request
  useEffect(() => {
    http.getProjects().then((data) => {
      setProjects(data)
    })
  }, [])
  console.log('projects =>', projects)
  return (
    <ul className="sectionPortFolioDescription__container__cards">
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
            <p className="sectionPortFolioDescription__container__cards__wrapper__overview">
              {project.overview}
            </p>
            <div className="sectionPortFolioDescription__container__cards__wrapper__body">
              <figure className="sectionPortFolioDescription__container__cards__wrapper__body__figure">
                <img
                  className="sectionPortFolioDescription__container__cards__wrapper__body__figure__picture"
                  src={project.image}
                  alt="Preview of the project"
                />
              </figure>
            </div>
            <div className="sectionPortFolioDescription__container__cards__wrapper__footer">
              <button className="sectionPortFolioDescription__container__cards__wrapper__footer__details">
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
