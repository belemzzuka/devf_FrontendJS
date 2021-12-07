import React, {useState} from 'react';
import useForm from '../Hooks/useForm';

export default function Formulario2() {

    const [datos, setDatos] = useState({
        pais:"Mexico",
        color: "azul"
    })

    const saludar = () => {
        console.log("Mañana ha kahoot");
    }

    const {inputs, handleInput, handleSubmit} = useForm(saludar,datos);
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="pais">País: </label><input type="text" name="pais" placeholder="Pon tu pais" onChange={handleInput} value={inputs.pais}></input>
                <label for="color">Color favorito: </label><input type="text" name="color" placeholder="Pon tu color" onChange={handleInput} value={inputs.color}></input>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
