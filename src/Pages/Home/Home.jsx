// styles
import './_home.scss'

// components
import NavBar from '../../Components/NavBar/NavBar'
import Info from '../../Components/Info/Info'
import Description from '../../Components/Description/Description'

// init Page
export default function Home() {
  // render the function in dom
  return (
    <>
      <header></header>
      <main className="homeMain">
        <NavBar />
        <Info />
        <Description />
      </main>
      <footer></footer>
    </>
  )
}
