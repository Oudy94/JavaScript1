"use strict";

let grade = 50; // Here we assign the student mark as an argument to the calcGrades function to calculate the student grade

function calcGrades(grade){

    const percentOutOf = 100;
    const percent = (grade * percentOutOf) / 100;

    if (percent >= 90 && percent <= 100) //Check if the mark is 90 or more 
        return `you got a A (${percent}%)!`; //calulate the student mark

    else if (percent >= 80 && percent <= 89) //Check if the mark is 80 or more 
        return `you got a B (${percent}%)!`;

    else if (percent >= 70 && percent <= 79) //Check if the mark is 70 or more 
        return `you got a C (${percent}%)!`;

    else if (percent >= 60 && percent <= 69) //Check if the mark is 60 or more 
        return `you got a D (${percent}%)!`;

    else if (percent >= 50 && percent <= 59) //Check if the mark is 50 or more 
        return `you got a E (${percent}%)!`;

    else if (percent >= 0 && percent <= 49)//Check if the mark is bellow 50 
        return `you got a F (${grade}%)!`;

    else
        return `your input must be from 0 to 100 !`;

}

console.log(calcGrades(grade));



