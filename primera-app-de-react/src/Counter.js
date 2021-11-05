import React from "react";
import './Counter.css';

//Declaramos nuestra clase que sera el nombre del componente
//Utilizar PascalCase para nombrar las clases. camelCase es asi
//Todos nuestros componentes deben heredar de React.Component
export default class Counter extends React.Component {
    constructor(props) {
        super(props); //Super manda a llamar el constructor de la clase padre. Clase padre es React.Component
        this.state = {
            count: props.initCount //initCount se recibe por parametro y es el valor inicial del contador
        }
        // el State se va a encargar de modificar el DOM
    }

    // todos los componentes deben tener un metodo RENDER
    render(){
        //debemos retornar codigo JSX
        return(
            <div className="counter-main">
                <h5>{this.state.count}</h5>
                <div className="counter-buttons">
                    <button onClick={()=>{ this.setState({count:this.state.count+1}) }}>Agregar</button>
                    <button onClick={()=>{ this.setState({count:this.state.count-1})}}>Disminuir</button>
                </div>
            </div>
        );
    }
}