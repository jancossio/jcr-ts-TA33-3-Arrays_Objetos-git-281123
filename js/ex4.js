let palabra = "Palmera";
console.log("Palabra escogida: "+palabra);

let array = [];

for(let i=0; i<palabra.length; i++){
    array[i] = palabra.charAt(i);
}
console.log("Palabra a array: ",array);

let reversedArray = array.reverse();
console.log("Array al reves: ",reversedArray);

let reversedString = reversedArray.join('');
console.log("Palabra al reves: "+reversedString);