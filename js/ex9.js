let corredores = ['Anna', 'Juan', 'Francisco', 'Laura', 'Antonio'];
let [PrimeraPosicion, SegundaPosicion, ...resto] = corredores;
ganadores = corredores;

console.log("1#: ",PrimeraPosicion);
console.log("2#: ",SegundaPosicion);
console.log("El resto: ",resto);