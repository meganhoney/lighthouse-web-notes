// Callback example

// Higher order function
const welcomeUser = (callback, username) => {
  callback(username);
};

// Callback declaration
const completeDataMessage = (username) => {
  console.log(`Welcome ${username}! Your profile is complete!`);
};

const missingDataMessage = (username) => {
  console.log(`Welcome ${username}! Your profile is missing some data!`);
};

//Invoking
welcomeUser(completeDataMessage, `Pedro`);
// Call backs allow us to make the higher order function
// To work a certain way depending what callbacks we feed it

// Math result callback example

const mathOps = (val1, val2, callback) => {
  return callback(val1, val2);
};

const sum = (num1, num2) => num1 + num2;
const minus = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const result = mathOps(10, 15, multiply);

console.log(result);