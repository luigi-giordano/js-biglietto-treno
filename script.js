/*SOLUZIONE 1*/

/*VARIABILI*/
const priceTicketKm = 0.21;
const discountUnderAge = 20;
const discountOverAge = 40;

let totalKm = parseInt(prompt('Quanti km devi percorrere?'));
let agePassenger = parseInt(prompt('Quanti anni hai?'));

const priceTicket = 0.21 * totalKm;

let finalPrice = priceTicket * priceTicketKm;

if (agePassenger < 18){
  const priceUnderAge = priceTicket * (1 - discountUnderAge / 100);
  finalPrice = priceUnderAge
} else if (agePassenger > 65){
  const priceOverAge = priceTicket * (1 - discountOverAge / 100);
  finalPrice = priceOverAge
}
console.log('Il prezzo finale sarà', finalPrice.toFixed(2));