// dependencies
import { Link } from 'react-scroll' // https://www.npmjs.com/package/react-scroll
import { VscGithub } from 'react-icons/vsc'
import { IoLogoLinkedin } from 'react-icons/io'
import { DiGitBranch } from 'react-icons/di'
import { BiArrowFromBottom } from 'react-icons/bi'

// context
import { IconContext } from 'react-icons' // https://github.com/react-icons/react-icons

// styles
import './_footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="footer__nav__ul">
          <li className="footer__nav__ul__li">
            <a
              className="footer__nav__ul__li__link"
              href="https://github.com/Nilyss"
            >
              <IconContext.Provider value={{ className: 'react-icons' }}>
                <>
                  <VscGithub />
                </>
              </IconContext.Provider>
              GitHub
            </a>
          </li>
          <li className="footer__nav__ul__li">
            <a
              className="footer__nav__ul__li__link"
              href="https://www.linkedin.com/in/nicolas-decressac-2a59a4234/"
            >
              <IconContext.Provider value={{ className: 'react-icons' }}>
                <>
                  <IoLogoLinkedin />
                </>
              </IconContext.Provider>
              LinkedIn
            </a>
          </li>
          <li className="footer__nav__ul__li">
            <a
              className="footer__nav__ul__li__link"
              href="https://github.com/Nilyss/personal_website"
            >
              <IconContext.Provider value={{ className: 'react-icons' }}>
                <>
                  <DiGitBranch />
                </>
              </IconContext.Provider>
              Code source du site web
            </a>
          </li>
          <li className="footer__nav__ul__li">
            <Link
              to="profile"
              spy={true}
              smooth={true}
              duration={500}
              className="footer__nav__ul__li__link"
            >
              <IconContext.Provider value={{ className: 'react-icons' }}>
                <>
                  <BiArrowFromBottom />
                </>
              </IconContext.Provider>
              Retour en haut de page
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
