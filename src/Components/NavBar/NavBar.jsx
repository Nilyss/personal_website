//  dependencies
import { Link } from 'react-scroll'

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
    <section
      className={`sectionNavBar ${
        navState.showNav ? 'toggleTrue' : 'toggleFalse'
      }`}
    >
      <div className="modal">
        <ToggleNavBarButton />
        {navState.showNav ? (
          <div className="toggleAnimationTrue">
            <div className="navBar__container">
              <nav className="navBar__container__nav">
                <ul className="navBar__container__nav__ul">
                  <li className="navBar__container__nav__ul__li">
                    <Link
                      to="profile"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="navBar__container__nav__li__button"
                    >
                      Accueil
                    </Link>
                  </li>
                  <li className="navBar__container__nav__ul__li">
                    <Link
                      to="services"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="navBar__container__nav__li__button"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="navBar__container__nav__ul__li">
                    <Link
                      to="portFolio"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="navBar__container__nav__li__button"
                    >
                      Porte folio
                    </Link>
                  </li>
                  <li className="navBar__container__nav__ul__li">
                    <Link
                      to="education"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="navBar__container__nav__li__button"
                    >
                      Parcours
                    </Link>
                  </li>
                  <li className="navBar__container__nav__ul__li">
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      duration={500}
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
          <div className="toggleAnimationFalse">
            <div className="navBar__container">
              <nav className="navBar__container__nav">
                <ul className="navBar__container__nav__ul">
                  <li className="navBar__container__nav__ul__li">
                    <button className="navBar__container__nav__li__button">
                      Accueil
                    </button>
                  </li>
                  <li className="navBar__container__nav__ul__li">
                    <button className="navBar__container__nav__li__button">
                      Services
                    </button>
                  </li>
                  <li className="navBar__container__nav__ul__li">
                    <button className="navBar__container__nav__li__button">
                      Porte folio
                    </button>
                  </li>
                  <li className="navBar__container__nav__ul__li">
                    <button className="navBar__container__nav__li__button">
                      Parcours
                    </button>
                  </li>
                  <li className="navBar__container__nav__ul__li">
                    <button className="navBar__container__nav__li__button">
                      Contact
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
