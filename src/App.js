// dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom' // router dependencies

// provider
import { NavContextProvider } from './Context/NavContext' // toggle nav panel
import { ConfirmContextProvider } from './Context/ConfirmationContext' // confirm modal after form submit

// styles
import GlobalStyle from './Utils/Styles/GlobalStyle' // reset css

// pages
import Home from './Pages/Home/Home'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <NavContextProvider>
          <ConfirmContextProvider>
            <Routes>
              <Route path="/*" element={<Home />} />
            </Routes>
          </ConfirmContextProvider>
        </NavContextProvider>
      </BrowserRouter>
    </>
  )
}
