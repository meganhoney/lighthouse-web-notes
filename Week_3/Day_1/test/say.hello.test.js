// mocha will run this file
// it is in the ./test/ folder

const assert = require('assert');

const ourFunctions = require('../say_hello');
const sayHello = ourFunctions.sayHello;

it('returns "Hello there, Sneha!" when given string "Sneha"', () => {
  const actual = sayHello('Sneha');
  const expected = 'Hello there, Sneha!';

  assert.strictEqual(actual, expected);
});
