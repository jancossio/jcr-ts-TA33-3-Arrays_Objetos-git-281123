var recetas = [
    recetaTortilla = {nombre:"Tortilla de patatas",
                    tiempoPreparacion: 7,
                    ingredientes:["Patatas","Huevos","Aceite de oliva", "Cebolla", "Sal"]
                },
    recetaEspaguetis = {nombre:"Espagueti a la mantequilla",
                    tiempoPreparacion: 20,
                    ingredientes:["Pasta","Mantequilla","Perejil", "Sal", "Aceite de oliva", "Queso parmesano"]
                },
    recetaBizcocho = {nombre:"Bizcocho de yogur",
                    tiempoPreparacion: 50,
                    ingredientes:["Yogur","Harina","Azucar", "Aceite", "Huevos", "Levadura"]
                }
];


function listarReceta(receta){
    console.log("Receta: "+receta.nombre);
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