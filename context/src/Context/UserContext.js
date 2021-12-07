import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';

//Context nos ayuda a manejar los estados globales de React
//para compartir la misma informacion entre distintos componentes
//sin importar su nivel y jerarquia

//Paso 1. Crear el contexto. Crear la caja donde vamos a meter lo que necesitamos
const UserContext = React.createContext();

//Paso 2. Crear un provider del contexto.
function UserProvider(props) {
    const [listaUsuarios, setListaUsuarios] = useState([]); //lista d los usuarios de la API
    const [usuarioActual, setUsuarioActual] = useState({}); //el usuario actual para mostrar los detalles

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => {
            console.log(response.data);
            setListaUsuarios(response.data);
        })
        .catch((e) => {
            console.log(e);
        });
    },[]);

    //Paso 2a. Vamos a englobar todo lo que nos va a proveer. todo lo que vamos a necesitar acceder desde afuera (desde otros componentes)
    const value = {
        listaUsuarios,
        usuarioActual,
        setUsuarioActual,
    }

    return(
        <UserContext.Provider value={value} {...props} />
    )
    
}
// Paso 3. Crear eel consumidor dee nuestro contexto. Es la forma para acceder a los datos.
const useUserContext = () => {
    const context = useContext(UserContext)
    return context;
}

//Paso 4. Eexportar eel proveedor y el consumidor para que se puedan utilizar en los deemas componentes
export {
    UserProvider,
    useUserContext
}

//USO DEL CONTEXTO
//pASO 5. Ir al componeentee superior (en este caso HOME) y envolver a los componentes que haran uso del conteexto

//Paso 6. Consumir el contexto (En este caso en los componentes DeetailsUseere y ListUsers) con useUserContext que es nuestro consumidor

 