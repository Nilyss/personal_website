// styles
import './_education.scss'
import Background from '../Background/Background'

export default function Education() {
  return (
    <section id="education" className="sectionEducation">
      <article className="sectionEducation__container">
        <div className="sectionEducation__container__intro">
          <h2 className="sectionEducation__container__intro__title">
            <span className="material-symbols-outlined ecoIcon">eco</span>
            Parcours
          </h2>
        </div>
        <div className="sectionEducation__container__body">
          <div className="sectionEducation__container__body__education">
            <h3 className="sectionEducation__container__body__education__title">
              Formation
            </h3>
            <ul className="sectionEducation__container__body__education__ul">
              <li className="sectionEducation__container__body__education__ul__li">
                <h4 className="sectionEducation__container__body__education__ul__li__title">
                  OpenClassrooms:
                </h4>
                <p className="sectionEducation__container__body__education__ul__li__text">
                  Développeur web Titre niveau 5 (bac+2) RNCP36076, 2022
                </p>
              </li>
              <li className="sectionEducation__container__body__education__ul__li">
                <h4 className="sectionEducation__container__body__education__ul__li__title">
                  Lycée André Malraux:
                </h4>
                <p className="sectionEducation__container__body__education__ul__li__text">
                  Baccalauréat Métier des arts et des industries graphiques
                  (avec mention), 2006 - 2008
                </p>
              </li>
              <li className="sectionEducation__container__body__education__ul__li">
                <h4 className="sectionEducation__container__body__education__ul__li__title">
                  Lycée André Malraux:
                </h4>
                <p className="sectionEducation__container__body__education__ul__li__text">
                  Lycée André Malraux — BEP Métiers de la communication et des
                  industries graphiques, 2004 - 2006
                </p>
              </li>
              <li className="sectionEducation__container__body__education__ul__li">
                <h4 className="sectionEducation__container__body__education__ul__li__title">
                  Anglais:
                </h4>
                <p className="sectionEducation__container__body__education__ul__li__text">
                  Niveau B2
                </p>
              </li>
            </ul>
          </div>
        </div>
      </article>
      <Background />
    </section>
  )
}
