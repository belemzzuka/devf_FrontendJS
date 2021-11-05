import React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: "" // la busqueda a realizar, está vacia porque no hemos buscado nada
        }
    }

    render(){

        return (
            <div className="search-bar">
                <input className="search-input" 
                placeholder="Qué deseas buscar?" 
                name="search" 
                onChange={ (event) => this.setState({ search: event.target.value})} />

                <button className="search-button" type="button" onClick={ (event) => this.props.emitSearch(this.state.search) }> Buscar</button>
            </div>
        );
    }
}