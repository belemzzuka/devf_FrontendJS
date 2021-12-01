import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function User() {
    const [ user, setUser ] = useState({});
    const url = `https://jsonplaceholder.typicode.com/users/3`;

    useEffect( ()=>{
        axios.get(url)
        .then( response => setUser(response.data) )
    },[])

    return (
        <div>
            <h2>
                {user.name} <br/>
                {user.username} <br/>
                {user.phone} <br/>
                {user.website} <br/>
            </h2>
            <span>
                {user.email}
            </span>
        </div>
    )
}
