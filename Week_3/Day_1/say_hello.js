// exports.sayHello = (name) => {}
const sayHello = (name) => {
  return `Hello there, ${name}!`;
};

// often easier to include all exports at the bottom
module.exports = {
  sayHello: sayHello
};