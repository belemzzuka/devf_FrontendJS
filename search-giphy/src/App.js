import React from 'react';
import './App.css';

import axios from 'axios';

import SearchBar from './Components/SearchBar';
import ImageCard from './Components/ImageCard';

class App extends React.Component {  //hicimos una clase funcional porque vamos a usar estados

  state ={
    results:[] //Aqui guardamos los resultados y lo inicializamos vacio
  }

  search = async (searchWord) => {
    const apiKey = "GDZloz3WQC0K0riReG5yhK23xVPuSm2E";
    
    //PROMESA
    /*
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchWord}`)
    .then(( response ) => { // si la promesa se cumple
      console.log(response.data);
      console.log(response.data.data)

      if(response.data.meta.status === 200)
        this.setState({results: response.data.data})
    }) 

    .catch((err)=> console.log(err) ) // si la promesa no se cumple */

    // ASYNC - AWAIT : bloquea el flujo de la app hasta que axios termina la peticion
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchWord}`);
    console.log(response);

    if(response.data.meta.status === 200)
        this.setState({results: response.data.data})


  }

  render(){
    return (
      <div className="App">
        <SearchBar emitSearch={this.search} />
        {
          this.state.results.map((item,index) => <ImageCard key={index} url={item.images.fixed_height.url} />) //para que cada una de las imagenes renderizadas tenga un ID unico y el navegador no bloquee su renderizado
        }
      </div>
    );
  }
}

export default App;
