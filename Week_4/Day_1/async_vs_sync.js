// Asynchronous
// Always will execute after synchronous code

//setTimeout working with two arguments
// 1 - Callback, 2 - time set
setTimeout(() => {
  console.log('Inside setTimeout 1')
}, 5000)

setTimeout(() => {
  console.log('Inside setTimeout 2')
}, 2000)

setTimeout(() => {
  console.log('Inside setTimeout 3')
}, 3500)

// Synchronous
console.log('Starting program...');

const array = [1, 2, 3];

for (let i = 0; i < array.length; i++) {
  console.log(`Loop #${array[i]}`);
}

console.log('Program ends');

// setInterval - Async
let numberOfLoops = 10;

const myIntervalID = setInterval(() => {
  if (numberOfLoops <= 0) {
    clearInterval(myIntervalID);
  }

  numberOfLoops -= 1;
  
  console.log('Hello from setInterval ', numberOfLoops)
}, 1000)


