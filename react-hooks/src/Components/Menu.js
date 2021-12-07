import React, { useRef } from 'react'

export default function Menu() {

    let refMenu = useRef();
    console.log(refMenu);
    let refMenuLista = useRef();
    const ocultarMenu = () => {
        refMenuLista.current.style.display = "none";
    };

    return (
    <>
        <div>
            <button ref={refMenu} onClick={ocultarMenu}> CERRAR MENU </button>
            <ul ref={refMenuLista}>  
                <li>Hola</li>
                <li>Estamos</li>
                <li>Aprendiendo</li>
                <li>UseRef</li>
            </ul>
        </div>
    </>
    )
}
