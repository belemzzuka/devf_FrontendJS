// Este archivo se usará como un HOC (Higher Order Component) para proteger un componente
// Es un componente de orden superior que nos ayuda a compartir lógica
// Reutilizar la lógica de un componente, puede aplicarse en cualquier

import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

export default function withProtection(Component){ // los HOC reciben componentes
    //Verificar que tengamos un token.
    // Si no lo tenemos, no mostramos el componente.
    const ProtectedComponent = (props) => {
        const [token] = useState(window.localStorage.getItem('token')); //con getItem obtenemos de localStorage
        return token ? <Component {...props} /> : <Redirect to="/login" />
    }
    return ProtectedComponent;
}