import React from 'react';
import "./Home.css";
import ListUsers from '../../Components/ListUsers';
import DetailsUser from '../../Components/DetailsUser';
import { UserProvider } from '../../Context/UserContext';

export default function Home() {
    return (
        <UserProvider>
            <div className="home-container">
                <div className="home-container__izquierdo">
                    <h2>Lista de Usuarios</h2>
                    <ListUsers />
            </div>
            <div className="home-container__derecho">
                <h2>Detalle de Usuarios </h2>
                <DetailsUser />
            </div>
            </div>
        </UserProvider>
    )
}
