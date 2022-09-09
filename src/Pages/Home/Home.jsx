// styles
import './_home.scss'

// components
import NavBar from '../../Components/NavBar/NavBar'
import Info from '../../Components/Info/Info'

// init Page
export default function Home() {
  // render the function in dom
  return (
    <>
      <header></header>
      <main className="homeMain">
        <NavBar />
        <Info />
      </main>
      <footer></footer>
    </>
  )
}
