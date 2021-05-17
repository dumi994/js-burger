//Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.
const prezzoBase = 50;
const salsa = 5;
const aggiunta = 10;




var checkboxes = document.getElementsByClassName('ingredient-checkbox');
console.log(checkboxes);
let sum = 0;
for (let i=0; i < checkboxes.length; i++){
  let checkedEl = checkboxes[i];
  console.log(checkedEl);
  let valori = checkedEl.value;
  console.log(valori);
  let checkbox = checkboxes[i];
  const prezzoBase = 50;
  if(checkbox.checked == true) {
    let value = checkbox.value
    prezzoBase += value;
    console.log(prezzoBase);
  }
}


document.getElementById('crea').addEventListener('click', function (){
    let aggiunte = document.getElementById('userSelect').value;
    console.log(aggiunte);    
});
//Consigli del giorno:
//Create inizialmente un html base con gli elementi minimi necessari al funzionamento, 
//passate poi alla parte JS ragionando come sempre a step. 
//Prima la logica in italiano e poi traduciamo in codice. console.log() è nostro amico
//. Quando tutto funziona passate alla parte visiva lavorando al css.
