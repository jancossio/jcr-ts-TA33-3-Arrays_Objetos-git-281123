let numeros = [1,2,3,4,5,6,7,8,9,10];
console.log("Array inicial:",numeros);

function separarPares(array){
    arrPar = [];
    arrImpar = [];
    array.forEach(numero => {
        if(Math.floor(numero%2 == 0)){
            arrPar.push(numero);
        }else{
            arrImpar.push(numero);
        }
    });
    console.log("Array pares:",arrPar);
    console.log("Array impares:",arrImpar);

    return arr3 = arrPar.concat(arrImpar);
}

let result = separarPares(numeros);
console.log("Array concatenado:",result);