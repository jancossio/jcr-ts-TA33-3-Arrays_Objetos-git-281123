let numeros = [1,2,3,4,5,6,7,8,9,10];
console.log("Array inicial:",numeros);

function mayores(array){
    array.forEach(numero => {
        if(numero > 5){
            console.log(numero);
        }
    });
}

mayores(numeros);