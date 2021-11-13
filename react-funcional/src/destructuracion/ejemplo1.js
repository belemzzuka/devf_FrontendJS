const arreglo = ["alumno","sensei"];

const sensei = arreglo[1];
console.log(sensei); //imprimirlo de la manera normal

//imprimirlo de manera destructurada
const [variable1,variable2] = arreglo;
console.log(variable2);

// const [variable,setVariable] = useState("valor"); //ese useState nos va a regresar variable y setVariable