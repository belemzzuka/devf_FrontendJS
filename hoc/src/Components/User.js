import React, { useEffect, useState } from 'react';

export default function User( {user} ) {

    //Unicamente se muestra el render de la informacion
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
