"use strict";

const numChildren = [1, 2, 3, 4, 5];
const partnerNames = ["Malak", "Dana", "Lena", "Reham", "Lian"];
const locations = ["Amsterdam", "Rotterdam", "Leiden", "Den haag", "Breda"];
const jobs = ["Web developer", "Businessman", "Footballer", "Engineer", "Astronaut"];

function tellFortune(fortuneChild, forunePartner, fortuneLocation, fortuneJob){

    //return false if the argument not an array
    if (!Array.isArray(numChildren) || !Array.isArray(forunePartner) || !Array.isArray(fortuneLocation) || !Array.isArray(fortuneJob))
        return `Your inputs for must be an array`;

    //Select random Fortune from arrays list
    const ranFortuneChild = fortuneChild[Math.floor(Math.random() * fortuneChild.length)];
    const ranForunePartner = forunePartner[Math.floor(Math.random() * forunePartner.length)];
    const ranFortuneLocation = fortuneLocation[Math.floor(Math.random() * fortuneLocation.length)];
    const ranFortuneJob = fortuneJob[Math.floor(Math.random() * fortuneJob.length)];

    // Check if the first letter of 'ranFortuneJob' is vowel
    const vowelLetters = ["a", "e", "i", "o", "u", "y"];
    if (vowelLetters.includes(ranFortuneJob[0][0].toLowerCase()))
        return `You will be an ${ranFortuneJob} in ${ranFortuneLocation}, married to ${ranForunePartner} with ${ranFortuneChild} kids.`;
    else
        return `You will be a ${ranFortuneJob} in ${ranFortuneLocation}, married to ${ranForunePartner} with ${ranFortuneChild} kids.`;

}


console.log(tellFortune(numChildren, partnerNames, locations, jobs)); 
console.log(tellFortune(numChildren, partnerNames, locations, jobs)); 
console.log(tellFortune(numChildren, partnerNames, locations, jobs)); 
