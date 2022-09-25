// libraries
import emailjs from '@emailjs/browser' // https://www.npmjs.com/package/@emailjs/browser
import EmailJsConfig from '../../Utils/EmailJsConfig'

// hooks
import { useContext, useRef, useState } from 'react'
import { ConfirmationContext } from '../../Context/ConfirmationContext'

// styles
import './_contact.scss'

// components
import Confirmation from '../Confirmation/Confirmation'

export default function Contact() {
  // init hooks
  const { confirmState, toggleConfirm } = useContext(ConfirmationContext)
  const [error, setError] = useState('')
  const form = useRef()

  //  handle function for sending mail with emailjs libraries
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        EmailJsConfig.serviceID,
        EmailJsConfig.templateID,
        form.current,
        EmailJsConfig.publicKey
      )
      .then(
        (res) => {
          if (res.status === 200) {
            toggleConfirm('confirmOn')
            // Cleaning inputs after submit
            e.target['firstName'].value = ''
            e.target['lastName'].value = ''
            e.target['emailAddress'].value = ''
            e.target['message'].value = ''
          } else {
            setError(
              `Le message n'as pu être envoyé, veuillez réessayer plus tard ! Erreur : ${res.status}`
            )
          }
        },
        (err) => {
          console.log(err.text)
        }
      )
  }

  return (
    <section id="contact" className="sectionContact">
      <article className="sectionContact__container">
        <div className="sectionContact__container__intro">
          <h2 className="sectionContact__container__intro__title">
            <span className="material-symbols-outlined ecoIcon">eco</span>
            Contact
          </h2>
        </div>
        <div className="sectionContact__container__body">
          <form
            onSubmit={sendEmail}
            ref={form}
            className="sectionContact__container__body__form"
          >
            <label
              htmlFor="firstName"
              className="sectionContact__container__body__form__label"
            >
              Prénom:
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="sectionContact__container__body__form__input"
            />
            <label
              htmlFor="lastName"
              className="sectionContact__container__body__form__label"
            >
              Nom:
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="sectionContact__container__body__form__input"
            />
            <label
              htmlFor="emailAddress"
              className="sectionContact__container__body__form__label"
            >
              Adresse email:
            </label>
            <input
              id="emailAddress"
              name="emailAddress"
              type="email"
              className="sectionContact__container__body__form__input"
            />
            <label
              htmlFor="message"
              className="sectionContact__container__body__form__label"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="sectionContact__container__body__form__textarea"
            />
            <button
              value="Envoyer !"
              type="submit"
              className="sectionContact__container__body__form__button"
            >
              Envoyer
            </button>
            <p className="sectionContact__container__body__form__error">
              {error}
            </p>
          </form>
        </div>
      </article>
      <article className="confirmationWrapper">
        {confirmState.displayConfirm && <Confirmation />}
      </article>
    </section>
  )
}
