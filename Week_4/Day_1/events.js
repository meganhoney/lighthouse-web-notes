// run in browser

const button = document.getElementById('myButton');
const paragraph = document.getElementById('myParagraph');

// callbacks are used when you need to wait for something asynchronous to happen
// events are asynchronous
// e = event - common
button.addEventListener('click', (e) => {
  console.log(e); // obtains event info
  console.log('The button was clicked!');

  paragraph.innerHTML = 'The button was clicked!!!';
});