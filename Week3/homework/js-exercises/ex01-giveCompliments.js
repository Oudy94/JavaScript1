"use strict";

function giveCompliment(myName){

    //return false if the argument not a string
    if (typeof myName !== 'string')
        return `Your input must be a string`;

    //Compliments array list
    const compliments = ["great", "awesome", "cool", "perfect", "wonderful", "phenomenal", "lovely", "priceless", "glorious", "unique"];

    //Select random compliment from 'Compliments' array list
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)]; //The random index range 0 ~ 9 

    //return the 'randomCompliment' with 'myName' parameter
    return `You are ${randomCompliment} ${myName}`;
}

console.log(giveCompliment("Saoud"));
console.log(giveCompliment("Saoud"));
console.log(giveCompliment("Saoud"));
