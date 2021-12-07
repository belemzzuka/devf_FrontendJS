import React from 'react';
import {useUserContext} from "../../Context/UserContext"

export default function DetailsUser() {
    const context = useUserContext();
    return (
        <div>
            <p>Componente DetailsUser</p>
            <p>{context.usuarioActual.name}</p>
            <p>{context.usuarioActual.email}</p>
            <p>{context.usuarioActual.phone}</p>
        </div>
    )
}
