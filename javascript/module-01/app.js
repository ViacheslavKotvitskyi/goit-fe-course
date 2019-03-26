'use strict';

/* TASK 1 */

const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;

const requestPassword = prompt('Введите пароль!');
const canselUserMessage = 'Отменено пользователем!';
const falsePasswordMessage = 'Доступ запрещен, неверный пароль!';
const welcomeMessage = 'Добро пожаловать!';

if (requestPassword === null) {
  message = canselUserMessage;
} else if (requestPassword !== ADMIN_PASSWORD) {
  message = falsePasswordMessage;
} else {
  message = welcomeMessage;
}

alert(message);

/* TASK 2 */

const credits = 23580;
const pricePerDroid = 3000;

const notNumberMessage =
  'Вы ошиблись при вводе. Введите, пожалуйста, целое положительное число!';
const littleMoneyMessage = 'Недостаточно средств на счету!';
const requestMessage = 'Сколько дроидов Вы хотите приобрести?';

let quantity;

while (true) {
  quantity = prompt(requestMessage);
  quantity = Number(quantity);
  if (quantity > 0 && Number.isInteger(quantity)) {
    break;
  } else if (quantity === 0) {
    break;
  } else {
    console.log(Number(quantity));
    alert(notNumberMessage);
  }
}

const totalPrice = pricePerDroid * quantity;

if (totalPrice > credits) {
  console.log(littleMoneyMessage);
} else {
  alert(
    `Вы купили ${quantity} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`,
  );
}

/* TASK 3 */

const chinaDelivery = 100;
const southAmericaDelivery = 250;
const australiaDelivery = 170;
const indiaDelivery = 80;
const JamaicaDelivery = 120;

const defaultMessage = 'В вашей стране доставка не доступна';
let country = prompt('Укажите страну доставки');

switch (country.toLowerCase()) {
  case 'китай':
    console.log(`Доставка в ${country} будет стоить ${chinaDelivery} кредитов`);
    break;
  case 'южная америка':
    console.log(
      `Доставка в ${country} будет стоить ${southAmericaDelivery} кредитов`,
    );
    break;
  case 'австралия':
    console.log(
      `Доставка в ${country} будет стоить ${australiaDelivery} кредитов`,
    );
    break;
  case 'индия':
    console.log(`Доставка в ${country} будет стоить ${indiaDelivery} кредитов`);
    break;
  case 'ямайка':
    console.log(
      `Доставка в ${country} будет стоить ${JamaicaDelivery} кредитов`,
    );
    break;
  default:
    console.log(defaultMessage);
}
