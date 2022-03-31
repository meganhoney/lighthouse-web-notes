// Synchronous
// Tasks that are executed in series - one after another - sequential
console.log(1);
console.log(2);
console.log(3);

// Aynchronous
// Tasks that can run independently from the main flow
console.log(1);

// setTimeout - built in JS function - receives callback & time
// Higher order function
setTimeout(() => console.log(2), 3000);
console.log(3);