'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }
  return false;
};

const isLoginUnique = function(allLogins, login) {
  for (const i of allLogins) {
    if (i === login) {
      return false;
    }
  }
  return true;
};

const addLogin = function(allLogins, login) {
  if (!isLoginValid(login)) {
    return 'Ощибка! Логин должен быть от 4 до 16 символов';
  }

  if (!isLoginUnique(allLogins, login)) {
    return 'Такой логин уже используется!';
  }
  allLogins.push(login);
  return 'Логин успешно добавлен!';
};

// Вызовы функции для проверки
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
