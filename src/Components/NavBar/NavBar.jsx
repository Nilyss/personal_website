//  dependencies
import { Link } from 'react-router-dom'

// hooks
import { useContext } from 'react'
import { NavContext } from '../../Context/NavContext'

// styles
import './_navBar.scss'

// components
import ToggleNavBarButton from '../ToggleNavBarButton/ToggleNavBarButton'

export default function NavBar() {
  // init hooks
  const { navState } = useContext(NavContext)

  return (
    <section className="sectionNavBar">
      <ToggleNavBarButton />
      <div className="modal">
        {navState.showNav ? (
          <div className="toggleAnimationTrue">
            <div className="navBar__container">
              <nav className="navBar__container__nav">
                <ul className="navBar__container__nav__ul">
                  <li className="navBar__container__nav__ul__li">
                    <Link to="/" className="navBar__container__nav__li__button">
                      Accueil
                    </Link>
                  </li>
                  <li className="navBar__container__nav__ul__li">
                    <Link
                      to="/services"
                      className="navBar__container__nav__li__button"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="navBar__container__nav__ul__li">
                    <Link
                      to="/portefolio"
                      className="navBar__container__nav__li__button"
                    >
                      Porte folio
                    </Link>
                  </li>
                  <li className="navBar__container__nav__ul__li">
                    <Link
                      to="/education"
                      className="navBar__container__nav__li__button"
                    >
                      Parcours
                    </Link>
                  </li>
                  <li className="navBar__container__nav__ul__li">
                    <Link
                      to="/contact"
                      className="navBar__container__nav__li__button"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        ) : (
          <div className="toggleAnimationFalse"></div>
        )}
      </div>
    </section>
  )
}
