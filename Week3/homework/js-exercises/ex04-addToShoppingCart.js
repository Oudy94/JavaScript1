"use strict";

const shoppingCart = ['bananas', 'milk'];

function addToShoppingCart(groceryItem){

    //return false if the argument not a string
    if (typeof groceryItem !== 'string')
        return `Your inputs for must be an string`;

    //Check if 'shoppingCart' has 3 items or more
    if (shoppingCart.length >= 3){
        shoppingCart.shift();
        shoppingCart.push(groceryItem);
    }
    else
    {
        shoppingCart.push(groceryItem);
    }

     //spacing between shopingCart elements
    let shoppingCartItems = shoppingCart.join(', ');
    return `You bought ${shoppingCartItems}!`;

}


console.log(addToShoppingCart('chocolate'));
console.log(addToShoppingCart('waffles'));
console.log(addToShoppingCart('tea'));