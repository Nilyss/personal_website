//  dependencies
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

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
                    <button
                      onClick={() => {
                        navigate('/', { replace: true })
                      }}
                      className="navBar__container__nav__li__button"
                    >
                      Accueil
                    </button>
                  </li>
                  <li className="navBar__container__nav__ul__li">
                    <button
                      onClick={() => {
                        navigate('/services', { replace: true })
                      }}
                      className="navBar__container__nav__li__button"
                    >
                      Services
                    </button>
                  </li>
                  <li className="navBar__container__nav__ul__li">
                    <button
                      onClick={() => {
                        navigate('/portfolio', { replace: true })
                      }}
                      className="navBar__container__nav__li__button"
                    >
                      Porte folio
                    </button>
                  </li>
                  <li className="navBar__container__nav__ul__li">
                    <button
                      onClick={() => {
                        navigate('/education', { replace: true })
                      }}
                      className="navBar__container__nav__li__button"
                    >
                      Parcours
                    </button>
                  </li>
                  <li className="navBar__container__nav__ul__li">
                    <button
                      onClick={() => {
                        navigate('/home', { replace: true })
                      }}
                      className="navBar__container__nav__li__button"
                    >
                      Contact
                    </button>
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
