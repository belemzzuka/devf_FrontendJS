import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Clima.css';

export default function Clima(){
    //hacer un estado para guardar el valor del useEffect, sino no se puede imprimir
    const [datosApi, setDatosApi] = useState({}); //Es useState se guarda con valor inicial del tipo de dato que estamos recibiendo, en este caso "data" es un objeto
    const [valorInput, setValorInput] = useState("San Francisco");
    const [ciudad, setCiudad] = useState("San Francisco");
    const apiKey = process.env.REACT_APP_WEATHER_KEY; //traer la apiKey del archivo .env
    const url = 
     `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;

     //Se ejecuta cuando URL se actualiza. Dentro de los corchetes está lo que está escuchando
     useEffect(()=>{
        axios.get(url)
        .then((res) => setDatosApi(res.data)); //esta es la funcion del estado datosApi
     },[url]);

    //Funcion para actualizar el estado del Input
    const inputHandler = (event) => {
        setValorInput(event.target.value);
        console.log(valorInput);
    }

    //Pongo el valor final de mi Input en el estado de "ciudad"
    //actualizara la URL por lo tanto se vuelve a ejecutar el useEffect
    const submitHandler = () => {
        setCiudad(valorInput);
    }

    return (
        <div className="climaRequests">
            <h1>React Weather App</h1>
            <div className="div__datos">
                <div>Enter location: </div>
                <div><input type="text" value={valorInput} onChange={inputHandler}></input></div>
                <div><button onClick={submitHandler}>Search</button></div>
            </div>
            <div className="climaOutput">
                <img src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" alt="Weather"></img>
                {datosApi.main ? <h2>Temp: {datosApi.main.temp}ºC</h2> : <h2>Cargando ...</h2>} {/* La sintaxis de esto es la condicion ? lo verdadero : lo falso */}
                <h2>{datosApi.name}</h2>
            </div>
        </div>
    )
}