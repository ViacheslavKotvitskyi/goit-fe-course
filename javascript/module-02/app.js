'use strict';

/* TASK 1 */

const requestNumberMessage = 'Введите целое число!';
const falseNumberMessage =
  'Было введено не число, либо не целое число. Попробуйте еще раз!';
const numbers = [];
let total;
let input;

do {
  input = +prompt(requestNumberMessage);
  if (input === null) {
    break;
  }
  if (!Number.isNaN(input) && Number.isInteger(input)) {
    numbers.push(input);
  } else {
    alert(falseNumberMessage);
  }
} while (input !== null);

if (numbers.length > 0) {
  total = 0;
  for (const i of numbers) {
    total = total + i;
  }
  alert(
    `Общая сумма чисел равна ${total}! Спасибо, что воспользовались нашей супер-считалкой!`,
  );
}

/* TASK 2 */

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
const requestPassword = 'Введите пароль!';
const welcome = 'Добро пожаловать!';

const endedAttempts = 'У вас закончились попытки, аккаунт заблокирован!';
let attemptsLeft = 3;
let inputPassword;

while (attemptsLeft) {
  inputPassword = prompt(requestPassword);
  if (inputPassword === null) {
    break;
  }
  if (passwords.includes(inputPassword)) {
    alert(welcome);
    break;
  }
  attemptsLeft -= 1;
  /* if (attemptsLeft > 0) {
    alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
  } else {
    alert(endedAttempts);
  } */
  /* alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
  if (!attemptsLeft) {
    alert(endedAttempts);
  } */
  if (!attemptsLeft) {
    alert(endedAttempts);
  } else {
    alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
  }
}
