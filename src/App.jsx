import { Home } from './pages/Home.jsx'
import { MesasPage } from './pages/MesasPage.jsx'
import { NavBar } from './components/NavBar.jsx'

function App() {
  return (
    <>
      <div>Restaurante</div>
      <NavBar />
      <hr />
      <Home />
      <hr />
      <MesasPage />

    </>
  )
}
export default App
