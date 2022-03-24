//console.log('Hello 21 March cohort!')

// Problem:
// Write a node program that takes in an unlimited number of command line arguments
// and prints out the sum of them. 
// If any argument is not a whole number, skip it. 
// Do not support negative numbers though.

// NOTES
/*
 Do we need an array? - How would the command line arguments be stored and passed to the program?

 How would we sum the values? 
process.argv?
for loop aka iterator to check each passed value

Conditional statements - check data type (number) and that it is positive


 */
//console.log(process.argv)
//const myArray = [10, 'LHL', -20, 45, 6, 'Hello', //true, -12, -30];

//C version of a for loop
/*for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}*/

//Javascript loop best practice 
/* for (let element of myArray){

}
Working through
for (let element of myArray) {
  //console.log(element);
  // if (typeof element === 'number'){

  //}
  const converted = Number(element)
  const integer = Math.abs(converted);
 
   //if (converted > 0) {
    //console.log(Math.abs(converted));
   //}
   if (integer > 0) {
    console.log(integer);
   }
 
}
*/

//forEach
//myArray.forEach((element, index) => {
  //console.log(element, index)
//})

// Fresh version
const sumAllNumberArguments = function () {
  const myArray = process.argv

  let total = 0;

  for (var element of myArray) {
  const converted = Number(element);
  const integer = Math.abs(converted);
  if (integer > 0) {
    total += integer;
  }
}
return total;
}

console.log(sumAllNumberArguments());

// terminal input / output example
// vagrant [Day_2]> node index.js 1 2 3 hello 4
// 10