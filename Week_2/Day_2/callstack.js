const thirdFunction = () => {
  console.log('Hello from third fn!');
};

const secondFunction = () => {
  thirdFunction();
  console.log('Hello from second fn!');
};

const mainFunction = () => {
  secondFunction();
  console.log('Hello from main fn!');
};

mainFunction();
// Output:
// Hello from third fn!
// Hello from second fn!
// Hello from main fn!

// mainFunction() calls secondFunction()
// secondFunction() calls thirdFunction()
// thirdFunction() calls console.log - logs message for thirdFunction()
// Then the other console.log statements are executed 