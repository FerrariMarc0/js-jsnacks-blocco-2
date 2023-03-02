'use strict'

// Faccio inserire un numero all'utente, se è pari stampo il numero, altrimenti stampo il numero successivo

const userNum = Number(prompt('Inserisci un numero'));

if(userNum % 2 === 0){
    console.log(userNum);
} else {
    const nextNum= userNum + 1;
    console.log(nextNum);
}