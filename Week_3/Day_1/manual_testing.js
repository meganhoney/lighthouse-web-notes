const sayHello = (name) => {
  // console.log(`Hello there, ${name}!`)
  // easier to test if function is working correctly with return
  return `Hello there, ${name}!`
};

const actual = sayHello('Donna');
const expected = 'Hello there, Donna!';

// not often used console.assert();
// only prints when something fails
console.assert(actual === expected, 'sayHello test');

console.log(`sayHello test: ${actual === expected ? 'PASSED' : 'FAILED'}
  actual:\t${actual}
  expected:\t${expected}`);

// console.table() can be used for formatting
// not testing specific, takes up space
console.table(
  {
      test_status: actual === expected ? 'PASSED' : 'FAILED',
      actual_value: actual,
      expected_value: expected
  }
);