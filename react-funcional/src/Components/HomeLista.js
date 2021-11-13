import React, {useState, useEffect} from 'react';
import ListContactos from './ListaContactos';



export default function HomeLista() {
    const [tipodeContactos, setTipodecontactos] = useState("Bloqueados");
    const [contactos, setContactos] = useState([]); //Siempre se van a declara adentro de las funciones

    useEffect(() => {
        // llamas a una api
        // recibes datos de vuelta despues de 2 seg
        setTimeout(()=>{
            setContactos([
                {nombre: "Belem", telefono: "22222"},
                {nombre: "Sofia", telefono: "33333"},
                {nombre: "Pipino", telefono: "44444"},
            ])
        },2000)
    },[]);

    return (
        <div>
            <ListContactos lista={contactos} /> {/* se le pasa contactos porque es la constante que tenemos declarada arriba*/}
        </div>
    )
}
