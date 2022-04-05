// try catch blocks
try {
  helloWorldFunction();
} catch( error ) { // We can accept an argument, the error object, if we like
    //throw new Error('Oh no!');
    //console.log('Please ensure function is available');
    console.log( error );
}