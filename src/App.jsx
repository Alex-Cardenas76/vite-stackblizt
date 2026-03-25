import { Home } from './pages/Home.jsx'
import { MesasPage } from './pages/MesasPage.jsx'
import { NavBar } from './components/NavBar.jsx'

function App() {
  return (
    <>
      <div>Restaurante</div>
      <NavBar NombreRestaurante="Don Pollo" />
      <hr />
      <Home />
      <hr />
      <MesasPage />

    </>
  )
}
export default App
