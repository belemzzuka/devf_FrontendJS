import React, { useState, useEffect } from 'react';

function Counter({apellido, edad}){
    /*Aqui va la logica del contador*/
    //useState nos va a devolver un arreglo con 2 elementos. Destructurando el useState
    //Posicion 0: El valor del estado (variable)
    //Posicion 1: La funcion para actualizar mi estado
    //useState() recibe el valor inicial de la variable

    const [counter,setCounter] = useState(0); //inicializarlo en 0
    const [name, setName] = useState("Belem");

    useEffect(()=>{
        console.log("Hola desde useEffect, siempre");
    }); //si no le paso nada, se va a ejecutar cada vez que reciba un cambio

    useEffect(()=>{
        console.log("Hola solo desde inicio el useEffect");
    },[]); //corchetes vacio, solo se ejecuta al inicio

    useEffect(()=>{
        console.log("Hola, sólo se va a ejecutar cuando el contador se actualice");
    },[counter]); //Se ejecuta cuando se actualiza la variable counter

    useEffect(()=>{
        console.log("Hola, sólo se va a ejecutar cuando el nombre se actualice");
    },[name]); //Se ejecuta cuando se actualiza la variable name


    //Retornar lo que se vera en pantalla, lo que se renderiza
    return(
        <div className="counter"> {/*Puedes reemplazar la etiqueta div con React.Fragment o <>*/}
            <h1>Yo soy el Componente Counter</h1>
            <h2>Hola: {name} {apellido}. Tienes {edad} años</h2>
            <p>{counter}</p>
            <button onClick={() => {setCounter(counter + 1)}}> Sumar 1 </button>
            <button onClick={() => {setCounter(counter - 1)}}> Restar 1 </button>
        </div>
    )
}


export default Counter;