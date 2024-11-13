/*Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. 

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L’output del prezzo finale va messo fuori in forma umana
  (con massimo due decimali, per indicare centesimi sul prezzo). 

Questo richiederà un minimo di ricerca.*/

/*SOLUZIONE 1*/

/*VARIABILI*/
const priceTicketKm = 0.21;
const discountUnderAge = 20;
const discountOverAge = 40;

let totalKm = parseInt(prompt('Quanti km devi percorrere?'));
let agePassenger = parseInt(prompt('Quanti anni hai?'));

const priceTicket = 0.21 * totalKm;
const priceUnderAge = priceTicket * (1 - discountUnderAge / 100);
const priceOverAge = priceTicket * (1 - discountOverAge / 100);

let finalPrice

if (agePassenger < 18){
  finalPrice = priceUnderAge
  console.log('Il prezzo finale sarà', finalPrice.toFixed(2));
} else if (agePassenger > 65){
  finalPrice = priceOverAge
  console.log('Il prezzo finale sarà', finalPrice.toFixed(2));
} else {
  console.log('Il prezzo finale sarà', priceTicket.toFixed(2));
}