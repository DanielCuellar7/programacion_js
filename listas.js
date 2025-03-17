const prompt = require('prompt-sync')();

/* 1. Mayores y Menores: Dada una lista de números, encuentra el número más grande
y el más pequeño en la lista. */

function listaNumeros(){
    let array = [4, 6, 2, 3, 8, 9];
    let numMin = array[0];
    let numMax = array[0];
    for(let i = 0; i < array.length; i++){
        if(numMin > array[i]){
            numMin = array[i];
        }
        if(numMax < array[i]){
            numMax = array[i];
        }
    }
    console.log('El número menor de la lista es ' + numMin);
    console.log('El número mayor de la lista es ' + numMax);
}
listaNumeros();

