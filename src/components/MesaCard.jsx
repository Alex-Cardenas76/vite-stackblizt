import PropTypes from "prop-types"

export function MesaCard({ numero, capacidad, estado, comensales }) {
    return (
        <div>
            <h2>Mesa {numero}</h2>
            <p>Capacidad: {capacidad}</p>
            <p style={{color: estado === "libre" ? "green" :
                 estado === "ocupada" ? "red" : "orange"}}>Estado: {estado}</p>
            <p>Comensales: {comensales}</p>
        </div>
    )
}

//MesaCard tiene la prop estado que puede ser "libre", "ocupada" o "reservada". 
// ¿Cómo sabes desde afuera qué valores acepta? 
// ¿Para qué sirve PropTypes en este caso? Agréguenlo al componente.
MesaCard.propTypes = {
    numero: PropTypes.number.isRequired,
    capacidad: PropTypes.number.isRequired,
    estado: PropTypes.oneOf(["libre", "ocupada", "reservada"]).isRequired,
    comensales: PropTypes.number.isRequired
}