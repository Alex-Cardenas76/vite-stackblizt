import {platosMocks} from '../data/platos.mock.js'
import {PlatoCard} from '../components/PlatoCard.jsx'

export function Home(){
    return(
        <>
            {platosMocks.map(plato =>
             <div key = {plato.id}>  
               <PlatoCard nombre = {plato.nombre} categoria ={plato.categoria} precio={plato.precio} 
               stock={plato.stock} disponible={plato.disponible} />
             </div>
            )}
        </>
    )
}
