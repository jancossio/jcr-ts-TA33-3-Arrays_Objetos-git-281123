let array1 = [1,2,3,4,5];
let array2 = [6,7,8,9,10];
console.log("Array 1: ",array1);
console.log("Array 2: ",array2);

function intercalar(array1, array2){
    if(array1.length !== array2.length){
        console.log("Los arrays introducidos deben tener la misma longitud!")
    }else{
        let returnArray = [];

        for(let i=0; i<array1.length; i++){
            returnArray.push(array1[i]);
            returnArray.push(array2[i]);
        }
        array1.length = 0;
        array2.length = 0;

        return returnArray;
    }
}

var arrayFinal = intercalar(array1, array2);
console.log("Array resultante: ",arrayFinal);
console.log("Array1 final: ",array1);
console.log("Array2 final: ",array2);