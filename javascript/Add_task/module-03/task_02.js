'use strict';

const add = function(a, b) {
  return a + b + globalValue;
};

const globalValue = 10;

console.dir(add);

add(5, 15);
