"use strict";

calcGrades(49); // Here we assign the student mark as a parameter to the function to calculate the student grade

function calcGrades(grade){
    
    if (grade >= 90) //Check if the mark is 90 or more 
        return console.log(`you got a A (${grade}%)!`); //calulate the student grade
    else if (grade >= 80) //Check if the mark is 80 or more 
        return console.log(`you got a B (${grade}%)!`);
    else if (grade >= 70) //Check if the mark is 70 or more 
        return console.log(`you got a C (${grade}%)!`);
    else if (grade >= 60) //Check if the mark is 60 or more 
        return console.log(`you got a D (${grade}%)!`);
    else if (grade >= 50) //Check if the mark is 50 or more 
        return console.log(`you got a E (${grade}%)!`);
    else // any mark less than 50
        return console.log(`you got a F (${grade}%)!`);
}

