'use strict';

/* TASK 1 */

/* const users = ["Mango", "Poly", "Ajax", "Chelsey"];

users.shift();
console.log(users);

users.pop();
console.log(users);

users.unshift("Lux");
console.log(users);

users.push("Jay", "Kiwi");
console.log(users);

const userToDelete = "Ajax";
users.shift(userToDelete);
console.log(users);

const userToInsertBefore = "Jay";

console.log(typeof users.indexOf(userToInsertBefore));
users.splice(users.indexOf(userToInsertBefore), 0, "Kong");
console.log(users); */

/* TASK 2 */

/* const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
let i = 0;
while (i < users.length) {
    console.log(`${i+1} - ${users[0+i]}`);
    i += 1;
  } */

/* TASK 3 */

/* 
const message = "Proin sociis natoque et magnis parturient montes mus";
const pricePerUnit = 10;
let price = 0;

const words = message.split(' ');

console.log(words);
let i = 0;
while(i < words.length) {
price = price + pricePerUnit;
i += 1;
}
console.log(words.length); 
console.log(price);
 */

/* TASK 4 */

/* let requestNumber;
while (true) {
  requestNumber = prompt('Введите целое число больше 100!');

  if (requestNumber === null) {
    break;
  } else if (requestNumber > 100) {
    console.log(requestNumber);
    break;
  }
  alert('Вы не верно ввели число, нажмите ОК и попробуйте еще раз!');
} */

/* TASK 5 */

/* 
const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
const num = 10;
const matched = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[0 + i] > num) {
    matched.push(numbers[0 + i]);
  }
}
console.log(matched); 
*/

/* TASK 6 */

/* const message = 'May the force be with you';
let longestWord;

const transformMessage = message.split(' ');
console.log(transformMessage[0].length);
const lengthWordMessage = [];

for (let i = 0; i < transformMessage.length; i += 1) {
  lengthWordMessage.push(transformMessage[0 + i].length);
}
console.log(lengthWordMessage);

longestWord = longestWord.reduce(longestWord) {
  return Math.max(longestWord);
};

console.log(longestWord); */

/* const message = 'May the force be with you';
let longestWord = 0;

const transformMessage = message.split(' ');
console.log(transformMessage);

for (let i = 0; i < transformMessage.length; i += 1) {
  if (transformMessage[i].length > longestWord) {
    longestWord = transformMessage[i].length;
  }
}

console.log(longestWord); */

/* TASK 7 */

/* const numbers = [12, 15, 25, 37, 41, 62, 74, 83];

const minNuber = 1;
const maxNuber = 100;
let trueResult;
const isUserNumber = Number(prompt('Введите число от 1 до 100'));

for (let i = 0; i < numbers.length; i += 1) {
  if (isUserNumber === numbers[i]) {
    trueResult = true;
    break;
  }
}

if (trueResult) {
  alert('Поздравляем, Вы угадали!');
} else {
  alert('Сожалеем, Вы не угадали!');
} */

/* const array = ['mango', 'poly', 'ajax']; */

const clients = ['Mango', 'Ajax', 'Poly'];
/* const value = 'Mango'; */
for ('Mango' of clients) {
  console.log(value);
}
