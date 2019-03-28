'use strict';

/* TASK 1 */

const requestNumberMessage = 'Введите целое число!';
const falseNumberMessage =
  'Было введено не число, либо не целое число. Попробуйте еще раз!';
const numbers = [];
let total = 0;
let inputNumber;
do {
  inputNumber = prompt(requestNumberMessage);
  if (inputNumber !== null) {
    inputNumber = +inputNumber;
    console.log(inputNumber);
    if (!Number.isNaN(inputNumber) && Number.isInteger(inputNumber)) {
      numbers.push(inputNumber);
    } else {
      alert(falseNumberMessage);
    }
    console.log(numbers);
  }
} while (inputNumber !== null);

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers.length <= 0) {
    break;
  }
  total = total + numbers[i];
}
alert(
  `Общая сумма чисел равна ${total}! Спасибо, что воспользовались нашей супер-считалкой!`,
);

/* TASK 2 */

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
const requestPassword = 'Введите пароль!';
const welcome = 'Добро пожаловать!';

const endedAttempts = 'У вас закончились попытки, аккаунт заблокирован!';
let attemptsLeft = 3;
let inputPassword;

do {
  inputPassword = prompt(requestPassword);
  if (inputPassword === null) {
    break;
  } else if (passwords.includes(inputPassword)) {
    welcome;
    break;
  } else {
    attemptsLeft -= 1;
    if (attemptsLeft > 0) {
      alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
    } else {
      alert(endedAttempts);
    }
  }
} while (attemptsLeft > 0);
