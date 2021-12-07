import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const UserContext = React.createContext(); //necesita un proveedor y un consumidor

//Proveedor
function UserProvider(props){
    const [usuarioActual, setUsuarioActual] = useState();
    const token = window.localStorage.getItem('token');

    useEffect(() => {
        if(token){
            const config = {
                headers:{
                    Authorization:`JWT ${token}`
                }
            }
            axios.get(`https://ecomerce-master.herokuapp.com/api/v1/user/me`, config)
            .then((response)=>{
                setUsuarioActual(response.data)
            }).catch((error) => {
                console.log(error)
            })
        }
    },[token])

    const value={
        usuarioActual, 
        setUsuarioActual
    }

    return <UserContext.Provider value={value} {...props} />
}

//Consumidor
const useUserContext = () => {
    const context = useContext(UserContext)
    return context;
}

export{
    UserProvider,
    useUserContext
}