const arrDiv = ["COP", "EUR", "USD"];
const arrDiv2 = ["COP", "EUR", "USD"];

let result;
const divresult = document.getElementById("result");
function convertir(){
    divresult.innerHTML = ""; // Limpia el resultado anterior
    let rta = document.createElement('h3');
    rta.textContent = result;
    divresult.appendChild(rta);
}

function convertidorDivisas(){
    const divDe = document.getElementById("De");
    const divA = document.getElementById("A");
    const importe = document.getElementById("cantidad");
   

    const options = arrDiv.map(opt => {
        let div1 = document.createElement('option'); //creo la etiqueta para HTML
        div1.setAttribute("value", opt); //Crea un atributo a la etiqueta creada
        div1.innerText = opt; //Asigno valor a la etiqueta
        divDe.appendChild(div1); //Envía al DOM
    })
    
    const options2 = arrDiv2.map(opt2 => {
        let div2 = document.createElement('option');
        div2.setAttribute("value", opt2);
        div2.textContent = opt2;
        return divA.appendChild(div2);
    })
    
    
    function calcular(){

        const selectedValueDe = divDe.value;
        const selectedValueA = divA.value;
        let valor = importe.value;

        if(selectedValueDe == selectedValueA){
            result = valor;
        }
        else if (selectedValueDe === 'COP' && selectedValueA === 'USD'){
            result = valor / 4021;  
        }
        else if (selectedValueDe === 'USD' && selectedValueA === 'COP'){
            result = valor * 4021;
        }
        else if (selectedValueDe === 'EUR' && selectedValueA === 'COP') {
            result = valor * 4700;
        }
        else if (selectedValueDe === 'COP' && selectedValueA === 'EUR'){
            result = valor / 4700
        }
        else{
            console.log("incorrecto");
        }
        result = parseFloat(result.toFixed(2));
    }
    
    convertir();


    divDe.addEventListener('change', calcular);
    divA.addEventListener('change', calcular);
    importe.addEventListener('input', calcular);      
    
}
convertidorDivisas();
