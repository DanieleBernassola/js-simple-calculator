'use strict';

// Variabili che prendono elementi del DOM
const numbers = document.querySelector('.numbers');
let result = document.getElementById('result');

// Event listener per tutti i numeri
numbers.addEventListener('click', function(e){
    let numberSelected = parseInt(e.target.innerHTML);
    console.log('Hai cliccato su:', numberSelected);
    // String interpolation sul result(schermo calcolatrice)
    result.innerHTML += `${numberSelected}`;
})