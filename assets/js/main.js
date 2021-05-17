//Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.
var prezzoBase = 50;
var salsa = 5;
var aggiunta = 10;




/* var userPomodoro = document.getElementById('pomodori').value;
var userMustard = document.getElementById('pomodori').value;
var userCheese = document.getElementById('pomodori').value;
var userEgg = document.getElementById('pomodori').value;
var userLettuce = document.getElementById('pomodori').value;
var userKetchup = document.getElementById('pomodori').value;
console.log(userKetchup);
console.log(userEgg);
 */
document.getElementById('crea').addEventListener('change', function (){
    let aggiunte = document.getElementById('userSelect').value;
    console.log(aggiunte);
});

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
