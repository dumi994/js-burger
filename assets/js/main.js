//Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.
const prezzoBase = 50;
const salsa = 5;
const aggiunta = 10;

document.getElementById('crea').addEventListener('click', function (){
    let aggiunte = document.getElementById('userSelect').value;
    console.log(aggiunte);

    
});

var checkboxes = document.getElementsByClassName('ingredient-checkbox');
console.log(checkboxes);
for (let i=0; i < checkboxes.length; i++){
  let checkedEl = checkboxes[i];
  console.log(checkedEl);
  let valueEL = document.getElementsByClassName('ingredient-checkbox').value;
  console.log(valueEl);
  /* if (checkedEl == ){
    checkedEl += prezzoBase
  } */
}
/* otherCheckbox.addEventListener('change', () => {
    if(otherCheckbox.checked) {
      otherText.style.visibility = 'visible';
      otherText.value = '';
    } else {
      otherText.style.visibility = 'hidden';
    }
  }); */

//Consigli del giorno:
//Create inizialmente un html base con gli elementi minimi necessari al funzionamento, 
//passate poi alla parte JS ragionando come sempre a step. 
//Prima la logica in italiano e poi traduciamo in codice. console.log() è nostro amico
//. Quando tutto funziona passate alla parte visiva lavorando al css.
