const arrDiv = ["COP", "EUR", "USD"];
const arrDiv2 = ["COP", "EUR", "USD"];


function convertidorDivisas(){
    const divDe = document.getElementById("De");
    const divA = document.getElementById("A");
    let selectedValueDe = ""
    let selectedValueA= ""

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

    divA.addEventListener('change', function(e) {
        // Código a ejecutar cuando se haga clic en el elemento
       selectedValueA = e?.target?.value

       console.log(selectedValueA)
      });

    divDe.addEventListener('change', function(e) {
        // Código a ejecutar cuando se haga clic en el elemento
        selectedValueDe = e?.target?.value

      });
    
    const importe = document.getElementById("cantidad");
    const valor = importe.value;
    
}
convertidorDivisas();