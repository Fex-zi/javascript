'use strict';

/* function calcAge(birthYear) {
  const age = 2025 - birthYear;
  console.log(firstName);

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //creating New variable with same name as outer scope's variable
      const firstName = 'Emmanuel';

      //reassigning outer scope's variable
      output = 'New Output';

      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);
    }
    console.log(millenial);
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Ifeanyi';
calcAge(1991);

console.log(this);

const calcAge = function (birthYear) {
  console.log(2025 - birthYear);
  console.log(this);
};

calcAge(1993);

const calcAgeArrow = birthYear => {
  console.log(2025 - birthYear);
  console.log(this);
};

calcAgeArrow(1994);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(2025 - this.year);
  },
};
jonas.calcAge();

const echoG = {
  year: 1997,
};

echoG.calcAge = jonas.calcAge;
echoG.calcAge();

const F = jonas.calcAge;


const jonas = {
  year: 1991,
  calcAge: function () {
    //console.log(this);
    console.log(2025 - this.year);

    // const self = this; //self or that before ES6
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    //this work with arrow as it inherints from parents scope
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`), //console.log will be undefined for arrow function
};
jonas.greet();
jonas.calcAge();

// Arguments Keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);

var addArrow = (a, b) => {
  //console.log(arguments); wont work
  return a + b;
};

console.log(addArrow(2, 5));
*/

const paige1 = {
  firstName: 'Paige',
  lastName: 'Loudon',
  age: 32,
};

function MarryPerson(originalPerson, newLastname) {
  originalPerson.lastName = newLastname;
  return originalPerson;
}

const marriedPaige = MarryPerson(paige1, 'Ojukwu');

// const marriedPaige = paige;
// marriedPaige.lastName = 'Ojukwu';

console.log('Before:', paige1);
console.log('After:', marriedPaige);

const paige = {
  firstName: 'Paige',
  lastName: 'Loudon',
  age: 32,
  family: ['Alice', 'Bob'],
};

// Shallow copy
const paigeCopy = { ...paige }; //... copies arrays
paigeCopy.lastName = 'Ojuwku';

//console.log(paige, paigeCopy);

// paigeCopy.family.push('James');
// paigeCopy.family.push('Andy');

// console.log('Before:', paige);
// console.log('After:', paigeCopy);

// Deep Copy/clone
const paigeClone = structuredClone(paige);
paigeClone.family.push('Mary');
paigeClone.family.push('John');

console.log('Before Clone:', paige);
console.log('After Clone:', paigeClone);
