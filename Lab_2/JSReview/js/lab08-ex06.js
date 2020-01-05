/* add code below this */
let a1 = 23;
a1 = 50;
console.log(a1);

const a2 = 24;
//a2 = 51;
console.log(a2);

// const Variable cannot be changed

let isDifficult = true;
let isNull = null;
let whatIsThis;

console.log(isDifficult);
console.log(isNull);
console.log(whatIsThis)

//console.log(xyz);


let foo = "Randy";
console.log(foo);
foo = 99;
console.log(foo);
foo = 'sue';
console.log(foo);

foo = "10";
console.log(typeof foo);
console.log(typeof isDifficult);
console.log(typeof whatIsThis);


var canYouGuess = a1 + foo;
// if one of the data type is string, then this a concatenation
console.log(typeof foo);
console.log(typeof canYouGuess);


foo = 10;
var canYouGuess = a1 + foo;
console.log(typeof foo);
console.log(typeof canYouGuess);


// no matter what you type in, it assumes it is a string
// let age = prompt("what is your age");
// console.log('age=' + age + ' data type=' + typeof age);


let age = prompt("what is your age?");
let iAge = Number(age);
console.log('age=' + iAge + ' data type=' + typeof iAge);
