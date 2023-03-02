'use strict';

// Il software deve chiedere per 5 volte all'utente d'inserire un numero, il programma stampa la somma di tutti i numeri inseriti

let somma = 0;
let counter = 1;
while(counter <= 5){
    const newNumber= Number(prompt(`Inserisci un numero (${counter})`));
    if(!isNaN(newNumber)){
        somma += newNumber;
        counter++
    }
}
alert(somma);

/* do{
    const newNumber= Number(prompt(`Inserisci un numero (${counter})`));
    if(!isNaN(newNumber)){
     somma += newNumber;
     counter++
    }
    }
} while(counter <= 5);
console.log(somma); */