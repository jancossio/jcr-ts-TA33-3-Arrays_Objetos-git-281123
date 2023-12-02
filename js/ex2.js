let planetas = ["Mercurio","Venus","La Tierra","Marte","Jupiter","Saturno","Urano","Neptunno","Pluton"];

function listarPlanetas(){
    for(let i=0; i<planetas.length; i++){
        console.log((i+1)+" : "+planetas[i]);
    }
}

listarPlanetas();