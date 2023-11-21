/*

Palidroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
E' vietato usare split(), reverse() e simili.

*/

let userChoice = prompt ('Inserisci una parola');

let isPalindroma = palindromaCheck(userChoice);

console.log(isPalindroma);










function palindromaCheck(wordCheck) {
    
    let arrayCaratteri = [];
    let arrayInvertito = [];


for (let i = 0; i < wordCheck.length; i++) {
   arrayCaratteri.push(wordCheck[i]);

}


for (let i = arrayCaratteri.length - 1; i >= 0; i--) {
    arrayInvertito.push(arrayCaratteri[i]);
}



let parolaInserita = arrayCaratteri.join('');
let parolaOutput = arrayInvertito.join('');


return parolaInserita === parolaOutput;

   
}




