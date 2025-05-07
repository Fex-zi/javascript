'use strict';

const Person = function (firstname, birthYear) {
  //Instance properties
  this.firstname = firstname;
  this.birthYear = birthYear;

  //dont do this
  //   this.calAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('Matilda', 2017);
const Ify = new Person('Ify', 1993);
console.log(matilda, Ify);

//prototype
Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};
Ify.calcAge();
Ify.calcAge();
Ify.calcAge();

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

const arr = [3, 5, 6, 5, 4, 3];
console.log(arr.__proto__);

//Challenge

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  return (this.speed += 10);
};
Car.prototype.break = function () {
  return (this.speed -= 10);
};
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

console.log(bmw, bmw.accelerate());
console.log(bmw, bmw.accelerate());
console.log(bmw, bmw.accelerate());
console.log(bmw, bmw.break());
console.log(bmw, bmw.accelerate());
console.log(bmw, bmw.accelerate());

//class expression
//const PersonCL = class{}

//class declaration
class PersonCL {
  constructor(firstName, birtYear) {
    this.firstName = firstName;
    this.birtYear = birtYear;
  }

  calcAge() {
    console.log(2025 - this.birtYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCL('Jessica', 1996);
console.log(jessica);
jessica.calcAge();
jessica.greet();

console.log(`----Setter and gettter`);

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);
