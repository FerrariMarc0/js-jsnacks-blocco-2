'use strict'

const casualName= ["Qui", "Quo", "Qua"];
const casualSurname= ["Pippo", "Pluto", "Paperino"];
const fullNameValue = [];


for(let i=0; i<3; i++){
    let randomName = Math.floor(Math.random()*casualName.length);
    let randomSurname = Math.floor(Math.random()*casualSurname.length);
    const fullName = `${casualName[randomName]} ${casualSurname[randomSurname]}`;
    fullNameValue.push(fullName);
}
console.log(fullNameValue);