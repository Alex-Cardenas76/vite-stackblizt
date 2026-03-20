// El componente tiene que mostrar nombre, categoria, precio, stock y estado

export function PlatoCard({nombre, categoria , precio , stock , estado}){
//  export function PlatoCard(props)

    return(
        <div>
            <h2>Nombre: {props.nombre}</h2>
            <h2>Categoria: {categoria}</h2>
            <h2>Precio: {precio}</h2>
            <h2>Stock: {stock}</h2>
            <h2>Estado: {estado ?  "disponible" :"no hay p"}</h2>
        </div>
    )
}