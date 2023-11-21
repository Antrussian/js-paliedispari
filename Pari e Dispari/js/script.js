/*Pari e Dispari:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando un'altra funzione)
Dichiariamo chi ha vinto.*/


let firstChoice = prompt ('Scegli Pari o Dispari');
let secondChoice = parseInt (prompt ('Inserisci un numero da 1 a 5'));

let numeroCom = random ();

let sommaNumeri = numeroCom + secondChoice;


let risultatoNumeri = pariVsDispari(sommaNumeri);

let vincitore = 0;

if (risultatoNumeri == true) {
    risultatoNumeri = 'Pari';
}
else {risultatoNumeri = 'Dispari';
}

if ( risultatoNumeri === firstChoice) {
    vincitore = 'L utente ha vinto!';
}
else {
    vincitore = ' Il COM ha vinto!';
}



console.log('Risultato numeri:' + risultatoNumeri);
console.log('Scelta dell utente:' + firstChoice);
console.log('Numero dell utente' + secondChoice);
console.log('numero Com' + numeroCom);
console.log(vincitore);


function random() {
let numeroRandom = Math.floor(Math.random() * 5) + 1; 
return numeroRandom;
}

function pariVsDispari(numero) {
    return numero % 2 === 0;

}