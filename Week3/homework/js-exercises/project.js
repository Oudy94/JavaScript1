"use strict";

function validateCreditNumber(creditCardNumber){

    let total = 0;
    for (let i = 0; i < creditCardNumber.length; i++)
        total += Number(creditCardNumber[i]); // convert all string characters into number and sum all the numbers

    //Check if the input has 16 characters
    if (creditCardNumber.length !== 16)
        return `Invalid! The input ${creditCardNumber} should be 16 numbers!`;

    //Check if all characters are numbers
    else if(!creditCardNumber.match(/^([0-9])+$/)) //or (/^\d+$/)
        return `Invalid! The input ${creditCardNumber} should contain only numbers!`;

    //Check if the input has at least two different numbers
    else if((/^([0-9])\1+$/).test(creditCardNumber))
        return `Invalid! The input ${creditCardNumber} should contain at least 2 different types of numbers!`;

    //Check if the input last number is even number
    else if(creditCardNumber[15] % 2 !== 0)
        return `Invalid! The last input of ${creditCardNumber} should be even number!`;

    //Check if the total of the input is greater than 16
    else if(total <= 16)
        return `Invalid! The sum of the input ${creditCardNumber} should be greater than 16!`;

    else
        return `Success! The input ${creditCardNumber} is a valid credit card number!`;
}

console.log(validateCreditNumber('a92332119c011112'));
console.log(validateCreditNumber('4444444444444444'));
console.log(validateCreditNumber('6666666666661666'));