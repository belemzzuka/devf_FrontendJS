import React from 'react';
import useForm from '../hooks/useForm';
import './Signup.css';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Login() {
    const history = useHistory();
    const login = (datos) => {
        axios.post(`https://ecomerce-master.herokuapp.com/api/v1/login`, datos) //el post recibe la url y los datos que va a postear
        .then(response => {
            window.localStorage.setItem('token',response.data.token); //guarda los datos, incluso si cierras la pagina. En el logout se debe borrar el token
            //window.sessionStorage.setItem('token',response.data.token); //si cierras la pagina o la ventana, se pierde la info
            history.push('/');
            console.log(response.data); //imprime la respuesta del post
        }).catch((error) => {
            console.log(error)
        })
    }
    //Al useForm le enviamos la función que se va a ejecutar en el Submit
    //En este caso es la función que hará la petición para hacer login
    const { inputs, handleInput, handleSubmit } = useForm(login,{})

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="email">E-mail: </label><input type="email" id="email" name="email" placeholder="Pon tu email" onChange={handleInput} value={inputs.email}></input>
                <label for="password">Password: </label><input type="password" id="password" name="password" placeholder="Pon tu password" onChange={handleInput} value={inputs.password}></input>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
