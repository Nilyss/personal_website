// styles
import './_info.scss'

export default function Info() {
  return (
    <section className="sectionInfo">
      <article className="infoContainer">
        <div className="infoContainer__info">
          <p className="infoContainer__info__title">nom</p>
          <p className="infoContainer__info__content">Nicolas DECRESSAC</p>
        </div>
        <div className="infoContainer__info">
          <p className="infoContainer__info__title">role</p>
          <p className="infoContainer__info__content">Développeur Web</p>
        </div>
        <div className="infoContainer__info">
          <p className="infoContainer__info__title">adresse mail</p>
          <p className="infoContainer__info__content">
            decressac.nicolas@gmail.com
          </p>
        </div>
        <div className="infoContainer__info">
          <p className="infoContainer__info__title">téléphone</p>
          <p className="infoContainer__info__content">+33(0)6.95.59.37.54</p>
        </div>
      </article>
    </section>
  )
}
