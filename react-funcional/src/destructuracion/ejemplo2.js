const animales = {
    nombre: "Pipino",
    edad: 5,
    apellido: "Garrido",
};

function nombreAnimal(objeto){
    console.log(objeto.nombre);
}

nombreAnimal(animales);

function nombreDestructuracion({ nombre }){
    console.log("Esto es destructurar", nombre);
}

nombreDestructuracion(animales);