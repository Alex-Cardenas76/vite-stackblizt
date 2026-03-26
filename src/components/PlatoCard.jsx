// El componente tiene que mostrar nombre, categoria, precio, stock y estado

export function PlatoCard({ nombre, categoria, precio, stock, disponible }) {
    //  export function PlatoCard(props)

    return (
        <ul>
            <li>Nombre: {nombre}</li>
            <li>Categoria: {categoria}</li>
            <li>Precio: {precio}</li>
            <li>Stock: {stock}</li>
            <li>Disponible: {disponible ? "disponible" : "no hay p"}</li>
        </ul>
    )
}