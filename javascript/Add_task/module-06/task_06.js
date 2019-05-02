'use strict';
const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;

console.dir(dog.barks); // true
console.dir(dog.eats); // true
console.dir(dog); // true
