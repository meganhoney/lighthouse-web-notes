// Synchronous code runs first
// Asynchronous code runs afterwards

console.log('Starting program...');

let answer = 42;

setTimeout(() => {
  answer = 70;
  console.log('timer done', answer);
}, 1000);

console.log(`Finished! Answer is: ${answer}`);