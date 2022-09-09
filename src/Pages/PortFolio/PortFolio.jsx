// styles
import './_portFolio.scss'

// components
import NavBar from '../../Components/NavBar/NavBar'
import Info from '../../Components/Info/Info'

export default function PortFolio() {
  return (
    <>
      <header></header>
      <main className="portFolioMain">
        <NavBar />
        <Info />
      </main>
      <footer></footer>
    </>
  )
}
