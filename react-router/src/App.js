import { Navbar, Nav, Container, Card, Button} from "react-bootstrap";
import { Switch, Route, Link, useLocation, useParams, useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="primary" expand="lg">
          <Container>
              <Navbar.Brand as={Link} to="/">
                HOME
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to="/portafolio">
                  <Nav.Link>
                    Portafolio
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contacto"> 
                {/* LinkContainer es para poder seguir usando el estilo de bootstrap de NavLink y no generar dos etiquetas a */}
                  <Nav.Link>
                    Contacto
                  </Nav.Link>
                </LinkContainer>
                <Nav.Link as={Link} to="/contacto"> Contacto2 </Nav.Link> {/* Otra opcion para agregar links con bootstrap */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/portafolio">
          <Portafolio />
        </Route>
        <Route exact path="/contacto">
          <Contacto />
        </Route>
        <Route path='/portafolio/:pid'>
          <PortafolioDetalle />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </div>
  );
}

function Home(){
  return(
    <h1>HOME</h1>
  );
}

function Portafolio(){
  return(
    <React.Fragment>
      <h1>Portafolio</h1>
      <Container>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Pinterest</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur
          </Card.Text>
          <Button as={Link} to='/portafolio/1' variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>ATM</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur
          </Card.Text>
          <Button as={Link} to='/portafolio/2' variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Pokedex</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur
          </Card.Text>
          <Button as={Link} to='/portafolio/3' variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </Container>
    </React.Fragment>
  );
}

function PortafolioDetalle(){
  let {pid} = useParams();
  let history = useHistory();
  {/* Se crea un array de objetos para mostrar esa informacion cuando le das click a la tarjeta. El pid de arriba es el parametro que va a agregar a la URL y el useParams es un hook que se importa de react-router-dom para traerme el valor de la URL */}
  const proyectos = [
    { id: 1, nombre:"Pinterest", desc:"description" }, 
    { id: 2, nombre:"ATM", desc:"description" },
    { id: 3, nombre:"Pokedex", desc:"description" }
  ];

  return(
    <React.Fragment>
      <h1>Detalle Portafolio</h1>
      <ul>
        <li> ID: {proyectos[pid-1].id} </li>
        <li> Nombre: {proyectos[pid-1].nombre} </li>
        <li> Description: {proyectos[pid-1].desc} </li>
      </ul>

      <Button variant="primary" onClick={ ()=>{
        console.log(history);
        //history.push('/portafolio');
        history.goBack();
      }}>
        Regresar a Portafolio
      </Button>
    </React.Fragment>
  );
}


function Contacto(){
  return(
    <h1>Contacto</h1>
  );
}

function Error404(){
  let location = useLocation();
  console.log(location);
  return(
    <React.Fragment>
      <h1> Error 404</h1>
      <p> No se Encontró la ruta: { location.pathname } </p>
    </React.Fragment>
  );
}


export default App;
