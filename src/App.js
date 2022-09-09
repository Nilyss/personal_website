// dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom' // router dependencies

// provider
import { NavContextProvider } from './Context/NavContext' // toggle nav panel

// styles
import GlobalStyle from './Utils/Styles/GlobalStyle' // reset css

// pages
import Home from './Pages/Home/Home'
import Services from './Pages/Services/Services'
import PortFolio from './Pages/PortFolio/PortFolio'
import Education from './Pages/Education/Education'
import Contact from './Pages/Contact/Contact'
import NotExistingPage from './Pages/NotExistingPage/NotExistingPage'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <NavContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<PortFolio />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotExistingPage />} />
          </Routes>
        </NavContextProvider>
      </BrowserRouter>
    </>
  )
}
