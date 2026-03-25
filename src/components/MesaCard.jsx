export function MesaCard({ numero, capacidad, estado, comensales }) {
    return (
        <div>
            <h2>Mesa {numero}</h2>
            <p>Capacidad: {capacidad}</p>
            <p>Estado: {estado}</p>
            <p>Comensales: {comensales}</p>
        </div>
    )
}

//MesaCard tiene la prop estado que puede ser "libre", "ocupada" o "reservada". 
// ¿Cómo sabes desde afuera qué valores acepta? 
// ¿Para qué sirve PropTypes en este caso? Agréguenlo al componente.
MesaCard.propTypes = {
    numero: propTypes.number.isRequired,
    capacidad: propTypes.number.isRequired,
    estado: propTypes.oneOf(["libre", "ocupada", "reservada"]).isRequired,
    comensales: propTypes.number.isRequired
}