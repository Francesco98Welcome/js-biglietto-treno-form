/* Scrivere un programma che chieda all'utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65. */

let inputName = document.querySelector('#first-name');
let inputKm = document.querySelector('#km');
let btnGenera = document.querySelector('#btn-genera');
let btnAnnulla = document.querySelector('#btn-annulla');
let namePassegero = document.querySelector('#name-pass');
let offerta = document.querySelector('.p-offerta');
let price = document.querySelector('.p-price');
let carrozza = document.querySelector('.p-carrozza');
let cp = document.querySelector('.p-cp');
let select = document.querySelector('#age');
let container2 = document.querySelector('.container-2');


// sconto per minorenni 20%;
// sconto per over 65 40%;


btnGenera.addEventListener('click', myFunction);

function myFunction() {
    const prezzoKm = 0.21; // prezzo al km

    let km = inputKm.value;
    const costoViaggioSenzaSconti = km * prezzoKm;

    namePassegero.innerHTML = inputName.value;

    if (select.value === 'Maggiorenne') {
        offerta.innerHTML = 'Biglietto Standard';
        price.innerHTML = costoViaggioSenzaSconti.toFixed(2) + ' €';
    } else if (select.value === 'Minorenne') {
        offerta.innerHTML = 'Biglietto under 18';
        let scontoMinorenne = (costoViaggioSenzaSconti * 20 / 100);
        let viaggioMinorenne = (costoViaggioSenzaSconti - scontoMinorenne);
        price.innerHTML = viaggioMinorenne.toFixed(2) + ' €';
    } else {
        offerta.innerHTML = 'Biglietto over 65';
        let scontoOver65 = (costoViaggioSenzaSconti * 40 / 100);
        let viaggioOver65 = costoViaggioSenzaSconti - scontoOver65;
        price.innerHTML = viaggioOver65.toFixed(2) + ' €';
    }

    carrozzaFunction(); 
    codiceCpFunction();
    mostraBiglietto();

}

function carrozzaFunction() {
    let numbRandom = Math.floor(Math.random() * 10) + 1;
    carrozza.innerHTML = numbRandom;
}

function codiceCpFunction() {
    let cpCode = Math.floor(Math.random() * (100000 - 50000) ) + 50000;
    cp.innerHTML = cpCode;
}

function mostraBiglietto() {
    container2.style.display = 'block';
}


// BONUS - ANNULLA

btnAnnulla.addEventListener('click', reset);

function reset() {
    location.reload();
}
