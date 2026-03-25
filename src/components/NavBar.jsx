import { PropTypes } from "prop-types"

export function NavBar({ NombreRestaurante = "Restauran elegan T" }) {
    return (
        <nav>
            <div><h2>{NombreRestaurante}</h2></div>
            <p>Carta</p>
            <p>Mesas</p>
            <p>Comandas</p>
        </nav>
    )
}

NavBar.propTypes = {
    NombreRestaurante: PropTypes.string
}