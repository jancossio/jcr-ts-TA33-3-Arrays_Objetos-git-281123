let arrayEjemplo = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

function length(array){
    console.log("La longitud total del array es: "+array.length);
}

function randomElement(array){
    let random = Math.floor(Math.random()*array.length);
    console.log("El elemento de la posicion "+random+" es: "+array[random]);
}

length(arrayEjemplo);
randomElement(arrayEjemplo);