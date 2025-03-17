const prompt = require('prompt-sync')();

function menu(){
    console.log("---Menú principal---\n");
    console.log("1. Conversor de temperatura");
    console.log("2. Calculadora de IMC");
    console.log("3. Generador de nombre y usuario");
    console.log("4. Funcion Fibonacci");
    console.log("5. Adivina el Número [0, 100]");
    console.log("6. Calculadora de Factorial");
    console.log("7. Contador de Vocales\n");
    let numU = Number(prompt("Seleccione una opción: "));
    switch (numU) {
        case 1:
          conversionGrados()
          break; 

        case 2:
            calculadoraIMC()
            break;
        case 3:
            creadorUsuario()
            break;
        case 4:
            fibonacci()
            break;
        case 5:
            adivinarNumero()
            break;
        case 6:
            calcularFactorial()
            break;
        case 7:
            contadorVocales();
        default:
           console.log(' La operación es incorrecta')
           menu();
    }
}
menu();
// Programa que pase un valor ingresado en celsius a Fahrenheit

function conversionGrados(){
    let valorCelsius = prompt("Ingrese el valor en grados celsius para pasarlo a Fahrenheit: ");
    let conversionFahrenheit;
    conversionFahrenheit = ((9/5) * valorCelsius) + 32;
    console.log("El valor en grados Fahrenheit del valor ingresado es: ", conversionFahrenheit);
    volver();
}



/* Crea un programa que calcule el Índice de Masa Corporal
(IMC) a partir del peso (en kilogramos) y la altura (en metros) ingresados por el
usuario.*/

function calculadoraIMC(){
    let valorPeso = prompt("ingrese el valor de su peso en kg: ");
    let valorAltura = prompt("ingrese el valor de su altura en metros: ");
    let calculadoraImc;
    calculadoraImc = valorPeso/(valorAltura**2);
    console.log("El valor de IMC de su cuerpo es de: ", calculadoraImc );
    volver();
}


/* Generador de Nombre de Usuario: Solicita al usuario su nombre, apellido y año de
nacimiento, y genera un nombre de usuario combinándolos */

function creadorUsuario(){
    let name = prompt("ingrese su nombre: ");
    let lastname = prompt("ingrese su apellido: ");
    let añoNacimiento = prompt("ingrese su año de nacimiento:");
    let nombreUsuario = (name + lastname + añoNacimiento);
    console.log("El nombre de su usuario es: ", nombreUsuario) ;
}


/* Función Fibonacci (con ciclos): Implementa una función que calcule el n-ésimo
número de Fibonacci ingresado por el usuario */

function fibonacci(){
    let pn = 0;
    let sn = 1;
    let suma;
    let fibo = [0, 1];
    let numU = prompt('Ingrese el número hasta donde quiere la serie de fibonacci')
    // let cont = 0;
    for(let i = 0; i <  numU; i++ ){
        suma = pn + sn;
        pn = sn;
        sn = suma;
        fibo.push(suma);
    }
    console.log(fibo);
    volver();
}


//Adivinar un número

function adivinarNumero (){
    const num = Math.floor(Math.random() * 100);
    console.log("Adivine el número que está entre 0-100 \n");
    let numUser = prompt("ingrese un número entre 0 - 100: ");
    do{
        if(numUser == num){
            console.log("Adivinaste el número");
        }
        else if (numUser > num){
                console.log("El numero es menor a el número ingresado\n");
                numUser = prompt("ingrese un número entre 0 - 100: ");
            }
            else {
                    console.log("El numero es mayor a el número ingresado\n");   
                    numUser = prompt("ingrese un número entre 0 - 100: ");     
            } 
    }
    while(numUser != num);   
    console.log("Felicidades, adivinaste el número\n");
    volver();
}


/*Crea un programa que calcule el factorial de un número
ingresado por el usuario. Utiliza tanto un ciclo for como un ciclo while para realizar el
cálculo. */

function calcularFactorial(){
    let userFactorial = prompt("Ingrese un número para hallar el factorial: ");
    let mult = 1
    for(let i = 1; i <= userFactorial; i++){
        mult = mult * i
    }
    console.log("El factorial de %d es %d", userFactorial, mult);
    volver();
}



/* Contador de Vocales: Desarrolla un programa que cuente cuántas vocales distintas
hay en una frase proporcionada por el usuario y muestre las vocales encontradas.
Ejemplo de datos de */


function contadorVocales(){
    let frase = prompt("ingrese la frase para saber cuántas vocales hay: ");
    let contA = 0;
    let contE = 0;
    let contI = 0;
    let contO = 0;
    let contU = 0;
    for(let i = 0; i < frase.length; i++){
        if(frase.at(i) == "a" || frase.at(i) == "A"){
            contA++;
        }
        else if(frase.at(i) == "e" || frase.at(i) == "E"){
            contE++;
        }
        else if(frase.at(i) == "i" || frase.at(i) == "I"){
            contI++;
        }
        else if(frase.at(i) == "o" || frase.at(i) == "O"){
            contO++;
        }
        else if(frase.at(i) == "u" || frase.at(i) == "U"){
            contU++;
        }
    }
    if(contA == 1){
        console.log("a está %s vez",contA);
    }
    else{
        console.log("a está %s veces",contA);
    }
    if(contE == 1){
        console.log("e está %s vez",contE);
    }
    else{
        console.log("e está %s veces",contE);
    }
    if(contI == 1){
        console.log("i está %s vez",contI);
    }
    else{
        console.log("i está %s veces",contI);
    }
    if(contO == 1){
        console.log("o está %s vez",contO);
    }
    else{
        console.log("o está %s veces",contO);
    }
    if(contU == 1){
        console.log("u está %s vez",contU);
    }
    else{
        console.log("u está %s veces",contU);
    }
    volver();
}
contadorVocales();

//Función para volver al menú
function volver(){
    let sino = prompt('Desea volver s/n: ');
    if(sino == 's'){
        menu();
    }
    else if(sino == 'n'){
        console.log('Adiós')
    }
    else {
        console.log('La operación realizada es incorrecta');
        volver();
    }
}

