import React, { useState,useEffect } from 'react';
import useForm from '../Hooks/useForm';
import './Form.css';

export default function Form() {
    /*ESTO ES MALA PRACTICA
    const [nombre,setNombre] = useState("");
    const [nombre,setNombre] = useState("");
    const [nombre,setNombre] = useState("");
    */

    const [datos,setDatos] = useState({});

    /* Esto se borra porque lo va a hacer el hook useForm.js
    const handleInput = ()=>{};
    const handleSubmit = (event)=>{
        event.preventDefault(); //Evita que se recargue la pagina al enviar el formulario. Si no estuviera, se reiniciaria la pagina y no se imprime el console log de abajo
        console.log(event)
    }; */
        useEffect(()=>{ //USAMOS USEEFFECT PARA SIMULAR LAS LLAMADAS A LA API
            setTimeout(()=>{
                const info = {
                    "nombre":'Pipino',
                    "apellido":'Renato',
                    "edad":4,
                    "genero":'Masculino',
                    "email": 'pipino@home.com',
                    "password":'123456'
                };
                setDatos(info);
            }, 1000);
        }, []) 
   console.log(datos);

    //Funcion que emula enviar datos a la API
    const sendData = (datos) => {
        // Toda la logica de hacer un Post
        console.log("Datos enviados" + JSON.stringify(datos))
    }

    const {inputs, handleInput, handleSubmit} = useForm(sendData, datos); //El custom hook va a regresar input, handleInput y handleSubmit. va a recibir la funcion de lo que hara despues de darle click al Submit y los datos del formulario


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="nombre">Nombre: </label><input type="text" name="nombre" placeholder="Pon tu nombre" onChange={handleInput} value={inputs.nombre}></input>
                <label for="nombre">Apellido: </label><input type="text" name="apellido" placeholder="Pon tu apellido" onChange={handleInput} value={inputs.apellido}></input>
                <label for="nombre">Edad: </label><input type="number" name="edad" placeholder="Pon tu edad" onChange={handleInput} value={inputs.edad}></input>
                <label for="nombre">Genero: </label><input type="text" name="genero" placeholder="Pon tu genero" onChange={handleInput} value={inputs.genero}></input>
                <label for="nombre">E-mail: </label><input type="email" name="email" placeholder="Pon tu email" onChange={handleInput} value={inputs.email}></input>
                <label for="nombre">Password: </label><input type="password" name="password" placeholder="Pon tu password" onChange={handleInput} value={inputs.password}></input>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
