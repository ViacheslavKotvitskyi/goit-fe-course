'use strict';

/*  

 TASK 1

 
  Напиши скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - заменяет значение premium на false
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

/* const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
  changeFunc() {
    this.mood = 'happy';
    this.hobby = 'javascript';
    this.premium = false;
    const getKeys = Object.keys(this);
    for (const key of getKeys) {
      console.table(`${key}: ${this[key]}`);
    }
    const getEntries = Object.entries(user);
    console.log(
      'TCL: changeFunc -> Object.entries(user)',
      Object.entries(user),
    );
    for (const key of getEntries) {
      console.log(`${key[0]}: ${key[1]}`);
    }
  },
};

user.changeFunc();
 */

/* TASK 2 */

/*
  Напиши скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

/* const tasksCompleted = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};

const findMaxTask = function(tasksCompleted) {
  const keys = Object.keys(tasksCompleted);

  let maxTask = 0;
  let Name;
  for (const key of keys) {
    if (tasksCompleted[key] > maxTask) {
      maxTask = tasksCompleted[key];
      Name = key;
    }
  }
  return {
    Name,
    tasksCompleted: maxTask,
  };
};

console.log(findMaxTask(tasksCompleted)); */

/* TASK 3 */

/*  
  Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

/* const countProps = function(obj) {
  const keys = Object.keys(obj);
  return keys.length;
};
// Вызовы функции для проверки
console.log(countProps({})); // 0

console.log(countProps({ a: 1, b: 3, c: 'hello' })); // 3 */

/* TASK 4 */

/*  
  Напиши функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

/* const isObjectEmpty = obj => {
  const keys = Object.keys(obj);
  return keys.length == 0;
};
// Вызовы функции для проверки
console.log(isObjectEmpty({})); // true

console.log(isObjectEmpty({ a: 1 })); // false

console.log(isObjectEmpty({ a: 1, b: 2 })); // false
 */

/* TASK 5 */

/*  
  Напиши функцию countTotalSalary(salaries). 
  
  Функция получает объект зарплат и считает общую сумму запрплаты работников.
  Возвращает общую сумму зарплаты.
  
  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/

/* const countTotalSalary = salaries => {
  const values = Object.values(salaries);
  let totalSalary = 0;
  for (const value of values) {
    totalSalary += value;
  }
  return totalSalary;
};

// Вызовы функции для проверки
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330 */

/* TASK 6 */

/*  
  Напиши функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа. 
  Возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

/* const users = [
  { name: 'Poly', age: 7, mood: 'happy' },
  { name: 'Mango', age: 4, mood: 'blissful' },
  { name: 'Ajax', age: 3, mood: 'tired' },
];

const getAllPropValues = function(arr, prop) {
  let names = [];
  for (const user of arr) {
    if (user[prop]) {
      names.push(user[prop]);
    }
  }
  return names;
};

// Вызовы функции для проверки
console.log(getAllPropValues(users, 'name')); // ['Poly', 'Mango', 'Ajax']

console.log(getAllPropValues(users, 'mood')); // ['happy', 'blissful', 'tired']

console.log(getAllPropValues(users, 'active')); // [] */

/* TASK 7 */

/*
 * Есть два массива names и prices с именами и ценами товаров.
 * Напишите функцию combine(names, prices), которая получает
 * эти два массива и возвращает массив объектов со свойствами name и price.
 */

/* const names = [
  'Радар',
  'Сканер',
  'Дроид',
  'Захват',
  'Двигатель',
  'Топливный бак',
];
const prices = [1000, 2000, 1500, 2700, 1600, 8000];

const combine = function(names, prices) {
  let products = [];
  for (let i = 0; i < names.length; i++) {
    const obj = {
      name: names[i],
      price: prices[i],
    };
    products.push(obj);
  }
  return products;
};
combine(names, prices);
console.log(combine(names, prices)); */
/* console.log(products); // массив объектов со свойствами name и price */

