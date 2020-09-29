"use strict";

const cartForParty = {drinks:4.30, chips:3.80, snacks:2.10, cake:6.20, ice:0.90};

function calculateTotalPrice(cart){

    //return false if the argument not an object
    if (typeof cart !== "object" || typeof cart === "object" && Array.isArray(cart) || typeof cart === "object" && cart === null)
        return `Your input must be an object`;

    let total = 0;

    for (const prices in cartForParty){

        //return false if the object property values are not numbers
        if(typeof cartForParty[prices] !== "number")
            return `Your input must be a number`;

        //sum all object property values
        total += cartForParty[prices];
    }

    //return the total and format the number to two decimals number
    return `Total: €${total.toFixed(2)}`;
}


console.log(calculateTotalPrice(cartForParty));