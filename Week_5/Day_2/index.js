// PROMISES
// An object that may or may not resolve to a value in the future
// Offers a solution to async programming
// A promise will have one out of the next three states:
//   pending - a promise that needs to resolve a value or reject an error
//   fulfilled - resolved successfully to a value (calling the resolve() method)
//   rejected - rejected with an error (calling the reject() method)

const getRandomNumberPromise = () => {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10);

    // if less than 5 reject promise
    // if (randomNumber < 5) {
    //   return reject();
    // }

    // if greater than 5 resolve the promise
    // return resolve(randomNumber);

    // ternary
    // condition ? true : false
    randomNumber > 5
      ? resolve(randomNumber)
      : reject(new Error(`The random number, ${randomNumber}, is less than 5`));
      
  });
};

// to access promise return value, use .then() syntax
getRandomNumberPromise()
.then(randomNumber => console.log(randomNumber))
.catch(error => console.log(error));