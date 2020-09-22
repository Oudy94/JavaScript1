"use strict";

let drinkTray = [];
const drinkTypes = ['cola', 'lemonade', 'water'];

for (let i = 0; i < 5; i++){
    if (drinkTray.filter(x => x === 'cola').length !== 2) //Check if 'cola' has 2 values then jump to the next drinkTypes
        drinkTray.push('cola');

    else if (drinkTray.filter(x => x === 'lemonade').length !== 2) //Check if 'lemonade' has 2 values then jump to the next drinkTypes
        drinkTray.push('lemonade');

    else
        drinkTray.push('water');
}

console.log(`Hey guys, I brought a ${drinkTray}!`);
