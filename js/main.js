'use strict';

// Variabili che prendono elementi del DOM
const numbers = document.querySelector('.numbers');
let screen = document.getElementById('result');
const operators = document.querySelector('.operators');
let num1 = 0;
let operator = '';
let num2 = 0;

// Event listener per tutti i numeri
numbers.addEventListener('click', function(e){
    let numberSelected = parseInt(e.target.innerHTML);
    console.log('Hai cliccato su:', numberSelected);
    // String interpolation sul result(schermo calcolatrice)
    screen.innerHTML += `${numberSelected}`;
    num1 = numberSelected;
})

// Event listener per gli operatori
operators.addEventListener('click', function(e){
    let operatorSelected = e.target.innerHTML;
    console.log('Hai cliccato su operatore:', operatorSelected);
    // Reset schermo
    screen.innerHTML = ``;

    switch (operatorSelected){
        case '+':
            operator = '+';
            break
        case '-':
            operator = '-';
            break
        case 'x':
            operator = '*';
            break
        case '/':
            operator = '/';
            break
    }
    console.log('Questo è il primo operando:', num1);
    console.log('Hai scelto operatore:', operator);
})