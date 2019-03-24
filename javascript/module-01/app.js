'use strict';

/* TASK 1 */

const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;

const requestPassword = prompt('Введите пароль!');

if(requestPassword === null) {message = 'Отменено пользователем!'}
else if(requestPassword !== ADMIN_PASSWORD) {message = 'Доступ запрещен, неверный пароль!'}
else {message = 'Добро пожаловать!'}

alert(message); 

/* TASK 2 */


const credits = 23580;
const pricePerDroid = 3000;
const quantity = 3;

const totalPrice = pricePerDroid * quantity;

if(totalPrice > credits) {console.log('Недостаточно средств на счету!')}
else {alert(`Вы купили ${quantity} дроидов, на счету осталось ${credits - totalPrice} кредитов.`)} 


/* TASK 3 */


const chinaDelivery = 100;
const southAmericaDelivery = 250;
const australiaDelivery = 170;
const indiaDelivery = 80;
const JamaicaDelivery = 120;

const country = prompt('Укажите страну доставки');

switch(country) {
    case 'Китай':
    alert(`Доставка в ${country} будет стоить ${chinaDelivery} кредитов`);
    break;
    case 'Южная Америка':
    alert(`Доставка в ${country} будет стоить ${southAmericaDelivery} кредитов`);
    break;
    case 'Австралия':
    alert(`Доставка в ${country} будет стоить ${australiaDelivery} кредитов`);
    break;
    case 'Индия':
    alert(`Доставка в ${country} будет стоить ${indiaDelivery} кредитов`);
    break;
    case 'Ямайка':
    alert(`Доставка в ${country} будет стоить ${JamaicaDelivery} кредитов`);
    break;
    default:
    console.log('В вашей стране доставка не доступна');
    
}

