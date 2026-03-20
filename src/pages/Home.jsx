import platosMocks from '../data/platos.mock.js'
import {PlatoCard} from '../components/PlatoCard.jsx'

export function Home(){
    return(
        <div>
            {platosMocks.map(plato =>
             <ul key = {plato.id}>  
               <li><PlatoCard nombre = {plato.nombre} categoria ={plato.categoria} precio={plato.precio} 
               stock={plato.stock} disponible={plato.disponible} /></li>
             </ul>
            )}
        </div>
    )
}
