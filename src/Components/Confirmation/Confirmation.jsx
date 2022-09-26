// styles
import './_confirmation.scss'

//hooks
import { useContext } from 'react'
import { ConfirmationContext } from '../../Context/ConfirmationContext'

export default function Confirmation() {
  // init hooks
  const { toggleConfirm } = useContext(ConfirmationContext)
  return (
    <div className="confirmationModalContainer">
      <div className="confirmationModalContainer__modal">
        <p className="confirmationModalContainer__modal__message">
          Votre message a bien été envoyé ! Je reviens au plus vite vers vous !
        </p>
        <button
          onClick={() => {
            toggleConfirm('confirmOff')
          }}
          className="confirmationModalContainer__modal__button"
        >
          OK
        </button>
      </div>
    </div>
  )
}
