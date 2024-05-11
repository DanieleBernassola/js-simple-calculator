'use strict';

// Variabili che prendono elementi del DOM
const numbers = document.querySelector('.numbers');
let screen = document.getElementById('result');
const operators = document.querySelector('.operators');
const equals = document.querySelector('.numbers .orange');

let num1 = 0;
let operator = '';
let num2 = 0;
let result = 0;

// Event listener per tutti i numeri
numbers.addEventListener('click', function(e){
    if (e.target.className === 'number' || e.target.className === 'large number'){
        let numberSelected = parseInt(e.target.innerHTML);
        console.log('Hai cliccato su:', numberSelected);
        // String interpolation sul result(schermo calcolatrice)
        screen.innerHTML += `${numberSelected}`;
        num1 = numberSelected;
    }
})

// Event listener per gli operatori
operators.addEventListener('click', function(e){
    if (e.target.className === 'operator'){
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
    }
})

numbers.addEventListener('click', function(e){
    if (e.target.className === 'number' || e.target.className === 'large number'){
        let numberSelected = parseInt(e.target.innerHTML);
        console.log('Hai cliccato su:', numberSelected);
        // String interpolation sul result(schermo calcolatrice)
        screen.innerHTML += `${numberSelected}`;
        num2 = numberSelected;
        console.log(num2);
    }
})

equals.addEventListener('click', function(e){
    console.log('Secondo operando', num2);
    console.log('Calcolo operazione...');
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    console.log(result);
    screen.innerHTML = result;
})