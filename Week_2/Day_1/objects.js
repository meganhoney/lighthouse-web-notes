const pet1 = {
  name: 'Charlotte',
  age: 5,
  type: 'cat',
  // method:
  speak: function() {
    console.log(`${this.name} says meow!`);
  }
  // this will store a different value depending on context
  // this keyword - knows it is inside of object here
  // be careful about using - means different things depending 
  // on where you are using it
};

const pet2 = {
  name: 'Nora',
  age: 4,
  type: 'cat',
  speak: function() {
    console.log(`${this.name} says meow!`);
  }
};

const pet3 = {
  name: 'Silo',
  age: 8,
  type: 'dog',
  speak: function() {
    console.log(`${this.name} says woof!`);
  }
};

console.log('pet1: ', typeof pet1, pet1);
console.log('pet2: ', typeof pet2, pet2);
console.log('pet3: ', typeof pet3, pet3);

// access a particular value with dot syntax
console.log('pet2.name: ', typeof pet2.name, pet2.name);

// we can also run methods, but don't forget parenthesis
pet1.speak();
pet3.speak();

// Loop through array of objects!
const pets = [pet1, pet2, pet3];
//for of
for (let pet of pets) {
  pet.speak();
}