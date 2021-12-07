import './App.css';
import React, { useEffect,useState } from 'react';
import useForm from "./Hook/useForm";


function App() {

  /* Mala practica
  const [nombre,setNombre] = useState();
  const [apellido,setNombre] = useState();
  const [email,setNombre] = useState();
  */
  
  const [datos,setDatos] = useState({});

  useEffect( ()=>{
    setTimeout( ()=>{
      const miInfo = {
        nombre:"Belem",
        apellido:"Garrido",
        edad:36,
        genero:"H",
        email:"belem_@hotmail.com",
        password:"12345"
      }

      setDatos(miInfo);
    }, 1000)
  },[])

  console.log("Este es el valor de la API", datos);

  const sendData = (data) => {
    console.log("Esta es mi data final", data);
  }

  const { input,handleInputChange,handleSubmit } = useForm(sendData,datos);

  return (
    <div className="App">
      <form onSubmit={ handleSubmit }>
        <input type="text" name="nombre" placeholder="Escribe tu nombre" onChange={handleInputChange} value={input.nombre}/>
        <input type="text" name="apellido" placeholder="Escribe tu apellido" onChange={handleInputChange} value={input.apellido}/>
        <input type="password" name="password" placeholder="Escribe tu password" onChange={handleInputChange} value={input.password}/>
        <input type="number" name="edad" placeholder="Escribe tu edad" onChange={handleInputChange} value={input.edad}/>
        <input type="email" name="email" placeholder="Escribe tu email" onChange={handleInputChange} value={input.email}/>

        <select name="genero" onChange={handleInputChange} value={input.genero}>
          <option value="">Elige un género</option>
          <option value="F">Femenino</option>
          <option value="M">Masculino</option>
        </select>

        <button type="Submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
