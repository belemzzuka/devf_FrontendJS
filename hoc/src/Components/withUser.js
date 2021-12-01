import React, {useEffect, useState} from 'react';
import axios from 'axios';

//Contiene toda la logica del componente
const WithUser = (ComponentUser) => {
    const NewComponent = ({ userId, ...props }) => {
        const [ user, setUser ] = useState({});
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

        useEffect( ()=>{
            axios.get(url)
            .then( response => setUser(response.data) )
        },[])

        return <ComponentUser {...props} user={ user } />
    }

    return NewComponent;
}

export default WithUser;
