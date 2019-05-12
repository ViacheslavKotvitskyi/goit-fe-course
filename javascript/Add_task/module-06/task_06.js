'use strict';
/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email. 
  
  В prototype функции-конструктора добавь метод getInfo(), 
  который выводит в консоль значения полей login и email. 
  
  Обрати внимание, метод всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
*/

/* const Account = function(login, email) {
  this.login = login;
  this.email = email;
  Account.prototype.getInfo = function() {
    return `Login: ${this.login}, Email: ${email}`;
  };
};

const accountA = new Account('Mangozedog', 'mango@dog.woof');
const accountB = new Account('GHJBK', 'fdsfvfsgfdrfgf');

console.log(Account.prototype.getInfo); // function
accountA.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

console.log('account B:', accountB);
console.dir(accountA); */

/*
  Напиши ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в свойство _value.
  
  Добавь классу следующие методы:
  
    - геттер value - возвращает текущее значение поля _value
  
    - append(str) - получает парметр str (строку) и добавляет ее в конец _value
    
    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
  
    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/

/* class StringBuilder {
  constructor(string) {
    this._value = string;
  }
  get value() {
    return this._value;
  }
  append(str) {
    this._value += str;
    return this._value;
  }
  prepend(str) {
    this._value = str + this._value;
    return this._value;
  }
  pad(str) {
    this._value = str + this._value + str;
    return this._value;
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^=' */

/*
 * Напиши класс Car с указанными свойствами и методами
 */

class Car {
  static getSpecs(car) {
    console.log(car);
    console.log(this.distance);
    /* console.log(
      `maxSpeed: ${this.maxSpeed}, speed: ${this.speed}, running: ${
        this.running
      }, distance: ${this.distance} `,
    ); */
  }
  constructor({ maxSpeed = 0 }) {
    /*
        Добавь свойства:
          - speed - для отслеживания текущей скорости, изначально 0.
          - maxSpeed - для хранения максимальной скорости 
          - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
          - distance - содержит общий киллометраж, изначально с 0
      */

    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
  }

  turnOn() {
    // Добавь код для того чтобы завести автомобиль
    // Просто записывает в свойство running значание true
    this.running = true;
  }

  turnOff() {
    // Добавь код для того чтобы заглушить автомобиль
    // Просто записывает в свойство running значание false
    this.running = false;
  }

  accelerate(spd) {
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed
    if (spd <= this.maxSpeed) {
      this.speed = spd;
    }
  }

  decelerate(spd) {
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed и не меньше нуля
    if (spd <= this.maxSpeed && spd > 0) {
      this.speed = spd;
    }
  }

  drive(hours) {
    // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
    // но только в том случае если машина заведена!
    if (this.running) {
      this.distance = hours * this.speed;
      console.log(hours);
      console.log(this.speed);
    }
  }
}

const car = new Car({ maxSpeed: 100 });
console.log(typeof car, car);

/*
 * Добавь к классу Car из предыдущего задания статический
 * метод getSpecs, который принимает объект-машину как параметр
 * и выводит в консоль значения полей maxSpeed, speed, running и distance.
 */

car.turnOn();
car.accelerate(50);
car.drive(2);

Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100
