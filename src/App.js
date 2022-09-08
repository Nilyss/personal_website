// dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom' // router dependencies

// provider
import { NavContextProvider } from './Context/NavContext' // toggle nav panel

// styles
import GlobalStyle from './Utils/Styles/GlobalStyle' // reset css

// pages
import Home from './Pages/Home/Home'
import NotExistingPage from './Pages/NotExistingPage/NotExistingPage'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <NavContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotExistingPage />} />
          </Routes>
        </NavContextProvider>
      </BrowserRouter>
    </>
  )
}
