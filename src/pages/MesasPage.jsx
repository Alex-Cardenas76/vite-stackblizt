import { mesasMock } from "../data/datasMesaMock.js";
import { MesaCard } from "../components/MesaCard.jsx";

export function MesasPage() {
    return (
        <>
            {mesasMock.map(mesa => (
                <div key={mesa.id}>
                    <MesaCard numero={mesa.numero} capacidad={mesa.capacidad} estado={mesa.estado}
                        comensales={mesa.comensales} />
                </div>
            ))}
        </>
    )
}