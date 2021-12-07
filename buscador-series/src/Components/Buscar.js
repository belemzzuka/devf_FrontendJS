import React, {useState,useEffect} from 'react';
import axios from 'axios';


export default function Buscar() {

    const [datosApi, setDatosApi] = useState({});
    const [valorInput, setValorInput] = useState("girls");
    const [serie, setSerie] = useState("girls");
    const url = 
     `https://api.tvmaze.com/search/shows?q=${serie}`;

     useEffect(()=>{
        axios.get(url)
        .then((res) => setDatosApi(res.data)); //esta es la funcion del estado datosApi
     },[url]);

    const inputHandler = (event) => {
        setValorInput(event.target.value);
        console.log(valorInput);
    }

    const submitHandler = () => {
        setSerie(valorInput);
        console.log(datosApi);
    }
    
    return (
        <div>
            <h1>TV Maze App</h1>
            <div>
                <div>Enter a Serie: </div>
                <div><input type="text" value={valorInput} onChange={inputHandler}></input></div>
                <div><button onClick={submitHandler}>Search</button></div>
            </div>
        </div>
    )
}
