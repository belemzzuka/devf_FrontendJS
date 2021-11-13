import React from 'react'

export default function ListContactos({ lista }) {
    //Recibimos una lista de ListContactos
    const renderizarContactos = () => {
        return lista.map(item => {
                return <p key={item.nombre}> {item.nombre} - {item.telefono} </p>
            }
        ) //contacto es cada element de la lista, en cada vuelta va a sacar un elemento contacto de la lista            
    }

    return (
        <>
            <h1>Esta es mi lista de contactos: </h1>
            {renderizarContactos()}
        </>
    );
}
