'use strict';

/*
const name = 'Генератор защитного поля';

let price = 100;

price = 200;

console.log(name);

console.log(price);

const message = `Выбран "${name}", цуна за штуку ${price} кредитов`;

console.log(message);
*/



/*
const day = 17;
const month = 10;
const year = 2048;

const date = `${day}\\${month}\\${year}`;
const message = `Доброе утро, сегодня ${day}\\${month}\\${year}, за бортом отличная погода!`;


console.log(date); // 17\10\2048
console.log(message); // "Доброе утро, cегодня 17\10\2048, за бортом отличная погода!"
*/



/* 
const name = 'Mango';
const date = '14/08/2137';
const roomType = 'люкс';

const message = `${name} прибывает на отдых ${date} в ${roomType}`;
console.log(message); // Mango прибывает на отдых 14/08/2137 в люкс 
*/

/* 
const correctPassword = 'jqueryismyjam';
const requestPassword = prompt('Введите пароль доступа');
const cancelPassword = 'Ожидаю ввода пароля';
const truePassword = 'Доступ в секретный бункер разрешен!';
const falsePassword = 'Активирована система защиты!';

if(requestPassword === null || "undefined") {alert(cancelPassword)}
else if(requestPassword === correctPassword) {alert(truePassword)} else {alert(falsePassword)}; 

*/

/* 
const total = 100;
const ordered = 150;

if(ordered > total) {alert("На складе недостаточно товаров!")}
else if(ordered === total) {alert("Вы забираете весь товар со склада!")}
else {alert("Заказ оформлен с вами свяжется менеджер!")} 
*/

/* 
let requestNumber = prompt("Введите цело число");
requestNumber = Number(requestNumber);

if(requestNumber === null) {alert("Ну и ладно, пока!")}
else if(Number.isInteger(requestNumber)) {alert("Спасибо!")}
else {alert("Необходимо было ввести целое число!")}; 
*/

/* 
const value = Number.parseInt(Math.random()*100);
console.log(value);
let type;
if(Number(value)%2 === 0) {type='even'}
else {type='odd'}
console.log(`${value} is ${type}`); 
*/

/* const hostelsCatalog = 'Каталог хостелов';
const budgetHotelsCatalog = 'Каталог бюджетных отелей';
const threeStarsHotelsCatalog = 'Каталог отелей ***';
const fourStarsHotelsCatalog = 'Каталог отелей ****';
const besttHotelsCatalog = 'Каталог лучших отелей';

const isNumber = prompt('Введите число от одного до пяти');

if(isNumber === null) {alert('Очень жаль, приходите еще!')}
else if(!(5 >= Number(isNumber) >= 1)) {alert('Неверный ввод, возможные варианты 1-5!')}
else {
    switch(isNumber) {
        case '1':
    alert(hostelsCatalog);
    break;
        case '2':
    alert(budgetHotelsCatalog);
    break;
        case '3':
    alert(threeStarsHotelsCatalog);
    break;
        case '4':
    alert(fourStarsHotelsCatalog);
    break;
        case '5':
    alert(besttHotelsCatalog);
    break;
    }
} */

