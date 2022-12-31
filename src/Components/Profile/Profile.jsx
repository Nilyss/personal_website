// dependencies
import TypeWriter from 'typewriter-effect' // https://github.com/tameemsafi/typewriterjs

// styles
import './_profile.scss'

// images
import profilePicture from '../../Assets/Images/pp.webp'
import Background from '../Background/Background'
import { useEffect, useState } from 'react'

export default function Profile() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1500)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <section className="sectionProfile">
      <article id="profile" className="sectionProfile__container">
        <div className="sectionProfile__container__intro">
          <p className="sectionProfile__container__intro__subtitle">
            Bonjour, je m'appelle
          </p>
          <h1 className="sectionProfile__container__intro__title">
            <TypeWriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Nicolas Decressac')
                  .start()
                  .callFunction((state) => {
                    state.elements.cursor.setAttribute('hidden', 'hidden')
                    typewriter.stop()
                  })
              }}
            />
          </h1>
        </div>
        <div className="sectionProfile__container__pictureContainer">
          <figure className="sectionProfile__container__pictureContainer__fig">
            {isLoaded ? (
              <img
                className="sectionProfile__container__pictureContainer__fig__img"
                src={profilePicture}
                alt="Nicolas DECRESSAC"
              />
            ) : (
              <div className="spinner"></div>
            )}
          </figure>
        </div>
        <div className="sectionProfile__container__profile">
          <p className="sectionProfile__container__profile__text">
            Passionné par le développement web, avec une appétence pour la
            partie front-end, tout en appréciant également la partie back-end,
            je recherche une alternance étant déjà diplômé chez OpenClassrooms
            de la formation développeur web (RNCP 36076), afin de parfaire mes
            connaissances du métier.
          </p>
        </div>
      </article>
      <Background />
    </section>
  )
}
