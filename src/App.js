// dependencies
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// pages
import Home from './Pages/Home/Home'
import NotExistingPage from './Pages/NotExistingPage/NotExistingPage'

export default function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotExistingPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}