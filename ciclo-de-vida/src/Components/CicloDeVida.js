import React from 'react';
import Contador from './Contador';

export default class CicloDeVida extends React.Component {

    constructor(props) {
        super(props);
        console.log("0 - Console desde el constructor");
        this.state={
            contador:0,
            mostrarContador: false,
            intervalo: null,
        };
    }

    componentWillMount() {
        //ya no se usando
        console.log("1 - Antes del render");
    }

    componentDidMount(){
        console.log("3 - Despues de que se renderice");
    }

    UNSAFE_componentWillUpdate(){
        console.log("Se va a actualizar");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("El estado se actualizó");
        console.log("Estado Previo", prevState); //te imprime el estado previo 
        console.log("Estado actual", this.state); //te imprime el estado actual
    }

    iniciarContador = () => {
        this.state.intervalo = setInterval(() =>{
            this.setState({
                contador: this.state.contador + 1,
                mostrarContador: true,
            });
            //this.setState({contador:this.state.contador + 1});
        },1500);
    };

    detenerContador = () => {
        this.setState({ mostrarContador: false });
        clearInterval(this.state.intervalo);
    };

    render(){
        console.log("2 - El componente se dibuja en el DOM");
        return(
        <div>
            <h1>Ciclo de Vida</h1>
            {this.state.mostrarContador ? (
                <Contador contador={this.state.contador} />
            ) : null}
            {/*{this.state.bandera && <Contador />}*/}
            <button onClick={this.iniciarContador}> Iniciar Contador </button>
            <button onClick={this.detenerContador}>Detener Contador</button>
        </div>
        );
    }

}