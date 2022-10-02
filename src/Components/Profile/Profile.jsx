// dependencies
import TypeWriter from 'typewriter-effect' // https://github.com/tameemsafi/typewriterjs

// styles
import './_profile.scss'

// images
import profilePicture from '../../Assets/Images/pp.webp'
import Background from '../Background/Background'

export default function Profile() {
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
            <img
              className="sectionProfile__container__pictureContainer__fig__img"
              src={profilePicture}
              alt="Nicolas Decressac"
            />
          </figure>
        </div>
        <div className="sectionProfile__container__profile">
          <p className="sectionProfile__container__profile__text">
            Passionné par le développement web, je recherche un poste de
            développeur web junior front-end, avec une préférence pour les
            technologies Angular ou React.js. <br />
            <br /> J'ai également des notions de développement côté back-end,
            via node.js et son framework express.
            <br />
            <br />
            Je passe beaucoup de mon temps libre à parfaire mes connaissances du
            framework Angular, via des projets personnels.
          </p>
        </div>
      </article>
      <Background />
    </section>
  )
}
