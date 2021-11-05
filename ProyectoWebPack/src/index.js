import saludo from './greeting';
import "./style.scss"; //Mandar a llamar los estilos aquí en el JS. Lo correcto es hacerlo ahi para que no genere un archivo SCSS extra en dist folder
import "./main.css";
//import img from "./perrito.png" //Importar la imagen para que la cree

//img.src = img;

console.log(saludo("Clase Gen10"));