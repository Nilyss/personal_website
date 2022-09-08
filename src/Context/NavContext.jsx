// context for toggle true false the nav bar from ToggleNavBarButton component

// hooks
import { createContext, useState } from 'react'
export const NavContext = createContext()

// init hooks
export function NavContextProvider(props) {
  const [navState, setNavState] = useState({
    showNav: false,
    hideNav: true,
  })

  const toggleNav = (navState) => {
    if (navState === 'open') {
      setNavState({
        showNav: true,
        hideNav: false,
      })
    }
    if (navState === 'close') {
      setNavState({
        showNav: false,
        hideNav: true,
      })
    }
  }
  return (
    <NavContext.Provider value={{ navState, toggleNav }}>
      {props.children}
    </NavContext.Provider>
  )
}
