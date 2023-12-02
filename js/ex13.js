var recetaTortilla = {
    nombre:"tortilla de patatas",
    tiempoPreparacion: 7,
    ingredientes:["Patatas","Huevos","Aceite de oliva", "Cebolla", "Sal"]
};

function listarReceta(receta){
    console.log("Receta: "+receta.nombre);
    console.log("Tiempo de cocinado: "+receta.tiempoPreparacion+"");
    console.log("Ingredientes: ");

    receta.ingredientes.forEach(ingrediente => {
        console.log(" - "+ingrediente);
    });
    
}

listarReceta(recetaTortilla);