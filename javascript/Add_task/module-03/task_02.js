'use strict';

/* let checkNumberType = n => {
  let b = 'Even';
  if (n % 2) {
    b = 'Odd';
  }
  return b;
};

console.log(checkNumberType(46));

console.log(checkNumberType(3));

console.log(checkNumberType(17)); */

/* const formatString = n => {
  let arrayString = n.split('');
  if (arrayString.length > 40) {
    for (let i = 0; arrayString.length > 40; i = +1) {
      arrayString.pop();
    }
    arrayString.push('...');
    const c = arrayString.join(' ');
    return c;
  } else {
    return n;
  }
};

// Вызовы функции для проверки
console.log(formatString('Curabitur ligula sapien, tincidunt non.')); // вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.')); // вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.')); // вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
); // вернется форматированная строка */

/* const checkForSpam = n => {
  n = n.toLowerCase();
  n = n.includes('spam') || n.includes('sale') ? true : false;

  return n;
};

// Вызовы функции для проверки
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true */

/* const getPx = n => {
  if (typeof n === 'string') {
    n = Number.parseFloat(n);
    return n;
  }
  return null;
};

console.log(getPx('10px') === 10); // true
console.log(getPx('10.5') === 10.5); // true
console.log(getPx('0') === 0); // true
console.log(getPx(-1)); // null
console.log(getPx(10)); // null */

/* const findLongestWord = function(n) {
  n = n.split(' ');
  for (let i; i < n.length; i = +1) {
    n = n[0];
    If (length > n) {
      n[i] = n;
    }
  }
  return n;
};
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force' */
/////////////////////////////////////////////////////////////////

/* const checkNumberType = function(x) {
  let n = 'Even';
  if (x % 2 > 0) {
    n = 'Odd';
  }
  return n;
};

console.log(checkNumberType(2)); // 'Even'

console.log(checkNumberType(46)); // 'Even'

console.log(checkNumberType(3)); // 'Odd'

console.log(checkNumberType(17)); // 'Odd' */

/////////////////////////////////////////////////////////////////

/* const formatString = function(str) {
  if (str.length > 40) {
    let strAr = str.split('');

    while (strAr.length > 40) {
      strAr.pop();
    }
    strAr.push('...');
    str = strAr.join(' ');
  }
  return str;
}; // вернется оригинальная строка

// Вызовы функции для проверки
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.')); // вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.')); // вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
); // вернется форматированная строка */

////////////////////////////////////////////////////////////////
/*
  Напиши функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/
/* const checkForSpam = function(str) {
  let n = 'false';
  if (
    str.toLowerCase().includes('spam') ||
    str.toLowerCase().includes('sale')
  ) {
    n = 'true';
  }
  return n;
};
// Вызовы функции для проверки
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true */

/* const checkForSpam = function(str) {
  let n = 'false';
  const spamWords = ['spam', 'sale'];
  for (const i of spamWords) {
    if (str.toLowerCase().includes(i)) {
      n = true;
    }
  }

  return n;
};
// Вызовы функции для проверки
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true */

/////////////////////////////////////////////////////////////////////////

/* Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/
/* const getPx = function(str) {
  if (typeof str === 'string') {
    str = Number.parseFloat(str);
    return str;
  }
  return null;
};

// Вызовы функции для проверки
console.log(getPx('10px') === 10); // true
console.log(getPx('10.5') === 10.5); // true
console.log(getPx('0') === 0); // true
console.log(getPx(-1)); // null
console.log(getPx(10)); // null */

//////////////////////////////////////////////////////////////////////////

/*  
  Напиши фукнцию findLongestWord(str), которая принимает 
  параметром произвольную строку и возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы, символы букв и цифр!
*/
/* const findLongestWord = function(str) {
  const strAr = str.split(' ');
  let longestWord = strAr[0];
  for (let i = 0; i < strAr.length; i += 1) {
    if (strAr[i].length > longestWord.length) {
      longestWord = strAr[i];
    }
  }
  return longestWord;
};
// Вызовы функции для проверки
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force' */

//////////////////////////////////////////////////////////////////////

/*  
  Напиши функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/
/* const findLargestNumber = function(numbers) {
  let largestNumber = numbers[0];
  for (const i of numbers) {
    if (i > largestNumber) {
      largestNumber = i;
    }
  }

  return largestNumber;
};
// Вызовы функции для проверки
console.log(findLargestNumber([1, 2, 3])); // 3

console.log(findLargestNumber([27, 12, 18, 5])); // 27

console.log(findLargestNumber([31, 128, 14, 74])); // 128 */

///////////////////////////////////////////////////////////////////////

/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

/* const uniqueNumbers = [2, 1, 4, 9];
const addUniqueNumbers = function() {
  for (const i of arguments) {
    if (!uniqueNumbers.includes(i)) {
      uniqueNumbers.push(i);
    }
  }
};

// Вызовы функции для проверки
addUniqueNumbers(1, 2, 3);
console.log(uniqueNumbers); // [2, 1, 4, 9, 3]

addUniqueNumbers(12, 2, 3, 19);
console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19]

addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19, 5, 8] */

//////////////////////////////////////////////////////////////////////////

/*
  Напиши функцию filterFromArray(arr), которая 
  объявляет 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Функция возвращает новый массив, который содержит только 
  те элементы исходного массива, которые не совпадают 
  ни с одним из числовых аргументов.
*/

const filterFromArray = function(arr) {
  for (let i = 0; i < arguments.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[j] === arguments[i]) {
        arr.splice(j, 1);
      }
    }
  }
  return arr;
};

// Вызовы функции для проверки
console.log(filterFromArray([1, 2, 3, 4, 5], 2, 4)); // [1, 3, 5]

console.log(filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)); // [12, 8, 17]
