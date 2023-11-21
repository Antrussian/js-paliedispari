/*

Palidroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
E' vietato usare split(), reverse() e simili.

*/

let userChoice = prompt ('Inserisci una parola');

let caratteri = palindromaCheck(userChoice);
let caratteriInvertiti = invertiArray(caratteri);


let risultato;


if ( caratteriInvertiti === userChoice) {
        risultato === true;
        
}

else {
    risultato === 'La parola non è palindroma :('
    
}










function palindromaCheck(wordCheck) {
    
    let arrayCaratteri = [];

for (let i = 0; i < wordCheck.length; i++) {
   arrayCaratteri.push(wordCheck[i]);

}
return arrayCaratteri;

}



function invertiArray(array) {

   
    let arrayInvertito = [];

    for (let i = array.length - 1; i >= 0; i--) {
        arrayInvertito.push(array[i]);
    }

    return arrayInvertito;
}




