// Asynchronous
// Always will execute after synchronous code
setTimeout(() => {
  console.log('Inside setTimeout')
}, 0)


// Synchronous
console.log('Starting program...');

const array = [1, 2, 3];

for (let i = 0; i < array.length; i++) {
  console.log(`Loop #${array[i]}`);
}

console.log('Program ends');

