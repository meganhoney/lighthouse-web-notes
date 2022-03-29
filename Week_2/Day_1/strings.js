/*
Single or double quotes are typically interchangeable in JS, just try to be consistent 
Single and double quotes necessitate the use of escape key \ 
*/

const myString = 'Hello World!';
console.log('myString:', typeof myString, myString);

const myDoubleQuoteString = "We can even use double quotes!";

// Concatenation: joining / gluing strings together
const myConcatenatedString = myString + '\n\t' + myDoubleQuoteString;
console.log(myConcatenatedString);

//Back-ticks allow for string interpolation
// We can use strings or expessions insude of the string
// `${myVar}`
// Follow exact use of white space
const myBackTickString = `Let's try using back-ticks!
Inside we can use string template literals. Code and variables
    INSIDE OUR STRINGS! Amazing.
We can use \${} to print our variable values or raw values
Like so: ${myString}`;

console.log(myBackTickString);