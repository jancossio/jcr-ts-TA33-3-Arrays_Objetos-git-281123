var javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
var javascript2 = ["Objetos", "Arrays", "ParseInt"];

function repetido(){
    for(let i=0; i<javascript1.length; i++){
        for(let j=0; j<javascript2.length; j++){
            if(javascript1[i] === javascript2[j]){
                console.log("Elemento repetido: ", javascript1[i]);
            }
        }
    }
}

repetido();