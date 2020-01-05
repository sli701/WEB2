/* add code below this */

const country = "France";
const capital = "Paris";
const population = 67;

let msg = "The population of " + country + " is " + population + " million";
console.log(msg);

msg = capital + " is the capital of " + country;
console.log(msg);

msg += " and has " + population + "mil people";
console.log(msg);
// the += operator to add a string to an existing string



//`` template literals
var msg2 = `the population of ${country} is ${population} million`;
console.log(msg2);

// js is automatically "boxing" the primitive variable into a temporary object so you can make use of the native object's properties and methods
