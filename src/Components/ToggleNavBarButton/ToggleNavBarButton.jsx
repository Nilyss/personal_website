// hooks
import { useContext } from 'react'
import { NavContext } from '../../Context/NavContext'

// styles
import './_toggleNavBarButton.scss'

export default function ToggleNavBarButton() {
  // init hooks
  const { navState, toggleNav } = useContext(NavContext)

  return (
    <div className="iconsContainer">
      {navState.showNav ? (
        <div className="closeIconContainer">
          <span
            onClick={() => {
              toggleNav('close')
            }}
            className={` material-symbols-outlined toggleIcon closeIcon Container__closeIcon ${
              navState.showNav ? 'animatedIcons--alt' : 'animatedIcons--alt'
            }`}
          >
            close
          </span>
        </div>
      ) : (
        <>
          <div className="menuIconContainer">
            <span
              onClick={() => {
                toggleNav('open')
              }}
              className={` material-symbols-outlined toggleIcon menuIconContainer__menuIcon ${
                navState.hideNav ? 'animatedIcons' : 'animatedIcons'
              }`}
            >
              menu_open
            </span>
          </div>
        </>
      )}
    </div>
  )
}
