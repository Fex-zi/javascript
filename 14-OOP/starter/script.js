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
Car.prototype.brake = function () {
  return (this.speed -= 10);
};
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

console.log(bmw, bmw.accelerate());
console.log(bmw, bmw.accelerate());
console.log(bmw, bmw.accelerate());
console.log(bmw, bmw.brake());
console.log(bmw, bmw.accelerate());
console.log(bmw, bmw.accelerate());

//class expression
//const PersonCL = class{}

//class declaration
class PersonCL {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2025 - this.birthYear);
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

//Challenge
class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    //return (this.speed += 10);
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    //return (this.speed -= 10);
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  get speeUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCL('Ford', 120);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

const Person1 = function (firstname, birthYear) {
  //Instance properties
  this.firstname = firstname;
  this.birthYear = birthYear;
};

//prototype
Person1.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person1.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();

class StudentCL extends PersonCL {
  constructor(fullName, birthYear, course) {
    //Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2025 - this.birthYear
      } years old, but as a student, I feel more like ${
        2025 - this.birthYear + 10
      } `
    );
  }
}

const martha = new StudentCL('Martha Jones', 2000, 'Computer Science');
console.log(martha);
martha.introduce();
martha.calcAge();

// Encapsulation: Private Class Fields and Methods

class Account {
  //public fields
  locale = navigator.language;
  bank = 'Bankist';

  //private fields
  #movements = [];

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    //this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }
  deposit(val) {
    this.movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
    }
  }
}

const acc1 = new Account('Ifeanyi', 'USD', 111);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1);
