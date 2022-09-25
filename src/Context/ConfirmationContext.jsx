// context for toggle true false the confirmation modal after form submit

//hooks
import { createContext, useState } from 'react'

// init hooks
export const ConfirmationContext = createContext()

export function ConfirmContextProvider(props) {
  const [confirmState, setConfirmState] = useState({
    displayConfirm: false,
    hideConfirm: true,
  })

  const toggleConfirm = (confirmState) => {
    if (confirmState === 'confirmOn') {
      setConfirmState({
        displayConfirm: true,
        hideConfirm: false,
      })
    }
    if (confirmState === 'confirmOff') {
      setConfirmState({
        displayConfirm: false,
        hideConfirm: true,
      })
    }
  }
  return (
    <ConfirmationContext.Provider value={{ confirmState, toggleConfirm }}>
      {props.children}
    </ConfirmationContext.Provider>
  )
}
