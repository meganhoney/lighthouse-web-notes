/*
Booleans represnt a binary value
on or off
0 or 1
true or false
*/

const myTrueBool = true;
const myFalseBool = false;

console.log('myTrueBool', typeof myTrueBool, myTrueBool);
console.log('myFalseBool', typeof myFalseBool, myFalseBool);
// If you want to get the opposite use an excalmation mark (useful in if statements)
console.log('Not myTrueBool/ !myTrueBool', typeof !myTrueBool, !myTrueBool);
// testing an if statement
// only runs if statement is true
if(!myFalseBool) {
  console.log('Testing an if statement!');
}