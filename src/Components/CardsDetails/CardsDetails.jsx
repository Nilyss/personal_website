import { useContext } from 'react'
import { DataContext } from '../../Context/DataContext'

// librairies
import { Carousel } from 'react-responsive-carousel' // https://www.npmjs.com/package/react-responsive-carousel
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

// styles
import './_cardsDetails.scss'

export default function CardsDetails(props) {
  const { projects } = useContext(DataContext)
  const selectedProject = projects.find((project) => project.id === props.id)

  const closeDetails = () => {
    props.setShowDetails(false)
  }

  const embedId = selectedProject.YtUrl.split('/').pop()
  console.log('embedId =>', embedId)
  return (
    <div className="cardDetails">
      <div className="cardDetails__header">
        <div className="cardDetails__header__title">{selectedProject.name}</div>
        <div
          className="cardDetails__header__closeButton material-symbols-outlined"
          onClick={() => closeDetails()}
          title={'Fermer'}
        >
          close
        </div>
      </div>
      <div className="cardDetails__body">
        <div className="cardDetails__body__message">
          {selectedProject.url && (
            <div className="cardDetails__externalLinkWrapper">
              <p className={'cardDetails__body__overview--bold'}>
                Consulté le déploiement du projet :{' '}
                <a
                  href={selectedProject.url}
                  className="cardDetails__externalLinkWrapper__link"
                  title={selectedProject.url.split('/').pop()}
                >
                  {selectedProject.url.split('/').pop()}
                </a>
              </p>
            </div>
          )}
          <div className="cardDetails__body__stack">
            <p>
              <span className={'cardDetails__body__overview--bold'}>
                Stack technique :
              </span>{' '}
              {selectedProject.stack}{' '}
            </p>
          </div>
          <div className="cardDetails__body__overview">
            <p>
              <span className={'cardDetails__body__overview--bold'}>
                Description :
              </span>{' '}
              {selectedProject.overview}{' '}
            </p>
          </div>
        </div>
        <div className="cardDetails__body__youtube">
          {selectedProject.YtUrl && (
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${embedId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          )}
        </div>
        {selectedProject.images && (
          <div className={'carouselWrapper'}>
            <Carousel
              className="sectionPortFolioDescription__container__cards__carousel"
              showThumbs={false}
              autoPlay={true}
              interval={3000}
              centerMode={true}
              centerSlidePercentage={30}
              infiniteLoop={true}
              axis={'horizontal'}
              showArrows={true}
              showStatus={false}
              autoFocus={true}
              emulateTouch={true}
            >
              {selectedProject.images.map((image, index) => (
                <figure
                  className={
                    'sectionPortFolioDescription__container__cards__carousel__imageWrapper'
                  }
                >
                  <img
                    className={
                      'sectionPortFolioDescription__container__cards__carousel__imageWrapper__image'
                    }
                    key={index}
                    src={image}
                    alt="Preview of the project"
                  />
                </figure>
              ))}
            </Carousel>
          </div>
        )}
      </div>
      <div className="cardDetails__footer">
        <button
          className="cardDetails__footer__closeButton"
          onClick={() => closeDetails()}
        >
          Fermer
        </button>
      </div>
    </div>
  )
}
