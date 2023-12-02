let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];

javascript1.splice(javascript1.indexOf("DOM"), 1, "Objetos");
console.log("Array tras intercambiar DOM por Objetos: ",javascript1);

javascript1.splice(javascript1.indexOf("Arrays"), 1,"ArraysDificiles");
console.log("Array tras intercambiar Arrays por ArraysDificiles: ",javascript1);

let copiArray =  javascript1.slice(-2);
console.log("Array tras eliminar los ultimos 2 componentes: "+copiArray);

let index = javascript1.indexOf("Funciones");
console.log("El indice de funciones en el array es: "+index);