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