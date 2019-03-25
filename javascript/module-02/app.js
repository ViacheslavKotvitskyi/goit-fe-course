'use strict';

/* TASK 1 */

let input;
const numbers = [];
let total = 0;
while (true) {
  input = Number(prompt('Введите число'));
  if (input === 0) {
    break;
  } else if (Number.isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    numbers.push(input);
  }
}

for (let i = 0; i < numbers.length; i += 1) {
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

while (true) {
  inputPassword = prompt(requestPassword);
  if (passwords.includes(inputPassword)) {
    alert(welcome);
    break;
  } else if (inputPassword === null) {
    break;
  } else if (attemptsLeft === 1) {
    alert(endedAttempts);
    break;
  }
  attemptsLeft -= 1;
  alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
}
