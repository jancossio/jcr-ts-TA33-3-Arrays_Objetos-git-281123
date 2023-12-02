class Receta{
    constructor(nombre, tiempoPreparacion, ingredientes){
        this.nombre = nombre;
        this.tiempoPreparacion = tiempoPreparacion;
        this.ingredientes = ingredientes;
    }
}

var recetaTortilla = new Receta("Tortilla de patatas",7,["Patatas","Huevos","Aceite de oliva", "Cebolla", "Sal"]);
var recetaEspaguetis = new Receta("Espagueti a la mantequilla",20,["Pasta","Mantequilla","Perejil", "Sal", "Aceite de oliva", "Queso parmesano"]);
var recetaBizcocho = new Receta("Bizcocho de yogur",50,["Yogur","Harina","Azucar", "Aceite", "Huevos", "Levadura"]);
var recetas = [recetaTortilla,recetaEspaguetis,recetaBizcocho];


function listarReceta(receta){
    console.log("Receta: ",receta.nombre);
    console.log("Tiempo de cocinado: "+receta.tiempoPreparacion+"");
    console.log("Ingredientes: ");

    receta.ingredientes.forEach(ingrediente => {
        console.log(" - ",ingrediente);
    });
}


for(let i=0; i<recetas.length; i++){
    listarReceta(recetas[i]);
    console.log("\n");
}