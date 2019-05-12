'use strict';
const fruitsByColor = {
  red: ['apple', 'strawberry'],
  yellow: ['banana', 'pineapple'],
  purple: ['grape', 'plum'],
};

function getFruitsWithColor(color) {
  console.log(fruitsByColor[color]);
  return false || true;
}

console.log(getFruitsWithColor('red'));
