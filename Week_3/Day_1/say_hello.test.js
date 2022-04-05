const assert = require('assert');
// no path - this library is built into NodeJS

// .test is a good way to indicate nature of the file
// https://nodejs.org/api/modules.html
// assign require function to a variable
// pulls in information from file 
// set export values in original file
// if nothing exported, ourFunctions is empty object
const ourFunctions = require('./say_hello');

// assign sayHello function to a variable by accessing object method
const sayHello = ourFunctions.sayHello;

const actual = sayHello('Sneha');
const expected = 'Hello there, Sneha!';

//console.log(assert);

// Strict will type match as well
// no output if true
// detailed report if not equal
assert.strictEqual(actual, expected);