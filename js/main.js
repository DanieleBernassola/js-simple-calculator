'use strict';

// Variabili che prendono elementi del DOM
const numbers = document.querySelector('.numbers');
let screen = document.getElementById('result');
const operators = document.querySelector('.operators');
const equals = document.querySelector('.numbers .orange');
const canc = document.querySelector('.orange.operator');

let num1 = 0;
let operator = '';
let num2 = 0;
let result = 0;

clickNumber();
// Event listener per tutti i numeri
function clickNumber(){
    numbers.addEventListener('click', function(e){
        if (e.target.className === 'number' || e.target.className === 'large number'){
            let numberSelected = parseInt(e.target.innerHTML);
            console.log('Hai cliccato su:', numberSelected);
            // String interpolation sul result(schermo calcolatrice)
            screen.innerHTML += `${numberSelected}`;
            num1 = numberSelected;
        }
    })
}

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

// Event listener secondo numero
// numbers.addEventListener('click', function(e){
//     if (e.target.className === 'number' || e.target.className === 'large number'){
//         let numberSelected = parseInt(e.target.innerHTML);
//         console.log('Hai cliccato su:', numberSelected);
//         // String interpolation sul result(schermo calcolatrice)
//         screen.innerHTML += `${numberSelected}`;
//         num2 = numberSelected;
//         console.log(num2);
//     }
// })

// Event listener per =
equals.addEventListener('click', function(e){
    console.log('Questo è il secondo operando:', num2);
    console.log('Calcolo operazione...');
    // Verifica operatore da utilizzare
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
    console.log('Risultato operazione:', result);
    screen.innerHTML = result;
})

// Event listener per C
canc.addEventListener('click', function(){
    // Reset totale operazione
    num1 = 0;
    num2 = 0;
    result = 0;
    operator = '';
    screen.innerHTML = '';
    console.log('Calcolo resettato');
})