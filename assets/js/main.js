//Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.
const prezzoBase = 50;
const salsa = 5;
const aggiunta = 10;

document.getElementById('crea').addEventListener('click', function (){
    let aggiunte = document.getElementById('userSelect').value;
    console.log(aggiunte);

    
});
let tomato = document.getElementById('tomato').value;
let cheese = document.getElementById('cheese').value;
let egg = document.getElementById('egg').value;
let mustard = document.getElementById('mustard').value;
let lettuce = document.getElementById('lettuce').value;
let ketchup = document.getElementById('ketchup').value;


var checkboxes = document.getElementsByClassName('ingredient-checkbox');
console.log(checkboxes);
for (let i=0; i < checkboxes.length; i++){
  let checkedEl = checkboxes[i];
  console.log(checkedEl);
 
  
  /* if (checkedEl == ){
    checkedEl += prezzoBase
  } */
}
 let valueEl = document.getElementsByClassName('ingredient-checkbox').value;
 console.log(valueEl);
//Consigli del giorno:
//Create inizialmente un html base con gli elementi minimi necessari al funzionamento, 
//passate poi alla parte JS ragionando come sempre a step. 
//Prima la logica in italiano e poi traduciamo in codice. console.log() è nostro amico
//. Quando tutto funziona passate alla parte visiva lavorando al css.
