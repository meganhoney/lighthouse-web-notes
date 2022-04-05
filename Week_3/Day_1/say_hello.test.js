// .test is a good way to indicate nature of the file
// https://nodejs.org/api/modules.html
// assign require function to a variable
// pulls in information from file 
// set export values in original file
// if nothing exported, ourFunctions is empty object
const ourFunctions = require('./say_hello');
console.log(ourFunctions);