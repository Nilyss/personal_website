// dependencies
import TypeWriter from 'typewriter-effect' // https://github.com/tameemsafi/typewriterjs

// styles
import './_description.scss'

// images
import profilePicture from '../../Assets/Images/pp.jpg'

export default function Description() {
  return (
    <section className="sectionDescription">
      <article className="descriptionContainer">
        <div className="descriptionContainer__intro">
          <p className="descriptionContainer__intro__subtitle">
            Bonjour, je m'appelle
          </p>
          <h1 className="descriptionContainer__intro__name">
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
        <div className="descriptionContainer__picture">
          <figure className="descriptionContainer__picture__fig">
            <img
              className="descriptionContainer__picture__fig__img"
              src={profilePicture}
              alt="Nicolas Decressac"
            />
          </figure>
        </div>
        <div className="descriptionContainer__description">
          <p className="descriptionContainer__description__text">
            Passionné par le développement web, avec une appétence pour la
            partie front-end, tout en appréciant également la partie back-end,
            je recherche une alternance étant déjà diplômé chez OpenClassrooms
            de la formation développeur web (RNCP 36076), afin de parfaire mes
            connaissances du métier.
          </p>
        </div>
      </article>
    </section>
  )
}
