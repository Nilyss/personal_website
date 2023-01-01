import { useContext } from 'react'
import { DataContext } from '../../Context/DataContext'
// styles
import './_cardsDetails.scss'

export default function CardsDetails(props) {
  const { projects } = useContext(DataContext)
  const selectedProject = projects.find((project) => project.id === props.id)

  const closeDetails = () => {
    props.setShowDetails(false)
  }

  return (
    <div className="cardDetails">
      <div className="cardDetails__header">
        <div className="cardDetails__header__title">{selectedProject.name}</div>
      </div>
      <div className="cardDetails__body"></div>
      <div className="cardDetails__footer">
        <button onClick={() => closeDetails()}>Fermer</button>
      </div>
    </div>
  )
}
