import logo from './logo.svg'; //Importando el logo
import './App.css'; //Importando el archivo css
import Counter from './Counter';

function App() {
  return ( //Esta funcion regresa cierto codigo de JSX.
    <div className="App"> {/*className sustituye class en HTML */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> {/* la variable logo la está tomando de lo que importó arriba, el logo svg */}
        <p>
          HOLA MUNDO
        </p>
        <Counter initCount={ 10 }/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
