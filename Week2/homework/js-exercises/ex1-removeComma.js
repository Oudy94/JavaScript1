"use strict";

let myString = "hello,this,is,a,difficult,to,read,sentence";

console.log(myString.length);

myString = myString.replace(/,/g, " "); //To replace every comma "," with a space .

console.log(myString);
