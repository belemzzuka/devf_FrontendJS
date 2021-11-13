import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Clima(){
    const apiKey = process.env.REACT_APP_WEATHER_KEY; //traer la apiKey del archivo .env
    const url = 
     `https://api.openweathermap.org/data/2.5/weather?q=veracruz&appid=${apiKey}&units=metric`;

     //Se ejecuta solo en el primer render
     useEffect(()=>{
        axios.get(url).then((res) => console.log(res.data));
     },[]);

    return (
        <div>
            <h2>La app del Clima</h2>
            <input type="text" placeholder="Ingresa tu ciudad aquí"></input>
            <button>Buscar</button>
        </div>
    )
}