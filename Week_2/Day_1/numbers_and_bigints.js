const sampleNumber = 3.14;
console.log('sampleNumber: ', typeof sampleNumber, sampleNumber);

// Integers are whole numbers
// parseInt built in function to turn into whole number
// parseInt doesn't round up or down, it just removes the decimal
const myInt = parseInt(sampleNumber);
console.log("myInt: ", typeof myInt, myInt);

// Decimal numbers - floats or double
const myFloat = parseFloat('3.14');
// great for converting strings to numbers for math
// typecasting
console.log('myFloat: ', typeof myFloat, myFloat);

const genericNumber= Number('5');
console.log('genericNumber: ', typeof genericNumber, genericNumber);

// BIG INTS
const hugeNumber = 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
console.log('hugeNumber', typeof hugeNumber, hugeNumber);

// If a number is too big it becomes Infinity
Infinity;

// If a number is too small, it becomes -Infinity
-Infinity;

// If you NEED to keep track of numbers this large, use BigInt instead
const myFirstBigInt = 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999n;
console.log('myFirstBigInt', typeof myFirstBigInt, myFirstBigInt);

const alternativeSyntaxBigInt = BigInt(34);