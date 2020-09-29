"use strict";

function calculateDogAge(dogAge){

    //return false if the argument not a number
    if (typeof dogAge !== 'number')
        return `Your input must be a number`;

    // Calculate dog age in dog years, taking into account that 1 years human age = 7 years dog age 
    const dogYears = dogAge * 7;

    //Return the 'dogYears'
    return `Your doggie is ${dogYears} years old in dog years`;
}

console.log(calculateDogAge(1));
console.log(calculateDogAge(2));
console.log(calculateDogAge(3));