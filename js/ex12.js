var gente = [
    persona1 = {nombre:"Alberto", apellidos:"Torres Fuentes", edad:19},
    persona2 = {nombre:"Laura", apellidos:"Luengo Rubio", edad:22},
    persona3 = {nombre:"Fernando", apellidos:"Perez Lopez", edad:20}
];

function propiedadObjeto(objetos, valor){
    let tmp = '';
    for(let i=0; i<objetos.length; i++){
        console.log(objetos[i].nombre);
        console.log(objetos[i].apellidos);
        console.log("\n");
    }
}

propiedadObjeto(gente);